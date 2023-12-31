import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";

// *TODO: 1) Fare una fetch di qualcosa, prendere l'array che mi arriva e per ogni elemento (e/o al massimo 6)
// *TODO:    visualizzare l'immagine del film
// *?:        <div className="col mb-2 px-1">
// *?:          <img className="img-fluid" src="dalla fetch" alt="forse dalla fetch" />
// *?:        </div>

class MyCards extends Component {
  state = {
    hasError: false,
    isLoading: true,
    films: [],
  };

  fetchFilms = async () => {
    const URL = "http://www.omdbapi.com/?apikey=4ed6bf96&s=" + this.props.film;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const parsebody = await response.json();
        this.setState({ films: parsebody.Search, isLoading: false });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchFilms();
  };

  render() {
    return (
      <>
        {this.state.hasError && (
          <Alert variant="danger">
            Errore nella fetch. La preghiamo di ricaricare la pagina
          </Alert>
        )}
        {this.state.isLoading && !this.state.hasError && (
          <Spinner animation="border" variant="danger" />
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
