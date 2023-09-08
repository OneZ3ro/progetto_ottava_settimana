import { Component } from "react";

// *TODO: 1) Fare una fetch di qualcosa, prendere l'array che mi arriva e per ogni elemento (e/o al massimo 6)
// *TODO:    visualizzare l'immagine del film
// *?:        <div className="col mb-2 px-1">
// *?:          <img className="img-fluid" src="dalla fetch" alt="forse dalla fetch" />
// *?:        </div>

class MyCards extends Component {
  state = {};

  fetchFilms = () => {
    console.log("funziona");
  };

  componentDidMount = () => {
    this.fetchFilms();
    console.log("Ha fatto didMount");
  };

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"></div>
    );
  }
}
export default MyCards;
