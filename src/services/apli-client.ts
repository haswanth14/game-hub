import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d6747f5650f4760a1e850efe06f4018'
    }
})