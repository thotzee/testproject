import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
  

    <BrowserRouter>
     <Routes>
     <Route path ="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
