import { MdHome } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import "./index.css";

const Home = () => (
  <>
    <div className="home">
      <div className="home_container">
        <MdHome className="icon" />
        <p>Home</p>
      </div>
      <div className="home_container">
        <PiDotsNineBold className="icon" />
        <p>Dashboard</p>
      </div>

      <div className="card_container">
        <h1 className="heading">Services</h1>
        <p>Airports</p>
        <p>Videos</p>
      </div>
      <div className="card_container">
        <h1 className="heading">Others</h1>
        <p>List 1</p>
        <p>List 2</p>
        <p>List 3</p>
      </div>
    </div>
  </>
);

export default Home;
