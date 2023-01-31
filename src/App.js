import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/navigation/Main";
import OnLoad from "./onload/OnLoad";

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
