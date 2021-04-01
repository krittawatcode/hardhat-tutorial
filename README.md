# Setup 
`make sure you install git and node`   
for easy setup without clone this repo you can follow hardhat tutorial  
    https://hardhat.org/tutorial/creating-a-new-hardhat-project.html
- install hardhat to your project   
  `npm install --save-dev hardhat`  
- install plugin for testing  
  `npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`

## Run 
- `npx hardhat compile` 
after compile you will get two more folder "artifacts and cache"
### testing
- `npx hardhat test`  
- `npx hardhat test test/Token.js` <- for specific file 

## Deployment 
Before deploy create new `.env` to collect your secret that use with scripts/deploy.js 
- local  
  `npx hardhat run scripts/deploy.js`
- testnet  
  `npx hardhat run scripts/deploy.js --network ropsten`