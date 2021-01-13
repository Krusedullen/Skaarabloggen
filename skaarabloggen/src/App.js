import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Infobox from "./components/Infobox";
import Blogpost from "./components/Blogpost";
import blogposts from "./blogposts.js";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <div className="blogpost-wrapper">
          {blogposts.map(blogpost => <Blogpost heading={blogpost.heading} content={blogpost.content} />)};
        </div>
        <Infobox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
