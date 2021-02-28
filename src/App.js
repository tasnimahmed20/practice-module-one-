import logo from './logo.svg';
import './App.css';

function App() {
  const styles = {
    backgroundColor:'white',
    color:'blue'
  }
 const name="Tasnim Ahemd"
 const info={
   name:"Tasnim Ahmed",
  passion: "coding"}
  const product=[
    {name:"photoshop", price:"$90.99"},
  {name:"Illustrator", price:"$99.99"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My passion is : {info.passion}</p>
        <h1 style={styles}>MY name is : {name}</h1>
        <Person info={info}></Person>
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
      </header>
    </div>
  );
}
function Product(props){
  console.log(props)
const {name,price}=props.product
  const productStyle={
    border:'2px solid red', 
    borderRadius:'10px',
    backgroundColor:'white',
    height:'250px',
    width:'400px',
    color:'black'
  }
  return (
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <p>Product Price: {price}</p>
      <button>Buy Now</button>
    </div>
  )

}
function Person(props){
  const {name,passion} = props.info;
  return (
    <div style={{
      border:'2px solid red',
       padding:'30px'}}>
      <h1>Name: {name}</h1>
      <h1>Passion: {passion}</h1>
    </div>
  )
}

export default App;
