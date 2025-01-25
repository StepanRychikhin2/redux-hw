import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';


function App() {
//   const phoneData = useSelector((state) => {
//     return state
// })

// const dispatch = useDispatch()

// function awdawd() {
//   dispatch({type : "addBB", addContacts : {name : "awdawd", number: 231423}})
// }
// // console.log(phoneData)
  return (
    <>
{/* <h1>Number Phone</h1>
<button onClick={awdawd}>awd</button>
{console.log(phoneData)} */}
<Counter></Counter>

    </>
  );
}

export default App;
