

var createNewBlockButton1 = document.getElementById("createNewBlock1");

createNewBlockButton1.onclick = function() {

	// Init blockchain
	var blockchain = new BlockChain();

	// Create new Block with input data
	blockchain.createNewBlock(new Block(document.getElementById("inputData1").value))
	// Get block created
	var block = blockchain.BlockArray[1];
	document.getElementById("nonce1").value = block.Nonce;
	document.getElementById("datetime1").value = block.DateTime;
	document.getElementById("data1").value = block.Data;
	document.getElementById("previewHash1").value = block.PreviewHash;
	document.getElementById("outputHash1").value = block.Hash;

	// Create new Block with input data
	blockchain.createNewBlock(new Block(document.getElementById("inputData2").value))
	// Get block created
	var block = blockchain.BlockArray[2];
	document.getElementById("nonce2").value = block.Nonce;
	document.getElementById("datetime2").value = block.DateTime;
	document.getElementById("data2").value = block.Data;
	document.getElementById("previewHash2").value = block.PreviewHash;
	document.getElementById("outputHash2").value = block.Hash;

	// Create new Block with input data
	blockchain.createNewBlock(new Block(document.getElementById("inputData3").value))
	// Get block created
	var block = blockchain.BlockArray[3];
	document.getElementById("nonce3").value = block.Nonce;
	document.getElementById("datetime3").value = block.DateTime;
	document.getElementById("data3").value = block.Data;
	document.getElementById("previewHash3").value = block.PreviewHash;
	document.getElementById("outputHash3").value = block.Hash;

	// Create new Block with input data
	blockchain.createNewBlock(new Block(document.getElementById("inputData4").value))
	// Get block created
	var block = blockchain.BlockArray[4];
	document.getElementById("nonce4").value = block.Nonce;
	document.getElementById("datetime4").value = block.DateTime;
	document.getElementById("data4").value = block.Data;
	document.getElementById("previewHash4").value = block.PreviewHash;
	document.getElementById("outputHash4").value = block.Hash;

	// Create new Block with input data
	blockchain.createNewBlock(new Block(document.getElementById("inputData5").value))
	// Get block created
	var block = blockchain.BlockArray[5];
	document.getElementById("nonce5").value = block.Nonce;
	document.getElementById("datetime5").value = block.DateTime;
	document.getElementById("data5").value = block.Data;
	document.getElementById("previewHash5").value = block.PreviewHash;
	document.getElementById("outputHash5").value = block.Hash;

}

// This is block constructor, contain data, datetime, previewhash and hash
class Block {
	constructor(Data) {
		var today = new Date();

		this.Data = Data;
		this.DateTime = today.toLocaleDateString();;
		this.Nonce = 0;
		this.PreviewHash = null;
		this.Hash = this.calculateHash();
	}
	// Calculate hash of block base on data, datetime, previewhash
	// Using SHA of CryptoJS to crypt hash
	calculateHash() {
		return CryptoJS.SHA256(this.PreviewHash + this.DateTime + JSON.stringify(this.Data) + this.Nonce).toString();
	}
	// Mining new block
	mineBlock(hardLevel){
		while (this.Hash.substring(0, hardLevel) !== Array(hardLevel + 1).join("0")) {
			this.Nonce++;
			this.Hash = this.calculateHash();
		}
		alert("Mining completed:" + this.Hash)
	}

}

// Define BlockChain
class BlockChain {
	// Constructor of blockchain
	constructor() {
		// Define array to contail blocks => Blockchain 
		this.BlockArray = [];
		// Push the first block in to Blockchain
		this.BlockArray.push(new Block("1/1/2018", "This new Fisrt block", "0"));
		// Setting hard level
		this.hardLevel = 3;
	}
	// Get lasted Block
	getLastedBlock() {
		return this.BlockArray[this.BlockArray.length - 1];
	}

	// Create new block
	createNewBlock(newBlock) {
		// Get lasted block to save to PreviewHash
		newBlock.PreviewHash = this.getLastedBlock().Hash;
		// Using mineBlock to calculate Hash with input is hard level
		newBlock.mineBlock(this.hardLevel);
		this.BlockArray.push(newBlock);
		
	}
}
