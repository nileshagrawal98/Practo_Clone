import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { Navigation } from './Components/Navigation';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
