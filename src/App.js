import "bootstrap/dist/css/bootstrap.css";
import indexCss from "./index.css";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/navigation/Main";
import OnLoad from "./onload/OnLoad";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <OnLoad />
      <Main />
    </>
  );
}

export default App;
