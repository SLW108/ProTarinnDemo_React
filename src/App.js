import {useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'


import Header from './components/Header/Header'
import Login from './components/Index/Login/Login';
import Register from './components/Index/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'

// Import generic styles
import 'bootstrap-css-only'
import './App.css'

const LOCAL_STORAGE_KEY = 'proTrainnappUser'


function App() {

//Define state
  const[errMessage, setErrMessage] = useState('Ingrese sus credenciales')
  const user = localStorage.getItem(LOCAL_STORAGE_KEY)
  //const user = ''
  const [userLogged, setUserLogged] = useState((user ? JSON.parse(user) : user))
  const history = useHistory()
  
  /**
   * Change the state of the userLogged
   * @param {object} user
   */
  const onUserLogged = user => {
    setUserLogged(user)
    history.push('/dashboard')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
  }

  const logOut = () =>{
    setUserLogged('')
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  const onHandleClick =( ) =>{ history.push('./signup')}
  
  
  return (
    <div className="App">
     <Header user={userLogged} logOut={logOut}/>
     <Switch>
      <Route path='/'exact>
          <Login onUserLogged={onUserLogged} setErrMessage={setErrMessage}/>
          <span> { errMessage !='' ? errMessage : errMessage } </span>
          <br />
          <h4>Not Training with Us Yet!??</h4>
          <h5>Join Us!!</h5>
          <button className='btn btn-primary' onClick={onHandleClick}>
          SignUp
          </button>
      </Route>
      <Route path='/signup'exact>
         <Register onUserLogged = {onUserLogged}/>
      </Route>
      <Route path='/dashboard'>
        {userLogged ? <Dashboard user={userLogged} /> : history.push('/')}
      </Route>
     </Switch>
    </div>
  );
}

export default App;
