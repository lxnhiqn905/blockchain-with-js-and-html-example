

var createNewBlockButton1 = document.getElementById("createNewBlock1");

createNewBlockButton1.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData1").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce1").value = block.Nonce;
	document.getElementById("datetime1").value = block.DateTime;
	document.getElementById("data1").value = block.Data;
	document.getElementById("outputHash1").value = block.Hash;

}


var createNewBlockButton2 = document.getElementById("createNewBlock2");

createNewBlockButton2.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData2").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce2").value = block.Nonce;
	document.getElementById("datetime2").value = block.DateTime;
	document.getElementById("data2").value = block.Data;
	document.getElementById("outputHash2").value = block.Hash;

}


var createNewBlockButton3 = document.getElementById("createNewBlock3");

createNewBlockButton3.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData3").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce3").value = block.Nonce;
	document.getElementById("datetime3").value = block.DateTime;
	document.getElementById("data3").value = block.Data;
	document.getElementById("outputHash3").value = block.Hash;

}


var createNewBlockButton4 = document.getElementById("createNewBlock4");

createNewBlockButton4.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData4").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce4").value = block.Nonce;
	document.getElementById("datetime4").value = block.DateTime;
	document.getElementById("data4").value = block.Data;
	document.getElementById("outputHash4").value = block.Hash;

}


var createNewBlockButton5 = document.getElementById("createNewBlock5");

createNewBlockButton5.onclick = function() {

	// Data input
	var inputData = document.getElementById("inputData5").value;
	var block = new Block(inputData,null, null);

	// Create new Block
	createNewBlock(block);

	document.getElementById("nonce5").value = block.Nonce;
	document.getElementById("datetime5").value = block.DateTime;
	document.getElementById("data5").value = block.Data;
	document.getElementById("outputHash5").value = block.Hash;

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
