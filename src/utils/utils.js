

const minutesPerTrainingRows = ({trainingTypes, userTrainingList}) => {
    let ret = []
    if(userTrainingList.length > 0){
      trainingTypes.map(trainingType => {
        let minutesPerTrainingObj = {
              trainingType : trainingType,
              acumulatedMinutes : 0
          }
          userTrainingList.map(userTraining => {
              if(userTraining.trainning_type === trainingType.id){
                
                  minutesPerTrainingObj.acumulatedMinutes += userTraining.minutes
              }})
              ret.push(minutesPerTrainingObj)
      })
    }
    
    return ret
}

const IMC_Calculus = (height,weight) => {
  let height2 = (height/100)^2
  return (weight/height2).toFixed(1)
}

const weightVariation = ({items}) =>{
  
  let variation = 0
  if(items.length >= 2){

    variation = items[0].weight - items[1].weight
  }


  return variation


}

export  {minutesPerTrainingRows, IMC_Calculus, weightVariation} 

