// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyUpbar from "./components/MyUpbar";
import MyCards from "./components/MyCards";
import Myfooter from "./MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <main className="container-fluid px-4">
        <MyUpbar />
        <h4 className="mb-3">Trending Now</h4>
        {/* row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 */}
        <div
          className="row mb-4 no-gutters text-center flex-nowrap"
          style={{ overflow: "hidden" }}
        >
          <MyCards film="food" />
        </div>
        <h4 className="mb-3">Watch it again</h4>
        <div
          className="row mb-4 no-gutters text-center flex-nowrap"
          style={{ overflow: "hidden" }}
        >
          <MyCards film="high" />
        </div>
        <h4 className="mb-3">New Releases</h4>
        <div
          className="row mb-4 no-gutters text-center flex-nowrap"
          style={{ overflow: "hidden" }}
        >
          <MyCards film="zombie" />
        </div>
      </main>
      <Myfooter />
    </div>
  );
}

export default App;
