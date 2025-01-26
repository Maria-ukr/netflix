import StarsCanvas from './components/StarsCanvas/StarsCanvas';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Age from './components/Age/Age';
import Slider from './components/Slider/Slider';

function App() {
  const movie = {
    title: 'Stranger Things',
    genre: ['Drama', 'Thriller', 'Supernatural'],
    year: 2019,
    disc: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    director: 'Shawn Levy',
    season: 3,
    episode: 5,
    rate: 3,
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
