// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyUpbar from "./components/MyUpbar";
import MyCards from "./components/MyCards";

function App() {
  return (
    <div className="App">
      <MyNav />
      <main className="container-fluid px-4">
        <MyUpbar />
        <h4>Trending Now</h4>
        <MyCards />
      </main>
    </div>
  );
}

export default App;
