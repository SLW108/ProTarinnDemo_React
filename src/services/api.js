

const urlBase = 'https://trainning-rest-api.herokuapp.com'

/*Registro*/
const register = ({username, password, height}) =>{
    let url = `${urlBase}/v1/users/register`
console.log(username, password, height)
    return fetch(url,{
        method:"POST",
        headers:{"Content-Type": "application/jason"},
        body: JSON.stringify({username: username, 
                              password: password,
                              height:  height})
    })
    .then(resp =>{
        return new Promise((resolve,reject) => {
                if(resp.status===200){
                    resolve(resp.json())
                }else{
                    reject('Datos incorrectos')
                }
        })
    })
    .catch((e)=>console.log(e));
       

      
}

const loginUser = ({username, password}) =>{

  let url = `${urlBase}/v1/users/login`
  console.log(username, password)
      return fetch(url,{
          method:"POST",
          headers:{"Content-Type": "application/jason"},
          body: JSON.stringify({username: username, 
                                password: password})
      })
      .then(resp =>{
          return new Promise((resolve,reject) => {
                  if(resp.status===200){
                      resolve(resp.json())
                      //si hay exito me guardo todos los datos que me 
                      //devuelve la promesa en un stATE GENERICO
                  }else{
                      reject('Invalid credentials')
                  }
          })
      })
      .catch((e)=>console.log(e));
}

const getTrainingTypes = (token) =>{
    let url = `${urlBase}/v1/training-types`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    }
    return fetch(url, requestOptions)
            .then(resp => {
                return new Promise((resolve,reject)=>{
                    if(resp.status === 200){                        
                        resolve(resp.json())
                    }else{
                        reject('Invalid token o algo paso')
                    }
                })
            })
            .catch(err => console.log('error: ', err))
}

const getTrainingsByUserId = (user_id, token) =>{
    let url = `${urlBase}/v1/users/${user_id}/trainings`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    }
    return fetch(url,requestOptions)
    .then(resp => {
        return new Promise((resolve,reject)=>{
            if(resp.status === 200){                        
                resolve(resp.json())
            }else{
                reject('Invalid token o algo paso')
            }
        })
    })
    .catch(err => console.log('error: ', err))
    
    
}

const saveTraining = ({minutes, trainning_type, user_id, weight, token}) =>{
    let url = `${urlBase}/v1/trainings`
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify({
            "minutes": minutes,
            "trainning_type": trainning_type,
            "user_id": user_id,
            "weight": weight
        })
    }
    return fetch(url,requestOptions)
            .then(resp => {
                return new Promise((resolve,reject)=>{
                    if(resp.status === 200){                        
                        resolve(resp.json())
                    }else{
                        reject('Invalid token o algo paso')
                    }
                })
            })
            .catch(err => console.log('error: ', err))

}

const deleteTraining = (user_id, training_id,token) =>{
    let url = `${urlBase}/v1/users/${user_id}/trainings/${training_id}`

    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Authorization' : token
        }
    }
    return fetch(url,requestOptions)
            .then(resp => {
                return new Promise((resolve,reject)=>{
                    if(resp.status === 200){                        
                        resolve(resp.json())
                    }else{
                        reject('Invalid token o algo paso')
                    }
                })
            })
            .catch(err => console.log('error: ', err))
}



export {register, loginUser, getTrainingTypes, 
    getTrainingsByUserId, saveTraining, deleteTraining}




