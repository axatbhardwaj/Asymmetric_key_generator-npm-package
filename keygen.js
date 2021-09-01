function Keygen() {
  const crypto = require('crypto');
  const x = crypto.generateKeyPairSync('rsa', {
    modulusLength: 530, // options
    publicExponent: 0x10101,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'der',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'der',
    },
  });
  return x;
}
module.exports = Keygen;
