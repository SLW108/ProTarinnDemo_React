import './TrainingCount.css'

const TrainingCount = ({items}) =>{

    const getCount = () => items.length

    return (
        <div className='row'>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Completed Trainings: </h5>
            <p className='card-text'>
              <span class='badge bg-success'>{getCount()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TrainingCount