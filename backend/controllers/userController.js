const User = require('../models/User');
const QRCode = require('qrcode');

// Register a new user and generate Digital Aadhaar QR
exports.registerUser = async (req, res) => {
    try {
        const { fullName, aadhaarNumber, bankAccounts, ...otherData } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ aadhaarNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this Aadhaar already exists' });
        }

        // Generate QR Code
        // In a real system, this would be a signed JWT or encrypted string
        const qrPayload = JSON.stringify({
            uid: aadhaarNumber,
            name: fullName,
            valid: true,
            ts: Date.now()
        });

        const qrCodeDataUrl = await QRCode.toDataURL(qrPayload);

        // Create User
        const newUser = new User({
            fullName,
            aadhaarNumber,
            qrCodeDataUrl,
            bankAccounts: bankAccounts || [], // Handle empty bank accounts
            ...otherData
        });

        await newUser.save();

        res.status(201).json({
            message: 'Registration Successful. Digital Aadhaar Generated.',
            user: newUser
        });

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get User by Aadhaar
exports.getUserByAadhaar = async (req, res) => {
    try {
        const { aadhaar } = req.params;
        const user = await User.findOne({ aadhaarNumber: aadhaar });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Mock Link Bank Account
exports.linkBankAccount = async (req, res) => {
    try {
        const { aadhaarNumber, bankAccount } = req.body;

        const user = await User.findOne({ aadhaarNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.bankAccounts.push(bankAccount);
        await user.save();

        res.json({ message: 'Bank Link Successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
