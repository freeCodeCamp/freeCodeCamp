//for producing hashes
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor (index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }
    
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        
        console.log("Block mined: " + this.hash);
    }
}


class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        //change difficulty of mining here
        this.difficulty = 4;
    }
    
    createGenesisBlock(){
        return new Block(0, "02/01/2018", "Genesis Block", "0");
    }
    
    getlatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(newBlock){
        newBlock.previousHash = this.getlatestBlock().hash;
        //comment the code below to produce blocks without any difficulty
        newBlock.mineBlock(this.difficulty);
        //uncomment the code below to produce blocks without any difficulty
        //newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    
    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            } //check for hash calculations
            
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            } //check whether current block points to the correct previous block
            
        }
        
         return true;
    }
    
}


let nbcoin = new Blockchain();

console.log('Mining block 1...');
nbcoin.addBlock(new Block (1, "01/01/2018", {amount: 20}));
console.log('Mining block 2...');
nbcoin.addBlock(new Block (2, "02/01/2018", {amount: 40}));
console.log('Mining block 3...');
nbcoin.addBlock(new Block (3, "02/01/2018", {amount: 40}));

console.log(JSON.stringify(nbcoin, null, 4));

console.log('Is Blockchain valid? ' + nbcoin.isChainValid());

console.log("Tampering with blockchain...");

nbcoin.chain[1].data = { amount: 100 };
nbcoin.chain[1].hash = nbcoin.chain[1].calculateHash();

console.log('Is Blockchain valid? ' + nbcoin.isChainValid());

console.log(JSON.stringify(nbcoin, null, 4));
