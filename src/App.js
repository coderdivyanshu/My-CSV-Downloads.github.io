import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from 'react-router-dom';
import Studentdetail from './components/Studentdetail';

function App() {


  return (
    <div>
    <Router>
      <Routes>
    <Route path='/' element={<Login/>}  />
    <Route path='detail' element={<Studentdetail/>}  />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
