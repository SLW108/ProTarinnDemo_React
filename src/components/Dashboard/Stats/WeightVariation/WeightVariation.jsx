//import './TrainingCount.css'

import {weightVariation} from '../../../../utils/utils'

const WeightVariation = ({items}) =>{ 

    return (
        <div className='row'>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Weight Variation: </h5>
            <p className='card-text'>
              <span class='badge bg-success'>{weightVariation({items})+'kg'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default WeightVariation