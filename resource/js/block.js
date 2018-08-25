var createNewBlockButton = document.getElementById("createNewBlock");

createNewBlockButton.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData").value;
	var block = new Block(inputData);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce").value = block.Nonce;
	document.getElementById("datetime").value = block.DateTime;
	document.getElementById("data").value = block.Data;
	document.getElementById("outputHash").value = block.Hash;

}

// This is block constructor, contain data, datetime, previewhash and hash
class Block {
	constructor(Data) {
		var today = new Date();

		this.Data = Data;
		this.DateTime = today.toLocaleDateString();
		this.Nonce = 0;
		this.Hash = this.calculateHash();
	}
	// Calculate hash of block base on data, datetime, previewhash
	// Using SHA of CryptoJS to crypt hash
	calculateHash() {
		return CryptoJS.SHA256(this.DateTime + JSON.stringify(this.Data) + this.Nonce).toString();
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

// Create new block
function createNewBlock(newBlock) {
	var hardLevel = 3;
	return newBlock.mineBlock(hardLevel);
}
