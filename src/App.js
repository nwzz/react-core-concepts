import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
 const persons = ['Razzak', 'Salman','Atik','Ryhan','Rony']
 const products = [
    {name:"Photoshop",price:"$90.99"},
    {name:"PDF Reader",price:"$60.99"},
    {name:"Illustrastor",price:"$9.99"},
    {name:"Illustrastor pro",price:"$229.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            persons.map(person => <li>{person}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd=><Product product={pd}></Product>)
        }

        
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        
        <Person name="salman" job="Actor" age='56'></Person>
        <Person name="Shahrukh" job="Actor" age='46'></Person>
        <Person name="Sushant" job="Actor" age='36'></Person>

      </header>
    </div>
  );
}
function Person(props) {
  const personStyle={
  color:'darkblue',
  border:'5px solid green',
  borderRadius:'20px', 
  margin: '10px', 
  padding: '20px', 
  backgroundColor:'yellow'}
  return(
      <div style={personStyle}>
      <h3>{props.name}</h3>
      <h5>React Developer and part time {props.job}</h5>
      <p>determined to become a {props.age} year old web Developer</p>

    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () =>{
    const newCount = count +1;
    setCount(newCount);
  }
  return(
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Product(props) {
  const productStyle={
    width:'200px',
    margin:'10px',
    padding:'10px',
    height: '240px',
    border:'2px solid gray',
    backgroundColor: 'lightgray',
    borderRadius:'5px', 
    flex:'left', 
    color:'darkblue'}
    const {name, price}= props.product
  return(
    <div style={productStyle}>
    <h5>{name}</h5>
    <h3>{price}</h3>
    <button>Buy now</button>

  </div>)
  
}
function Users() {
  const [users ,setUsers]= useState([]);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]) 

  
  return(
    <div>
      <h3>Dynamic User:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
  
}

export default App;
