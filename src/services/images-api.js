import axios from "axios";

const PER_PAGE = 12;

const apiKey = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.headers.common["Authorization"] = `Client-ID ${apiKey}`;

const fetchImages = (query, page = 1) => {
  return axios({
    url: "/search/photos",
    params: {
      query,
      page,
      per_page: PER_PAGE,
    },
  });
};

const api = { fetchImages, PER_PAGE };

export default api;
