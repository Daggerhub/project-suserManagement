import './App.css';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './component/Users';
import AddNewUsers from './component/AddNewUser'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/add" component={AddNewUsers} />
      </Switch>    </BrowserRouter>
  );
}

export default App;
