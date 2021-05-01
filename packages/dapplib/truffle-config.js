require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pulse hunt knee outer tongue'; 
let testAccounts = [
"0x07dc854766c007c9d52b46b53bb7ae98ef888d2d38226d93ddfc2f71891bffba",
"0xea67ea8cc0fe63c79d1fb85f3fbfd36cc48a51649458dbefc70af0bd9d60f406",
"0x93f42420078e79825b31a0ba6e929f571d63b0fdc88bff7349f9c5126d61ae53",
"0x04a62b426c2c2b7b868c897a2706511b2e0fe1d42b9412f4da1babf226044126",
"0xb6482bd9c4146f4bbc724361dd8e5080a040c60b8b4f3e20b4cbf18c002bd38f",
"0x9b991698f5568d1cff1f35c0d5693661de30f995e7a02901262fe1949b46284c",
"0xc7396b3c61b9b45cd5a1af2e14b19e67437d1a113db3638993296f58cf1de567",
"0x7a1ac5cf9e3285cb64f41679beef4af5093403fd8c0d3dc896f1c19738e38a37",
"0x800d1192d281b10ee2a7ceb890d0fd1aa09f57562f52b909074bf7afd40cee8e",
"0x524ccec45b132050c6ebfc67c9e4939535ff5f88250f22596920113e9e6607e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

