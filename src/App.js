import "./App.css";
// import background from "../images/hills.jpg";
import Searchbar from "./Searchbar";
import CountryDateTime from "./CountryDateTime";
import IconTempHumidWind from "./IconTempHumidWind";
import Footer from "./Footer";

export default function App() {
  return (
    <div
      className="container"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <Searchbar />
      <br />
      <CountryDateTime />
      <IconTempHumidWind />
      <div className="row week-forecast"></div>
      <Footer />
    </div>
  );
}
