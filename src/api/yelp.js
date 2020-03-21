import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer D1olXBrIHKaOMZxqEmiGWGQuIK_wqyppdshhWsF30UobEA9tsbgcjSoOh9TnruxpJcFjolTSvVn4QwIFBGP3YEeeBZF-_MbFGCyduIBOggwrYfX_utiS3vRlkH91XnYx'
    }
})