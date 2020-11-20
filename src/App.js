import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/home'
import Profiles from './Pages/Profiles/profiles'
import Details from './Pages/Details/details'
import Header from './Components/Header/header'
import '../src/App.css' 

function App() {
  return (
   <div className='App'>
     <BrowserRouter>
        <Header/>
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/Profiles' component={Profiles} exact={true}/>
        <Route path='/Profiles/:id' component={Details} exact={true}/>
      </Switch>
     </BrowserRouter>
   </div>
  );  
}

export default App;
