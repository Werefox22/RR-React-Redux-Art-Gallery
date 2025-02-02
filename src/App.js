import './App.css';
import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchData } from './features/dataSlice';
import Gallery from './components/Gallery';
import NavButtons from './components/NavButtons';

// sure wish the repo had contained the right code
// pretty sure I managed to do what the activity wanted though

// of course now that I finished it the very next activity had the right repo
// very cool

const mapStateToProps = (state) => ({
	objectId: state.data.objectId
})

function App(props) {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	}, [props.objectId, dispatch])

	return (
		<div className="App">
			<Gallery />
			<NavButtons />
		</div>
	);
}

export default connect(mapStateToProps)(App)