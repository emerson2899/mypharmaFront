
import './App.css';
import { Body } from './components/style';
import Cadastro from './pages/Cadastro';
import Users from './pages/Users';
import Products from './pages/Products';
import Home from './pages/Home';
import AdProduc from './pages/AdProduc';
import Login from './pages/Login';
import Fornecedor from './pages/Fornecedor';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';



function App() {
  let loged = true;
  return (    
      <Body>     
        <BrowserRouter>
        <nav className='barNavigation'>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li> {loged === true &&
          <li>
            <Link to="/Users">Usuários </Link>
          </li> }
          <li>
            <Link to='/Products'>Produtos</Link>
          </li> {loged === true &&
          <li><Link to="/AdProduct">Adicionar Produto</Link></li> }
          <li><Link to='/cadastro'>Cadastro</Link></li>
          <li><Link to='/Login'>Login</Link></li> {loged === true &&
          <li><Link to='/Fornecedor'>Fornecedor</Link></li> }
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/Products' element={<Products/>}/>
          
          <Route path='/AdProduct' element={<AdProduc/>}/> 
          <Route path='/Users' element={<Users/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Fornecedor' element={<Fornecedor/>}/>
          
        </Routes> 
        
        
        
        </BrowserRouter>







      </Body>   
     
    
  );
}

export default App;
