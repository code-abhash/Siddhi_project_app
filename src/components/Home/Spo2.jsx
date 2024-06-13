
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

function Spo2() {
  const arrayBp=[
    {
      "date": "01 Jan",
      "spo2": 98
    },
    {
      "date": "02 Jan",
      "spo2": 97
    },
    {
      "date": "03 Jan",
      "spo2": 96
    },
    {
      "date": "04 Jan",
      "spo2": 95
    },
    {
      "date": "05 Jan",
      "spo2": 97
    },
    {
      "date": "06 Jan",
      "spo2": 98
    },
    {
      "date": "07 Jan",
      "spo2": 94
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
        <Line dataKey="spo2" stroke='blue'/>
      </LineChart>
      
    </ResponsiveContainer>

    </>
  )
}

export default Spo2;
