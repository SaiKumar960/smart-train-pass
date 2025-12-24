const mongoose = require('mongoose');

const BankAccountSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  bankName: { type: String, required: true },
  ifscCode: { type: String, required: true },
  branchName: String,
  balance: { type: Number, default: 5000 } // Mock balance
});

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  dob: String, // Format: DD-MM-YYYY
  address: String,
  mobile: String,
  email: String,
  
  // Generated Data
  qrCodeDataUrl: String, // Base64 image of the QR code
  
  // Linked Banking
  bankAccounts: [BankAccountSchema],
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
