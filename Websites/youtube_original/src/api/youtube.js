import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // params:
    // {
    //     part: 'snippet',
    //     maxResult: 5,
    //     key: '[AIzaSyC_Jof3VGo7KeGegmQqfZm_UAe3xk06NrE]'
    // }
});