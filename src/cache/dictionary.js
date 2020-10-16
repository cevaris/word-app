const axios = require('axios');

const dictionaryURL = 'http://s3.amazonaws.com/miscs.random/dictionary.sample.csv';

const dictionary = [];

axios
    .get(dictionaryURL)
    .then(response => {
        // break up the files based off each newline.
        const lines = response.data.split('\r\n');

        lines.forEach((line) => {
            const columns = line.split(',');

            if (columns.length === 3) {
                dictionary.push({
                    value: cleanup(columns[0]).toLowerCase(),
                    definition: cleanup(columns[2]),
                });
            }
        })
    });


function cleanup(string) {
    // '"apple"' -> 'apple'
    return string.replace(/"/g, '')
}

module.exports = dictionary;