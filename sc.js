const { ethers } = require("hardhat")

async function mintAndlist() {
    const NFTmarketplace = await ethers.getContract("NFTmarketplace")
    console.log(NFTmarketplace.address)
}
mintAndlist()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })