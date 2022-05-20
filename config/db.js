const mongoose = require('mongoose');

// bcause when work with `mongoose` you'll work with `promises`
// and i prever to use async
const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MonggoDB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;