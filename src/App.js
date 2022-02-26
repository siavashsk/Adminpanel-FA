import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/productList/ProductList';
import Support from './components/support/Support';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/users' element={<UserList />}/>
          <Route path='/products' element={<ProductList />}/>
          <Route path='/support' element={<Support />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
