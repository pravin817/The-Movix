import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending/>
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
