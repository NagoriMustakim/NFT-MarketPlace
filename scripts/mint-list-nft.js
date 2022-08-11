const { ethers } = require("hardhat")

async function mintAndlist() {
    const NftMarketplace = await ethers.getContract("NFTmarketplace")
    console.log(NftMarketplace.address)
}
mintAndlist()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })