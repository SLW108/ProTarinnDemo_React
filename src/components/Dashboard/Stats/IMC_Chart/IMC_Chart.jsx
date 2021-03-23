
import Chart from "react-apexcharts";

import {IMC_Calculus} from '../../../../utils/utils'

const IMC_Chart = ({userTrainingList, user}) =>{

const barData = 
    {
    options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          
          categories: (userTrainingList.slice(0).reverse().map(userTraining => userTraining.id))
        }
      },
      series: [
        {
          name: "IMC",
          data: userTrainingList.slice(0).reverse().map(userTraining => {           
                                                return IMC_Calculus(user.height, userTraining.weight)         
                                                })
        }
      ]
    }
    

    return(
     
        <Chart
        options={barData.options}
        series={barData.series}
        type="bar"
        // width="500"
         /> 
       
    )
}

export default IMC_Chart