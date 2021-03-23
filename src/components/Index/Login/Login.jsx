import {useState} from 'react'

import {loginUser} from '../../../services/api'
import './Login.css'

const Login = props =>{
//Define State
const[username, setUserName] = useState('')
const[password, setPassWord] = useState('')


//Define Events
const onHandleChange = e =>{
    const {name,value} = e.target
    {name ==='username' ? setUserName(value) : setPassWord(value)}
}


const onHandleSubmit = e =>{
    if(username != '' && password != ''){
      e.preventDefault()
      loginUser({
          username,
          password
      })
      .then(resp => {
        const user = {
          id: resp.id,
          username: resp.username,
          height: resp.height,
          token: resp.token
        }
        console.log(user)
        props.onUserLogged(user)
        //En vez de actualizar por props debo usar el Store
      })
      .catch(err => alert(err))
    }else{
      props.setErrMessage('Debe ingresar sus credenciales!!')
    }
    
}

return (
    <section className='d-flex flex-md justify-content-center login'>
      <div className='card'>
        <h2>Welcome back!</h2>
        <section className='card-body'>
          <form>
            <label htmlFor='inputEmail'>Username</label>
            <br />
            <input
              type='email'
              name='username'
              value={username}
              className='form-control'             
              onChange={onHandleChange}             
            />
            <br />
            <label htmlFor='inputPassword'>Password</label>
            <br />
            <input
              type='password'
              name='password'
              value={password}
              className='form-control'
              onChange={onHandleChange}
            />
            <br />
            <button className='btn btn-primary' onClick={onHandleSubmit}>
              LogIn
            </button>
            <br/>
            
          </form>
        </section>
      </div>
    </section>
  )
}



export default Login
