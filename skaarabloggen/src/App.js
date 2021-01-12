import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Infobox from "./components/Infobox";
import Blogpost from "./components/Blogpost";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          <p>Innholdet på siden kommer inne i denne diven. Her kan det være lurt å se på grid layout.</p>
          <Blogpost />
          <Infobox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
