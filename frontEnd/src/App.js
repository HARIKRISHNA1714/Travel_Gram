import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

//component
import HomePage from './components/Pages/HomePage';
import Kasargod from './components/Pages/Kasargod';
import Kannur from './components/Pages/Kannur';


function App() {
  return (
    <>
        <Routes>
          {/* Define your routes here */}
          <Route path='/' element={<HomePage />} />
          <Route path='/kasargod' element={<Kasargod/>}/>
          <Route path='/kannur' element={<Kannur/>}/>
        </Routes>
    </>
  );
}

export default App;