import './HealthStatus.css'

import {IMC_Calculus} from '../../../../utils/utils'

const HealthStatus = ({lastWeight, user}) => {

const imc = IMC_Calculus(user.height, lastWeight)

let message = `De acuerdo a su estatura ${user.height}cm y a su ultimo peso ingresado ${lastWeight}kg,\n 
               el calculo de IMC devuele un valor de ${imc}, lo que corresponde a un nivel de peso: `


  if(parseFloat(imc) < 18.5){
    message += 'Bajo Peso'
  }else if(parseFloat(imc) >= 18.5 && parseFloat(imc) <= 24.9){
    message += 'Normal'
  }else if(parseFloat(imc) >= 25 && parseFloat(imc) <= 29.9){
    message += 'Sobrepeso'
  }else if(parseFloat(imc) >= 30){
    message += 'Obeso'
  }

    return (
        <div className='row'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Health Status </h5>
              <p className='card-text'>
               {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HealthStatus