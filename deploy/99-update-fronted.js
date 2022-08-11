const { ethers, network } = require("hardhat")
const fs = require("fs")
const frontendContractFile = "../nft-marketplace-frontend/constants/networkMapping.json"
module.exports = async function () {
    if (process.env.UPDATE_FRONT_END) {
        console.log("updating front end....")
        await updateContractAddresses()
    }
}
async function updateContractAddresses() {
    const nftMarketplace = await ethers.getContract("NFTmarketplace")
    const chainId = network.config.chainId.toString()
    const contractAddresses = JSON.parse(fs.readFileSync(frontendContractFile, "utf-8")) //this will add contractAddresses to json file in frontend
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["NFTmarketplace"].includes(nftMarketplace.address)) {
            contractAddresses[chainId]["NFTmarketplace"].push(nftMarketplace.address)
        }
        else {
            contractAddresses[chainId] = { NFTmarketplace: [nftMarketplace.address] }
        }
        fs.writeFileSync(frontendContractFile, JSON.stringify(contractAddresses))
    }

}
module.exports.tags = ["all", "frontend"]