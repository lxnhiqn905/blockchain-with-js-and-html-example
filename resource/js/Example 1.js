// This is block constructor, contain data, datetime, previewhash and hash
class Block {
	constructor(DateTime, Data, PreviewHash) {
		this.DateTime = DateTime;
		this.Data = Data;
		this.PreviewHash = PreviewHash;
		this.Hash = this.calculateHash();
	}
	// Calculate hash of block base on data, datetime, previewhash
	// Using SHA of CryptoJS to crypt hash
	calculateHash() {
		return CryptoJS.SHA256(this.PreviewHash + this.DateTime + JSON.stringify(this.Data)).toString();
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
	}

	// Get lasted Block
	getLastedBlock() {
		return this.BlockArray[this.BlockArray.length - 1];
	}

	// Create new block
	createNewBlock(newBlock) {
		// Get lasted block to save to PreviewHash
		newBlock.PreviewHash = this.getLastedBlock().Hash;
		// Calculate Hash for block with data input, datatime input and preview hash saved at above
		newBlock.Hash = newBlock.calculateHash();
		this.BlockArray.push(newBlock);

	}

	validateIntegrityBlock() {
		for (let i = 1; i < this.BlockArray.length; i++) {

			const currentBlock = this.BlockArray[i];
			const previewBlock = this.BlockArray[i - 1];
			// Calculate currentBlock again and compare with Hash on currentBlock
			// Incase not equal, return false
			if (currentBlock.Hash !== currentBlock.calculateHash()) {
				return false;
			}
			// Get PreviewHash in currentBlock and compare with block at index[i-1] - preview
			// Incase not equal, return false
			if (currentBlock.PreviewHash !== previewBlock.Hash) {
				return false;
			}
		}
		// Other, return true
		return true;
	}
}

function myFunction() {

	// Testing ..........
	// Initial BlockChain
	var MyCoin = new BlockChain();
	// Data input
	var dateTime1 = document.getElementById("dateTime1").value;
	var data1 = document.getElementById("data1").value;
	var block_1 = new Block(dateTime1, data1);

	// Create new Block
	MyCoin.createNewBlock(block_1);
	document.getElementById("block1").innerText = JSON.stringify(MyCoin.BlockArray[1], null, 2);

	// Data input
	var dateTime2 = document.getElementById("dateTime2").value;
	var data2 = document.getElementById("data2").value;
	var block_2 = new Block(dateTime2, data2);

	// Create new Block
	MyCoin.createNewBlock(block_2);
	document.getElementById("block2").innerText = JSON.stringify(MyCoin.BlockArray[2], null, 2);

	// View Fisrt block in BlockChain
	document.getElementById("firstBlock").innerText = JSON.stringify(MyCoin.BlockArray[0], null, 2);
	// View All block in BlockChain
	document.getElementById("blockChain").innerText = JSON.stringify(MyCoin, null, 2);

	// Validate integrity BlockChain MyCoin
	document.getElementById("status").innerText = JSON.stringify(MyCoin.validateIntegrityBlock());

}