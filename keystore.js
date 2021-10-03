const Web3 = require('web3');
const fs = require('fs');
//  node keystore EncryptKey f3f887c6e21038ba7af59b0261fc21ff49714e24e0ebbc5fb25aaba634da46fa password ~/PrivateKeyKeyStore.txt

var linkToBlockchainServer = "";


var web3 = new Web3(new Web3.providers.HttpProvider(linkToBlockchainServer));
var data =  web3.eth.accounts.encrypt(process.argv[3], process.argv[4]);

fs.writeFileSync(process.argv[5], JSON.stringify(data));
console.log(JSON.stringify(data));
process.exit(0);
