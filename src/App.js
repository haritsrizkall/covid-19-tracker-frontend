import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import reactDom from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter } from 'react-router-dom';
import PersonDetailPage from './pages/PersonDetailPage';
import PersonTracking from './pages/PersonTracking';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage/>
        </Route>
        <Route exact path="/person/detail/:personId" component={PersonDetailPage}/>
        <Route exact path="/tracking/:personId" component={PersonTracking}/>  
    </Switch>
    </BrowserRouter>
     
    
  );
}

export default App;
