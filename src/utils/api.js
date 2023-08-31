import axios from "axios";

// set the base address for the API Call
const BASE_URL = "https://api.themoviedb.org/3";

// set up the TMDB Token
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// set up the header for the API call
const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

// Perform the API Call
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log("Error in API Call : " + error);
    return error;
  }
};
