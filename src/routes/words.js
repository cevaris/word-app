const express = require('express');
const dictionary = require('../cache/dictionary');

const router = express.Router();

router.get("/words.json", function (req, res) {
    if (req.query.q) {
        const query = req.query.q.toLowerCase();
        const filteredResults =
            dictionary.filter(word => word.value.includes(query));

        res.json({ ok: true, value: filteredResults });
    } else {
        res.status(400).json({ ok: false, message: 'missing required q (query) param.' })
    }
});

module.exports = router;