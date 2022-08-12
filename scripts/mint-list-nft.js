const { ethers } = require("hardhat")
const PRICE = ethers.utils.parseEther("0.1")
async function mintAndlist() {
    const NFTmarketplace = await ethers.getContract("NFTmarketplace")
    console.log(NFTmarketplace.address)
    const basicnft = await ethers.getContract("BasicNft")
    console.log("Minting NFT...")
    const mintTx = await basicnft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    const tokenId = mintTxReceipt.events[0].args.tokenId
    console.log("Approving NFT...")
    const approvalTx = await basicnft.approve(NFTmarketplace.address, tokenId)
    await approvalTx.wait(1)
    console.log("Listing NFT...")
    const tx = await NFTmarketplace.listItem(basicnft.address, tokenId, PRICE)
    await tx.wait(1)
    console.log("NFT Listed!")
}
mintAndlist()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })