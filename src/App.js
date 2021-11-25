import './App.css';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   {/* <Home></Home> */}
    //   {/* <Detail></Detail> */}

    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
