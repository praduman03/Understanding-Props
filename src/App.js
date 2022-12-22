import './App.css';


function App(props) {
  return(
  <>
  <h2>Kalvium library</h2>
  <div className='flex'>
    <img src={props.data[0].img} alt="" />
    <img src={props.data[1].img} alt="" />
    <img src={props.data[2].img} alt="" />
    <img src={props.data[3].img} alt="" />
  </div>
  </>
  )
}

export default App;
