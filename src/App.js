import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Movies from './components/Trend/Movies';
import Tv from './components/Trend/Tv';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Movies />
            <Tv />
        </div>
    );
}

export default App;
