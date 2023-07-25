import Auth  from './components/Auth'
import {Route,Routes} from "react-router-dom";
//import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Notes from './components/Notes';
import Protected from './components/Protected';
function App() {

  return (
    <div className="container" >

    <Routes>
    {/* <Route path='/' element={<Home/>}/> */}
    {/* <Route path='/login' element={<Auth/>}/> */}
    <Route path='/' element={<Auth/>}/>
    {/* <Route  className="container" path='/notes' element={<Protected Component={Notes}/>}/> */}
    <Route className="container" path='/notes' element={<Notes/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>

    </Routes>

    </div>
  )
}

export default App
