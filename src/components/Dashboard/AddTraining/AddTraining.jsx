import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
//de aca pa arriba nuevo//

//Import de Servicio
import {saveTraining} from '../../../services/api'

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  

const AddTraining = ({items, user, addTrainingToState}) => {
    const classes = useStyles();

    const[minutes, setMinutes] = useState('')
    const[weight, setWeight] = useState('')
    const[training_type, setTrainingType] = useState('')
    const [open, setOpen] = useState(false)
    const[message, setMessage] = useState('')

    const onHandleChange = (e) =>{
        const {name,value} = e.target
        {name ==='minutes' ? setMinutes(value) : name === 'weight' ? setWeight(value)
            : setTrainingType(e.target.value)}
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const onHandleSubmit = (e) =>{
        const {id, token} = user
        if(!isNaN(minutes) && !isNaN(training_type.id) && !isNaN(id) && !isNaN(weight)){

            const parameters ={
                'minutes': parseInt(minutes),
                'trainning_type': parseInt(training_type.id),
                'user_id' : parseInt(id),
                'weight' : parseInt(weight),
                'token' : token
            }

            saveTraining({...parameters})
            .then(resp =>{
                //addTrainingToState() //Version vieja yendo a la API
                console.log((resp.data).trainingID)
                addTrainingToState({...parameters},(resp.data).trainingID) 
                console.log(resp)
                setMessage(`The training was added succesfully. TrainingId: ${(resp.data).trainingID}`)
            }).catch(err=>console.log(err))

        }else{
            setMessage(`The training was NOT added.`)
            console.log('ingreso valores incorrectos')
        }
    }

    return(
    <div>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Training Type</InputLabel>
            <Select          
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={training_type}
            onChange={onHandleChange}
            >
            {items.map((item)=>
                <MenuItem 
                key={item.id} 
                value={item}
                > 
                    {item.name} 
                </MenuItem> )} 
            
            </Select>
   
            <br/>
            <label htmlFor='minutes'>Minutes</label>
            <br />
            <input
              type='number'
              name='minutes'
              value={minutes}
              className='form-control'             
              onChange={onHandleChange}             
            />
            <br />
            <label htmlFor='weight'>Weight kg</label>
            <br />
            <input 
              type='number'
              name='weight'
              value={weight}
              className='form-control'
              onChange={onHandleChange}
            />
            <br />
            <button className='btn btn-primary' onClick={onHandleSubmit}>
              Add
        </button>
        </FormControl>
        <br/>
        
       
        <br/>
        {training_type !=='' ? 
            <span>{'Calories per minute that you burn doing this routine: '}
                {training_type.calories_per_minute.toString()}{' Calories'}
            </span>:''}
        <br></br>
        {message !== '' ? <span>{message}</span> : ''}
    </div>
    )

}

export default AddTraining

