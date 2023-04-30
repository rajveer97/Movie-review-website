// import { element } from 'prop-types';
import './App.css';
import Header from './components/Header'
import Movie from './components/Movie';
import movies from './movies.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          movies.map((element, index) => {
            return(
              <Movie
                key= {index}
                img= {element.Poster}
                title= {element.Title}
                year={element.Year}
              />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
