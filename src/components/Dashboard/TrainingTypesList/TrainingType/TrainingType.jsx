

const TrainingType = ({id, name, calories_per_minute}) => {


    return(
        <tr>
        <th scope='row'>{id}</th>
        <td>{name}</td>
        <td>{calories_per_minute}</td>
        {/* <td>
         <input type='checkbox' checked={false} />
        </td>     */}
        <td>
          <button className='btn btn-danger' >Delete</button>
        </td>
      </tr>
    )
}

export default TrainingType