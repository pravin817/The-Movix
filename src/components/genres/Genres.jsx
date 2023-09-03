import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  // get the genres from the store
  const { genres } = useSelector((state) => state.home);

  //   console.log(data.name);
  return (
    <div className="genres">
      {data?.map((g) => {
        // if the genres is not present
        if (!genres[g].name) {
          return;
        }

        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
