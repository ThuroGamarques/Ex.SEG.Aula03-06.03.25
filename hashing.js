const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const senha = "maldito_pegg";

// Hash usando SHA-256 (fixo)
const sha256Hash = crypto.createHash('sha256').update("%aXwel%"+senha+"X4BL4U").digest('hex');
console.log("SHA-256 Hash:", sha256Hash);