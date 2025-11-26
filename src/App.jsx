import StarsCanvas from './components/StarsCanvas/StarsCanvas';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Age from './components/Age/Age';
import Slider from './components/Slider/Slider';

function App() {
  const movie = {
    title: 'Dune: Part One',
    genre: ['Adventure Epic', 'Adventure', 'Epic'],
    year: 2024,
    disc: 'Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.',
    director: 'Denis Villeneuve',
    season: 1,
    episode: 1,
    rate: 4,
  };
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <Header />
          <Movie movie={movie} />
          <Slider />
        </div>
        <Age />
        <StarsCanvas />
      </div>
    </>
  );
}

export default App;
