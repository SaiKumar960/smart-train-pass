const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const QRCode = require('qrcode');

dotenv.config();

// Connect to DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-railway';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB for Seeding'))
    .catch(err => {
        console.error('DB Connection Failed:', err);
        process.exit(1);
    });

const SPECIFIC_NAMES = [
    "KOTA SAI KUMAR",
    "SIREESHA",
    "RAMAKRISHNA",
    "NIRMALA",
    "PAWAN KALYAN"
];

const RANDOM_NAMES = ["Amit Patel", "Priya Sharma", "Rahul Singh", "Sneha Gupta", "Vikram Malhotra"];

const generateFakeAadhaar = () => {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
};

const generateFakeBank = (name) => {
    return {
        accountNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
        bankName: "State Bank of India",
        ifscCode: "SBIN0001234",
        branchName: "Main Branch, Hyderabad",
        balance: Math.floor(5000 + Math.random() * 50000)
    };
};

const seedDB = async () => {
    try {
        // Clear existing
        await User.deleteMany({});
        console.log('Cleared existing users.');

        const allNames = [...SPECIFIC_NAMES, ...RANDOM_NAMES];

        for (const name of allNames) {
            const aadhaar = generateFakeAadhaar();

            // Generate QR
            const qrPayload = JSON.stringify({
                uid: aadhaar,
                name: name,
                valid: true,
                ts: Date.now()
            });
            const qrCodeDataUrl = await QRCode.toDataURL(qrPayload);

            await User.create({
                fullName: name,
                aadhaarNumber: aadhaar,
                email: `${name.replace(/\s/g, '').toLowerCase()}@example.com`,
                mobile: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
                address: "Hyderabad, India",
                qrCodeDataUrl: qrCodeDataUrl,
                bankAccounts: [generateFakeBank(name)]
            });
            console.log(`Created User: ${name} | Aadhaar: ${aadhaar}`);
        }

        console.log('Seeding Complete!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding Error:', err);
        process.exit(1);
    }
};

seedDB();
