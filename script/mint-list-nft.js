const { ethers } = require("hardhat")

async function mintAndList() {
    const nftMarketplace = await ethers.getContract("NFTmarketplace")
    // const nftMarketplace = await ethers.getContractAt("NftMarketplace", "0x5FbDB2315678afecb367f032d93F642f64180aa3")
    // const basicNFT = await ethers.getContract("BasicNft")
    console.log("-------------------------")
    console.log(`the address of NftMarketplace is : ${nftMarketplace.address}`)
    // console.log(`the address of basicNFT is : ${basicNFT.address}`)
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })