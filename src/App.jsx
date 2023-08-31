import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

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
        App
        {url?.total_pages}
      </div>
    </>
  );
}

export default App;
