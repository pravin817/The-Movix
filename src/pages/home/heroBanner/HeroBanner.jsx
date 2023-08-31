import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import "./style.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    // Take the random index from 0 to 19 (total 20)
    const randomIndex = Math.floor(Math.random() * 20);
    // console.log(random);
    const bg = url.backdrop + data?.results?.[randomIndex]?.backdrop_path;

    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    // check for the valide input
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <img src={background} alt="" />
        </div>
      )}

      {/* Merging effect  */}
      <div className="opacity-layer"></div>

      {/* The container that provides the margin and padding basically center the containt on the website  */}
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of Movies, TV shows and Peoples to discover. Explore Now
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show....."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
