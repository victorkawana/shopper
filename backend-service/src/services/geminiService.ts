import axios from 'axios';

export const processImage = async (image: string) => {
    // Integração com a API do Google Gemini
    const response = await axios.post('https://ai.google.dev/gemini-api/vision', {
        image,
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        },
    });

    return response.data;
};
