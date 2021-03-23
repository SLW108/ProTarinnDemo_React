import TrainingType from './TrainingType/TrainingType'


const TrainingTypesList = ({items}) =>{
    return(
        <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Training Type Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Calories Per Minute</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item,index) => (
            <TrainingType key={index} {...item} />
          ))}
        </tbody>
      </table>
    )
}



export default TrainingTypesList