import { Component } from "react";

// *TODO: 1) Fare una fetch di qualcosa, prendere l'array che mi arriva e per ogni elemento (e/o al massimo 6)
// *TODO:    visualizzare l'immagine del film
// *?:        <div className="col mb-2 px-1">
// *?:          <img className="img-fluid" src="dalla fetch" alt="forse dalla fetch" />
// *?:        </div>

class MyCards extends Component {
  state = {
    films: [],
  };

  fetchFilms = async () => {
    console.log("funziona");
    const URL = "http://www.omdbapi.com/?apikey=4ed6bf96&s=" + this.props.film;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const parsebody = await response.json();
        console.log(parsebody);
        console.log(parsebody.Search);
        this.setState({ films: parsebody.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchFilms();
    console.log("Ha fatto didMount");
    console.log(this.state.films);
  };

  render() {
    return (
      <>
        {this.state.films === 0 && (
          <div style={{ color: "white" }}>Non c'è nulla nello stato</div>
        )}
        {this.state.films.map((elem) => (
          <div className="col-md-2 col-3 mb-2 px-1" key={elem.imdbID}>
            <img className="img-fluid" src={elem.Poster} alt={elem.Title} />
          </div>
        ))}
      </>
    );
  }
}
export default MyCards;
