
const crypto = require('crypto');

// Hash with SHA-256
const hash = crypto.createHash('sha256')
                   .update('hlo')
                   .digest('hex');

console.log('SHA-256:', hash);

const secret = 'my_siuy';
const hmac = crypto.createHmac('sha256', secret)
                   .update('messageing viyh gujli')
                   .digest('binary');

console.log('HMAC:', hmac);

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Allah hu Akbar', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);

// PBKDF2 (sync version)
const key1 = crypto.pbkdf2Sync('password', 'salt', 100000, 64, 'sha512');
console.log('PBKDF2:', key1.toString('hex'));

// Scrypt (async)
crypto.scrypt('password', 'salt', 64, (err, key2) => {
  if (err) throw err;
  console.log('Scrypt:', key2.toString('hex'));
});

const { generateKeyPairSync } = require('crypto');
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Sign
const sign = crypto.createSign('sha256');
sign.update('my data');
sign.end();
const signature = sign.sign(privateKey, 'hex');

const verify = crypto.createVerify('sha256');
verify.update('my data' );
verify.end();
const isValid = verify.verify(publicKey, signature, 'hex');

console.log('Signature valid?', isValid);


