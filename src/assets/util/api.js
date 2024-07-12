import axios from 'axios';

const API_URL = 'http://localhost:8080';

const brainFlixAPI = axios.create({
    baseURL: API_URL,
});

export const fetchVideos = async () => {
    try{
        const response = await brainFlixAPI.get(`/videos`);
        return response.data;
    }catch(error){
        console.error("Error fetching videos:", error);
    }
};

export const fetchVideoById = async (videoId) => {
    try{
        const response = await brainFlixAPI.get(`/videos/${videoId}`);
        console.log("Fetched video (with comments):", response.data);
        return response.data;
    }catch(error){
        console.error("Error fetching video:", error);
    }
};

export const postComment = async (videoId, commentData) => {
    try{
        const response = await brainFlixAPI.post(`videos/${videoId}/comments`, commentData);
        return response.data
    }catch(error){
        console.error("Error posting comment", error);
    }
}

export const deleteComment = async (videoId, commentId) => {
    try{
        const response = await brainFlixAPI.delete(`/videos/${videoId}/comments/${commentId}`);
        return response.data;
    }catch(error){
        console.error("Error deleting comment", error)
    }
};

export const postVideo = async(newVideo) => {
    try{
        const response = await brainFlixAPI.post('/videos', newVideo)
        return response.data;
    }catch(error){
        console.error("Error posting video");
    }
};