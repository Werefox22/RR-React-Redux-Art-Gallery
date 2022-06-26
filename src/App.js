import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import ThunkButton from './components/ThunkButton';

function App() {
  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <ContentWrapper />
      <ThunkButton />
      <Footer />
    </div>
  );
}

export default App;