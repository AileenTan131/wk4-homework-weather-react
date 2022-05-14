import "./App.css";
// import background from "../images/hills.jpg";
import SearchbarForecast from "./SearchbarForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div
      className="container-fluid"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <SearchbarForecast />
      <div className="row week-forecast"></div>
      <Footer />
    </div>
  );
}
