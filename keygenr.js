// Node.js program to demonstrate the
// crypto.generateKeyPair() method

// Including generateKeyPair from crypto module
const crypto = require('crypto');

// Calling generateKeyPair() method
// with its parameters
let x = crypto.generateKeyPair('rsa', {
modulusLength: 530, // options
publicExponent: 0x10101,
publicKeyEncoding: {
	type: 'pkcs1',
	format: 'der'
},
privateKeyEncoding: {
	type: 'pkcs8',
	format: 'der',
	
}
}, (err, publicKey, privateKey) => { // Callback function
	if(!err)
	{
		// Prints new asymmetric key pair
        
        return prk;
		// console.log();
		// console.log("Private Key is: ", privateKey.toString('hex'));
	}
	else
	{
		// Prints error
		console.log("Errr is: ", err);
	}
		
});
// console.log(privateKey, publicKey);
console.log(x);
