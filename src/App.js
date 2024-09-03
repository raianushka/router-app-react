import MainHeader from './components/MainHeader';
import Home from './components/Home'
import About from './components/About';
import Support from './components/Support';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { Routes , Route, NavLink } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
