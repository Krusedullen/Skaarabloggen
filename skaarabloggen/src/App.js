import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    <Header />
    <div className="content-wrapper">
    <p>Innholdet på siden kommer inne i denne diven</p>
    </div>
    <Footer />
    </div>
  );
}

export default App;
