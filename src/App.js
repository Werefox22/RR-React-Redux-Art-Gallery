import './App.css';
import Gallery from './components/Gallery';
import NavButtons from './components/NavButtons';
import ThunkButton from './components/ThunkButton';

// sure wish the repo had contained the right code
// pretty sure I managed to do what it wanted

function App() {
	return (
		<div style={{ backgroundColor: 'white', color: 'black' }} className="App">
			<Gallery />
			<NavButtons />
			<ThunkButton />
		</div>
	);
}

export default App;