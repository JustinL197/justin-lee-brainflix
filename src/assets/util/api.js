import axios from 'axios';

const API_URL = `https://unit-3-project-api-0a5620414506.herokuapp.com/`;
const API_KEY = `c6a768e0-9b26-4b75-9a29-a6eb0fb52d46`;

const brainFlixAPI = axios.create({
    baseURL: API_URL,
});

export const fetchVideos = async () => {
    try{
        const response = await brainFlixAPI.get(`/videos`, {
            params: {api_key: API_KEY}
        });
        return response.data;
    }catch(error){
        console.error("Error fetching videos:", error);
    }
};

export const fetchVideoById = async (videoId) => {
    try{
        const response = await brainFlixAPI.get(`/videos/${videoId}`, {
            params: {api_key: API_KEY}
        });
        return response.data;
    }catch(error){
        console.error("Error fetching video:", error);
    }
};