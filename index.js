// const express = require("express");
// const app = express();
//https://rpc-mainnet.maticvigil.com/
// Network Name: Matic Mainnet
// New RPC URL: https://rpc-mainnet.maticvigil.com/
// Chain ID: 137
// Currency Symbol (optional): MATIC
// Block Explorer URL (optional): https://explorer.matic.network/
//https://api.polygonscan.com/api?module=contract&action=getabi&address=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&apikey=0x831753DD7087CaC61aB5644b308642cc1c33Dc13
var Web3 = require('web3');
const fetch = require('node-fetch');
async function main(){
    var web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mainnet.maticvigil.com/'));
    var hash='0x591ca00bf6b404e24e21732023abc0416673beff9586f37e61fb0f07ca560940';
    var contract =await web3.eth.getTransactionReceipt(hash) 
    console.log(contract)
    fetch('https://api.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=0x591ca00bf6b404e24e21732023abc0416673beff9586f37e61fb0f07ca560940')
    .then(response => response.json())
    .then(data => {
        // console.log("<<<<<<<<<<<<<<<<<<<<BSC SCAN API RESPONSE START >>>>>>>>>>>>>>");
        console.log(data);
        // console.log("-------------------BSC SCAN API RESPONSE END --------------------");
        if (data.status) {
    console.log('[------------------------------------------------status------------------------------------------------------------]')
    console.log(data.status)
         
          
       
            //Update Transaction status to db
    
            
         
        } else {
    
        }
    
    }
    );

}
main()
