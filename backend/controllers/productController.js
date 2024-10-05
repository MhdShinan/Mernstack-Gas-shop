const axios = require('axios');
const Product = require('../models/Product');

// Handle form submission for sending Telegram messages
const sendMessage = async (req, res) => {
    const { FirstName, PhoneNumber } = req.body;
    const message = `Name: ${FirstName}, Phone Number: ${PhoneNumber}`;
    
    // Your Telegram bot token and chat ID
    const botToken = process.env.BOT_TOKEN; // Use environment variable
    const chatId = process.env.CHAT_ID;     // Use environment variable

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    try {
        await axios.post(url, {
            chat_id: chatId,
            text: message
        });
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message.');
    }
};

module.exports = { sendMessage };
