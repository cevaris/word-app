import axios from 'axios';

interface Word {
    value: string
    definition: string
}

export async function getWords(query: string): Promise<Word[]> {
    const wordsRequestURL = `http://localhost:3000/words.json?q=${query}`;
    const response = await axios.get<Word[]>(wordsRequestURL);
    return response.data;
}