var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('14e5a2d3'),
  addressVersion: 55,
  privKeyVersion: 205,
  P2SHVersion: 55,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('26afb505e714c666f0bfbd4884aad5eb05bbd439b51ede86df62f25401040000'),
    merkle_root: hex('2c859a6fd90361e455f327235fb106546ea6ef1f5821462be3094c94ca80b13b'),
    height: 0,
    nonce: 163555,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1488375642,
    bits: 503382015,
  },
  dnsSeeds: [
    '194.135.80.127',
	'185.5.54.65',
	'45.63.51.33',
	'45.76.5.197',
	'45.76.88.24',
	'185.5.53.201'
  ],
  defaultClientPort: 35950
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
