import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home'
import Products from './pages/Products'
import New from './pages/New'
import Ourstory from './pages/Ourstory'
import Contact from './pages/Contact'


function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/new' element={<New />} />
        <Route path='/ourstory' element={<Ourstory />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     </Router> 
    </>
  );
}

export default App;
