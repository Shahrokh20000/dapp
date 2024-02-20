<!DOCTYPE html>
<html>
<head>
    <title>TokenLocker DApp</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
    <script>
        window.addEventListener('load', async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                } catch (error) {
                    console.error("User denied account access");
                }
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }

            // Contract ABI
            const contractABI = [
                {
                    "inputs": [],
                    "name": "deposit",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "withdraw",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];

            // Contract Address
            const contractAddress = '0x4D64B7D1cA07180839F734f70eeb5b1Be4dAb2D2';

            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // Example function call to deposit tokens
            document.getElementById('deposit').addEventListener('click', async () => {
                const amount = web3.utils.toWei('1', 'ether'); // Example amount to deposit 1 ETH
                await contract.methods.deposit().send({ from: web3.eth.defaultAccount, value: amount });
            });

            // Example function call to withdraw tokens
            document.getElementById('withdraw').addEventListener('click', async () => {
                const amount = web3.utils.toWei('1', 'ether'); // Example amount to withdraw 1 ETH
                await contract.methods.withdraw(amount).send({ from: web3.eth.defaultAccount });
            });
        });
    </script>
</head>
<body>
    <h1>TokenLocker DApp</h1>
    <button id="deposit">Deposit</button>
    <button id="withdraw">Withdraw</button>
</body>
</html>
