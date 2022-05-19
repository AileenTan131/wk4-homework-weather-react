import "./App.css";
// import background from "../images/hills.jpg";
import SearchbarForecast from "./SearchbarForecast";
import Footer from "./Footer";
import WeekForecast from "./WeekForecast";

export default function App() {
  return (
    <div
      className="container-fluid"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <SearchbarForecast />
      <WeekForecast />
      <Footer />
    </div>
  );
}
