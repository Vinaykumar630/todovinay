import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Todo from './components/Todo'
import './App.css';

const App = () => (
  <BrowserRouter>
     <Routes>
        <Route path="" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/todo" element={<Todo/>} />
     </Routes>
  </BrowserRouter>
)

export default App;
