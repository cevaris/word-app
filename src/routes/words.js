const express = require('express');

const router = express.Router();

const dictionary = [
    { value: 'apple', definition: 'some fruit' },
    { value: 'banana', definition: 'some yellow fruit' },
    { value: 'avacado', definition: 'maybe some fruit' },
    { value: 'stone', definition: 'is a rock' },
    { value: 'lily', definition: 'Adams dog name' },
    { value: 'oscar', definition: 'who the f88K is oscar' },
];

router.get("/words.json", function (req, res) {
    if (req.query.q) {
        const query = req.query.q;
        const filteredResults =
            dictionary.filter(word => word.value.includes(query));

        res.json({ ok: true, value: filteredResults });
    } else {
        res.status(400).json({ ok: false, message: 'missing required q (query) param.' })
    }
});

module.exports = router;