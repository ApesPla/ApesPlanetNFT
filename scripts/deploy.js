
const hre = require("hardhat");

async function main() {
  const single = await hre.ethers.getContractFactory("ApesPlanetV1");
  

  const greeter = await upgrades.deployProxy(single,["APES PLANET","APES"],{initializer: 'initialize'});
  //const greeter = await hre.run("compile");
  
  //await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
