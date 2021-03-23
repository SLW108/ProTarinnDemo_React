import React, { Component } from 'react';
import Chart from 'react-apexcharts'

//import utils
import {minutesPerTrainingRows} from '../../../../utils/utils'

const DetailPerTrainingDonutChart = ({trainingTypes, userTrainingList}) => {


    const data = minutesPerTrainingRows({trainingTypes, userTrainingList})

    const options = {
      series: data.map(obj => obj.acumulatedMinutes),
      labels: data.map(obj => obj.trainingType.name),
      dataLabels: {
        enabled: true,
        formatter: function( value, { seriesIndex, dataPointIndex, w }) {
        return w.config.labels[seriesIndex] + ":  " + w.config.series[seriesIndex] + " ''"
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true
            }
          }
        }
      },
      theme: {
        mode: 'light',
        palette: 'palette3',
        monochrome:{
          enabled: false
        }
      }
        
    }

    return (
      <div className="donut">
        <Chart options={options} labels={options.labels} series={options.series}  type="donut" width="380" />
      </div>
    );
  
}

export default DetailPerTrainingDonutChart;