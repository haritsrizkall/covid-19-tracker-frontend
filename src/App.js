import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import reactDom from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Switch>
      <Route path="/">
        <LoginPage/>
      </Route>
      <Route path="/dashboard">
        <DashboardPage/>
      </Route>
    </Switch>
    </BrowserRouter>
     
    
  );
}

export default App;
