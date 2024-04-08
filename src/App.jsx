
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DestinationData from './DestinationData';
import Technology from './Technology';
import Crew from './Crew'
import NotFound from './NotFound'


function App() {
  return (
   < Router>
   <div className="container">
    < Navbar />
   
   <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/DestinationData'  element={<DestinationData />} />

            <Route path='/Crew' element={<Crew />} />

            <Route path='/Technology' element={<Technology />} />

            <Route path = '*' element={<NotFound />} />

    </Routes>
   </div>
   </Router>
   
  );
}

export default App;
