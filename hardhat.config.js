require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "BSC_test",
  networks: {
    hardhat: {
    },
    ethereum:{
      url: "https://mainnet.infura.io/v3/2c327e3276c54e609c310695044b534a",
      accounts:["f86593823b51b2f30ff0d5c67b48dd29f4cbd7ef0efbea69f89320f6ed2e9a95"],
      gasPrice:9000000000
    },
    BSC_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId:97,
      accounts: ["77d38abcf40931dde24c3970715532b3cb37f0a39f85f4e83754b518ac0a79dc"]
    },
    Roburna: {
      url: "https://preseed-testnet-1.roburna.com",
      chainId:159,
      accounts: ["77d38abcf40931dde24c3970715532b3cb37f0a39f85f4e83754b518ac0a79dc"]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "FX1NYIQCGGTUI8K53YCBQFS1N6X6DXCFAP"
    //apiKey: "N5T3AVC376B3VGU5Z7JUI658MS2Y7A9P9W"
    //apiKey:"e3d46e626c465a670e0747ed035fd9d4eaa33036c78a66c9e9ebd63254befe64"
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
