const axios = require('axios');
jest.mock("axios");

const data = [
    `"Apple", "n", "definition a"\r`,
    `"Banana", "n", "definition b"\r`,
    `"Citrus", "n", "definition c"\r\n`,
];
axios.get.mockImplementation(() => Promise.resolve({ data: data.join("\n") }));

const request = require('supertest');
const app = require('../src/app');
// const axios = require('../src/axios');
// const axios = require('axios');


let server;

beforeAll((done) => {
    // server does not get shutdown properly
    // https://github.com/facebook/jest/issues/6907
    server = app.listen(done);
})

afterAll((done) => {
    // after all test are executed, shutdown server
    server.close(done);
});

describe('random string api', () => {
    it('returns 200 and words', async () => {
        const resp = await request(server)
            .get(`/words.json?q=a`);

        expect(resp.status).toBe(200);
        expect(resp.body.ok).toBeTruthy();
        expect(resp.body.value).toBeTruthy();
        expect(resp.body.value).toStrictEqual([
            { value: 'apple', definition: 'definition a' },
            { value: 'banana', definition: 'definition b' },
        ])
    });

    it('returns 200 and empty list if no match', async () => {
        const resp = await request(server)
            .get(`/words.json?q=no-such-word`);

        expect(resp.status).toBe(200);
        expect(resp.body.ok).toBeTruthy();
        expect(resp.body.value).toBeTruthy();
        expect(resp.body.value).toStrictEqual([]);
    });

    it('returns 400 if query parameter is missing', async () => {
        const resp = await request(server)
            .get(`/words.json`);

        expect(resp.status).toBe(400);
        expect(resp.body.ok).toBeFalsy();
        expect(resp.body.message).toMatch(/missing required q/);
    });
});