import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

// Set up React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  // To store the data in Store
  const dispatch = useDispatch();

  // To get the data from the store
  const { url } = useSelector((state) => state.home);

  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((response) => {
      // console.log(response);

      const url = {
        backdrop: response.images.secure_base_url + "original",
        banner: response.images.secure_base_url + "original",
        profile: response.images.secure_base_url + "original",
      };

      // store the backdrop, banner, profile url in store
      dispatch(getApiConfiguration(url));
    });
  };
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    // It wait till the response is comes from the both the api call i.e tv and movie
    const data = await Promise.all(promises);

    // console.log(data);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    // Store the genres in the store
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
