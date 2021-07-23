import './App.css';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './component/Users';
import AddNewUsers from './component/AddNewUser'
import EditUser from './component/EditUser';
import ViewUser from './component/ViewUser'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/add" component={AddNewUsers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/:id" component={ViewUser} />
      </Switch>    
      </BrowserRouter>
  );
}

export default App;
