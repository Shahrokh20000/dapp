// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenLocker {
    // Store the amount of tokens each address has deposited
    mapping(address => uint256) private balances;

    // Function to deposit native tokens to the contract
    function deposit() public payable {
        // Update the balance of the sender
        balances[msg.sender] += msg.value;
    }

    // Function to withdraw native tokens from the contract
    function withdraw(uint256 amount) public {
        // Check that the sender has enough balance to withdraw
        require(balances[msg.sender] >= amount, "Not enough balance");

        // Update the sender's balance
        balances[msg.sender] -= amount;

        // Transfer the requested amount to the sender
        payable(msg.sender).transfer(amount);
    }
}
