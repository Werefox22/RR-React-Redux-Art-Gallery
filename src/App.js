import './App.css';
import Gallery from './components/Gallery';
import NavButtons from './components/NavButtons';

// sure wish the repo had contained the right code
// pretty sure I managed to do what it wanted

function App() {
	return (
		<div style={{ backgroundColor: 'white', color: 'black' }} className="App">
			<Gallery />
			<NavButtons />
		</div>
	);
}

export default App;