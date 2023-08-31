import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

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
    ApiTesting();
  }, []);

  const ApiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
      dispatch(getApiConfiguration(response));
    });
  };

  return (
    <>
      <div className="App">
        Hello
        {url?.total_pages}
      </div>
    </>
  );
}

export default App;
