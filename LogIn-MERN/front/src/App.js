import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Signup from './component/Signup'
import Login from './component/Login'
import Verify from './component/Verify';
import Signout from './component/Signout';
import Del from './component/Del';
import Update from './component/Update';
import Table from './component/Table';
function App() {
  return (
<>
<Router>
  <header>
<Nav/>
</header>
<Switch>
  <Route exact path='/'>
<Home/>
</Route>
<Route exact path='/signup'>
<Signup/>
</Route>
<Route exact path='/login'>
<Login/>
</Route>
<Route exact path='/verified'>
<Verify/>
</Route>
<Route exact path='/signout'>
<Signout/>
</Route>
<Route exact path='/verified/update'>
<Update/>
</Route>
<Route exact path='/verified/delete'>
<Del/>
</Route>
<Route exact path='/verified/read'>
<Table />
</Route>
</Switch>
</Router>
</>
  );
}

export default App;
