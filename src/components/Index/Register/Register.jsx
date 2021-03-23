import { useState } from "react"
import {register} from '../../../services/api'

import './Register.css'


const Register = props =>{

    const[username, setUsername] = useState('')
    const[password, setPassWord] = useState('')
    const[strHeight, setHeight] = useState('')


    const onHandleChange = e => {
        const {name,value} = e.target
        {name ==='username' ? setUsername(value) : name === 'password' ? 
        setPassWord(value) : setHeight(value)}
    }

    const onHandleSubmit = e =>{
        if(username != '' && password != '' && strHeight != ''){
          e.preventDefault()
          let height = parseInt(strHeight)
          const user = {username, password, height}
          register(user)
         .then(resp => {
        const user = {
          id: resp.user.id,
          username: resp.user.username,
          height: resp.user.height,
          token: resp.user.token
        }
        console.log(user)
        props.onUserLogged(user)
        //En vez de actualizar por props debo usar el Store
        })
        .catch(err => alert(err))
        }else{
          props.setErrMessage('Debe ingresar todos los campos!!')
        }

      }
        


    return(
        <section className='d-flex flex-md justify-content-center login'>
      <div className='card'>
        <h2>Sign Up!</h2>
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
            <label htmlFor='inputHeight'>Height</label>
            <br />
            <input
              type='number'
              name='height'
              value={strHeight}
              className='form-control'
              onChange={onHandleChange}
            />
            <br />
            <button className='btn btn-primary' onClick={onHandleSubmit}>
              Send
            </button>
          </form>
        </section>
      </div>
    </section>
    )   
}


export default Register