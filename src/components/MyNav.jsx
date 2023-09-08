import { Component } from "react";
import logoNetflix from "../logo.png";

class MyNav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#221f1f", paddingInline: "1rem" }}
      >
        <a className="navbar-brand" href="#home">
          <img
            src={logoNetflix}
            style={{ width: "100px", height: "55px" }}
            alt="img"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ textAlign: "center" }}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#tv-show">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#recently-added">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#my-list">
                My List
              </a>
            </li>
          </ul>
          <div id="kids" style={{ fontWeight: "bold", padding: "8px" }}>
            KIDS
          </div>
          <i className="fa fa-search icons"></i>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </nav>
    );
  }
}
export default MyNav;
