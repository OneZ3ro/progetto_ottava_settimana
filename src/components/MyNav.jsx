import { Component } from "react";
import logoNetflix from "../logo.png";

class MyNav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#221f1f", paddingInline: "1rem" }}
      >
        <a className="navbar-brand" href>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-between flex-grow-1">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href>
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href>
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                  My List
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="fa fa-search icons"></i>
              <div id="kids">KIDS</div>
              <i className="fa fa-bell icons"></i>
              <i className="fa fa-user icons"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default MyNav;
