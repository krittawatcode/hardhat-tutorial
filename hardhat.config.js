require("@nomiclabs/hardhat-waffle");
const path = require("path");
require('dotenv').config({path: './.env'});


/*
* influra api key can get from new project with https://infura.io/
* ROPSTEN_PRIVATE_KEY came from matamask privatekey
*/
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFLURA_API_KEY}`,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
