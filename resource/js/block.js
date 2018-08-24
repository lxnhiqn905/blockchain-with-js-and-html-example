

var createNewBlockButton = document.getElementById("createNewBlock");

createNewBlockButton.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce").value = block.Nonce;
	document.getElementById("datetime").value = block.DateTime;
	document.getElementById("outputHash").value = block.Hash;

}

// This is block constructor, contain data, datetime, previewhash and hash
class Block {
	constructor(Data, DateTime, Nonce) {
		this.Data = Data;
		this.DateTime = DateTime;
		this.Nonce = Nonce;
		this.Hash = this.calculateHash();
	}
	// Calculate hash of block base on data, datetime, previewhash
	// Using SHA of CryptoJS to crypt hash
	calculateHash() {
		return CryptoJS.SHA256(this.DateTime + JSON.stringify(this.Data) + this.Nonce).toString();
	}

}

// Create new block
function createNewBlock(newBlock) {
	var hardLevel = 3;

	var today = new Date();
	
	// Calculate Hash for block with data input, datatime input and preview hash saved at above
	while (newBlock.Hash.substring(0, hardLevel) !== Array(hardLevel + 1).join("0")) {
		newBlock.Nonce++;
		newBlock.DateTime = today.toLocaleDateString();
		newBlock.Hash = newBlock.calculateHash();
	}
	
	return newBlock;

}
