const express = require('express');
const app = express();

// Helper function to get a cheerful message based on the day of the week
const getDayMessage = () => {
    const dayOfWeek = new Date().getDay();
    switch (dayOfWeek) {
        case 1:
            return "Happy Monday! Start your week with energy!";
        case 5:
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// GET endpoint for greeting
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || "Guest";
    const response = {
        welcomeMessage:`Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage()
    };
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
