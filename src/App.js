import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import {
  increaseNumber,
  decreaseNumber,
  specificNumber,
  addProduct
} from './redux/actions/actions'
import { useEffect } from 'react';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props)
  }, [props])

  return (
    <div className="App">
      <p>ქულა: {props.number}</p>
      <button
        onClick={() => dispatch(increaseNumber())}
      >გაზრდა</button>
      <button
        onClick={() => dispatch(decreaseNumber())}
      >შემცირება</button><br />
      <input type="number" onChange={(event) => dispatch(specificNumber(parseInt(event.target.value)))} />
      <hr />
      <input
        type="text"
        onBlur={(event) => dispatch(addProduct(event.target.value))}
      />
      {
        props.Products.map((item, index) => {
        return <p key={`${item}-${index}`}>პროდუქტი: {item}</p>
        })
      }
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
