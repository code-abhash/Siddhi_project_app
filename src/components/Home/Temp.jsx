
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

function Temp() {
  const arrayBp=[
    {
      "date": "01 Jan",
      "temperature_f": 98.6
    },
    {
      "date": "02 Jan",
      "temperature_f": 99.1
    },
    {
      "date": "03 Jan",
      "temperature_f": 98.3
    },
    {
      "date": "04 Jan",
      "temperature_f": 98.9
    },
    {
      "date": "05 Jan",
      "temperature_f": 99.5
    },
    {
      "date": "06 Jan",
      "temperature_f": 98.7
    },
    {
      "date": "07 Jan",
      "temperature_f": 99.2
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
        <Line dataKey="temperature_f" stroke='brown'/>
      </LineChart>
      
    </ResponsiveContainer>

    </>
  )
}

export default Temp;
