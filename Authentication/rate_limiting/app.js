const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

// 1. Limiter define karo as per your image rule
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes ko milliseconds me convert kiya
    max: 5, // Max 5 requests allow hain ek IP se
    message: {
        status: 429,
        error: "Bhai thoda sabar karo! 15 mins me 5 se zyada attempts nahi."
    },
    standardHeaders: true, // Rate limit info wapas bhejega headers me (X-RateLimit-Limit)
    legacyHeaders: false, // Old headers ko disable karega
});

// 2. Route par apply karo (Apply on Login & Register)
app.post('/api/login', loginLimiter, (req, res) => {
    res.send("Login successful!");
});

app.post('/api/register', loginLimiter, (req, res) => {
    res.send("Registration successful! ");
});

app.listen(3000, () => console.log("Server running on port 3000"));