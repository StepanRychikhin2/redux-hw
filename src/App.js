import './App.css';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const phoneData = useSelector((state) => {
    return state
})

const dispatch = useDispatch()

function awdawd() {
  dispatch({type : "addBB", conmtact : {name : "awdawd", number: 231423}})
}
// console.log(phoneData)
  return (
    <>
<h1>Number Phone</h1>
<button onClick={awdawd}>awd</button>



    </>
  );
}

export default App;
