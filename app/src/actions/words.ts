import axios from 'axios';

export interface WordsResponse {
    ok: boolean
    value: Word[]
}

export interface Word {
    value: string
    definition: string
}

export async function getWords(query: string): Promise<Word[]> {
    const wordsRequestURL = `http://localhost:3000/words.json?q=${query}`;
    const response = await axios.get<WordsResponse>(wordsRequestURL);
    return response.data.value;
}