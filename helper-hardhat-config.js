networkConfig = {
    4: {
        name: "rinkeby"
    },
    31337: {
        name: "localnetwork"
    }
}
const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
module.exports = {
    networkConfig, developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS
}