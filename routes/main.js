const express = require('express');
const router = express.Router();

const members = [];

// Index Page
router.get('/', (req, res) => {
    res.render('index');
});

// XSS Page
router.get('/xss', (req, res) => {
    res.render('xss', {
        members: members
    });
});

// XSS Submit
router.post('/xss/submit', (req, res) => {
    members.push(req.body.content);
    console.log("Successfully saved a new member");
    res.redirect('/xss');
});

module.exports = router;