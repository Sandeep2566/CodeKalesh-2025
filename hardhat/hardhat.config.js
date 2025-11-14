require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
   sepolia: {
  url: "https://eth-sepolia.g.alchemy.com/v2/pO9XH3SIkAO6FL1QAClae", // or Alchemy URL
  accounts: ["766bec90f27a7bed5280fa15c31f86c5317e8da343c1fe787364877b07a148e8"]
}
  },
};