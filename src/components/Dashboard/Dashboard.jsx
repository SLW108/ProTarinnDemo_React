import { useState, useEffect } from 'react'
import {  Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
//Import Components
import Navbar from './Navbar/Navbar'
import AddTraining from './AddTraining/AddTraining'
import UserTrainingList from './UserTrainingList/UserTrainingList'
import TrainingCount from './TrainingCount/TrainingCount'
import DetailPerTrainingTable from './DetailPerTraining/DetailPerTrainingTable/DetailPerTrainingTable'
import DetailPerTrainingDonutChart from './DetailPerTraining/DetailPerTrainingDonutChart/DetailPerTrainingDonutChart'
import IMC_Chart from './Stats/IMC_Chart/IMC_Chart'
import HealthStatus from './Stats/HealthStatus/HealthStatus'
import WeightVariation from './Stats/WeightVariation/WeightVariation'

//Styles
import './Dashboard.css'
//Services
import { getTrainingsByUserId } from '../../services/api'
import { getTrainingTypes } from '../../services/api'


const Dashboard = ({user}) =>{
  
  const history = useHistory()
  const { url } = useRouteMatch()
  const[trainingTypes, setTrainingTypes] = useState([])  
  const[userTrainingList, setUserTrainingList] = useState([])
  const [lastWeight, setLastWeight] = useState('')
  
  useEffect(()=>{
    getDatosFromApi()
    history.push(`${url}/usertraininglist`)  
  }, []) 
    
    const getDatosFromApi = () => {
      const {id, token} = user

      getTrainingTypes(token)
      .then(trainingTypes =>{
        setTrainingTypes(trainingTypes)
      })
      .catch(err => console.log(err))
      
      getTrainingsByUserId(id, token)
      .then(userTrainingList => {
        setUserTrainingList(userTrainingList)
       if(userTrainingList.length > 0 )setLastWeight(userTrainingList[0].weight)
      })
      .catch(err => console.log(err))

    } 

    const delTrainingToState = id => {
        const newUserTrainingList = userTrainingList.filter(t => t.id !== id)
        setUserTrainingList(newUserTrainingList)
    }

    const addTrainingToState = ({minutes, trainning_type, user_id, weight},training_user_id) =>{
      
      /*
      //const {id, token} = user 
      // getTrainingsByUserId(id, token)
      // .then(userTrainingList => {
      //   setUserTrainingList(userTrainingList)
      // })
      // .catch(err => console.log(err))
      */

      //funciona pero tambien podemos actualizar la lista
      // sin ir a la API (tomamos el training id por parametro)
      //construyo el training recien agregado
      const trainingAgregado = {

        "id": training_user_id,
        "minutes": minutes,
        "trainning_type": trainning_type,
        "weight": weight,
        "user_id": user_id
      }
      setUserTrainingList([...userTrainingList,trainingAgregado].sort((a,b)=> b.id-a.id))
    }


    return(
    <div className='container-fluid dashboard'>
      <h1>Dashboard</h1>
      <br />
      <div className='row'>
        <div className='col-3'>
          <Navbar />
        </div>
        <div className='col-9'>
          <Switch>            
            <Route path={`${url}/usertraininglist`}>
              <UserTrainingList 
                items={userTrainingList} 
                user={user}
                delTrainingToState = {delTrainingToState}
              />
            </Route>
            <Route path={`${url}/addtraining`}>
              <AddTraining 
               items={trainingTypes} 
               user={user}
               addTrainingToState = {addTrainingToState}
               />             
            </Route>
            <Route path={`${url}/stats`}>
            <div className='row'>
              <div className='col-sm-6'>
                  <TrainingCount items = {userTrainingList}/>
                </div>
                <div className='col-sm-6'>
                    <WeightVariation 
                    items = {userTrainingList.slice(0,2)}
                    />          
                </div>
            </div>
             <div className='row'>
               <div className='col-sm-6'>
                <DetailPerTrainingTable 
                  trainingTypes = {trainingTypes} 
                  userTrainingList = {userTrainingList} />
                </div>
                <div className='col-sm-6'>
                  <DetailPerTrainingDonutChart
                    trainingTypes = {trainingTypes} 
                    userTrainingList = {userTrainingList}/>
                </div>
             </div>
             <div className='row'>
                <div className='col-sm-6'>            
                  <IMC_Chart 
                    userTrainingList = {userTrainingList}
                    user ={user}/>
                </div>
                <div className='col-sm-6'>
                    <HealthStatus 
                    lastWeight = {lastWeight}
                    user ={user}/>
                 </div>    
             </div>    
            </Route>
          </Switch>
        </div>
       </div>
    </div>
    )
}


export default Dashboard