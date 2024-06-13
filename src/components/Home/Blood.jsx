import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

const Blood = () => {
    const arrayBp=[
        {
          "date": "01 Jan",
          "systolic": 120,
          "diastolic": 80
        },
        {
          "date": "02 Jan",
          "systolic": 122,
          "diastolic": 78
        },
        {
          "date": "03 Jan",
          "systolic": 118,
          "diastolic": 82
        },
        
          {
            "date": "04 Jan",
            "systolic": 125,
            "diastolic": 79
          },
          {
            "date": "05 Jan",
            "systolic": 118,
            "diastolic": 81
          },
          {
            "date": "06 Jan",
            "systolic": 123,
            "diastolic": 77
          },
          {
            "date": "07 Jan",
            "systolic": 130,
            "diastolic": 84
          },
          {
            "date": "08 Jan",
            "systolic": 126,
            "diastolic": 80
          }
      
    ]
  return (
    <>
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart data={arrayBp} height={400} width={500}>
      <Legend/>
        <Tooltip/>
        <XAxis dataKey="date"/>
        <YAxis />
        <Line dataKey="systolic" stroke='red'/>
        <Line dataKey="diastolic" stroke='green'/>
      </LineChart>
      
    </ResponsiveContainer>

    </>
  )
}

export default Blood