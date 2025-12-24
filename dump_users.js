const mongoose = require('mongoose');
const User = require('./backend/models/User');

mongoose.connect('mongodb://localhost:27017/smart-railway')
    .then(async () => {
        const users = await User.find({}, 'fullName aadhaarNumber');
        console.log('--- TEST DATA ---');
        users.forEach(u => console.log(`${u.fullName}: ${u.aadhaarNumber}`));
        console.log('-----------------');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
