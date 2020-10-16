const express = require('express');

const router = express.Router();

const dictionary = [
    {value: 'apple', definition: 'some fruit'},
    {value: 'banana', definition: 'some yellow fruit'},
    {value: 'avacado', definition: 'maybe some fruit'},
    {value: 'stone', definition: 'is a rock'},
    {value: 'lily', definition: 'Adams dog name'},
    {value: 'oscar', definition: 'who the f88K is oscar'},
];

router.get("/words.json", function (req, res) {
    res.json({value: dictionary});
});

module.exports = router;