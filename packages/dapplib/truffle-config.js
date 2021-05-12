require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purpose gesture slender swift tell'; 
let testAccounts = [
"0x6dc40b86d61435d67411ee257bfe1d56f46fe42e4ccf2b986018f24b1433aeba",
"0x04b73699920aabd16759971f8ac77d19595a266fe2f576619df510ccf85e7fdb",
"0x00523ce368576a0f068974fd1a9fd7a66d2c384e16ecfa580a91aeab4e8b1a8a",
"0x71883be09d2f810ef5f72d025e7815e9b8730c9f8bfb470dce6706a3a10d7881",
"0xc57fdc45fc96ab2981fc1a85c0e775093fdbf72883b96b45f2cd0787f1988a40",
"0x5b47888376b304e1c04f235ee0d9bea13da0858087859483b9d7628f19f7f324",
"0x378366781a554eb800492b2f9914c36e40ad25d628fd5520fdb87d6b00cb0f8f",
"0xe8d3cac4a218bbfb3c3755b4c3c4414864c77c979ba062e22111af2df640f735",
"0x667dd5c49631fddd00f27775a9ebcd2315c462113d510edfb561172c97ed6532",
"0x9652b3aa127f06985b822811c9c10521fa087c37133a30a0a564fab264f5a4ff"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
