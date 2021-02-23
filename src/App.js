import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name="salman" job="Actor" age='56'></Person>
        <Person name="Shahrukh" job="Actor" age='46'></Person>
        <Person name="Sushant" job="Actor" age='36'></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle={color:'darkblue',
  border:'5px solid green',
  borderRadius:'20px', 
  margin: '10px', 
  padding: '20px', 
  backgroundColor:'yellow'}
  return(
      <div style={personStyle}>
      <h3>{props.name}</h3>
      <h5>React Developer{props.job}</h5>
      <p>determined to become a {props.age} year old web Developer</p>

    </div>
  )
}

export default App;
