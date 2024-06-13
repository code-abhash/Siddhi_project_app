import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

function Heart() {
  const arrayBp=[
    {
      date:"01 Jan",
      Bp:70
    },
    {
      date:"02 Jan",
      Bp:40
    },
    {
      date:"03 Jan",
      Bp:80
    },
    {
      date:"04 Jan",
      Bp:60
    }
    ,{
      date:"05 Jan",
      Bp:40
    }
    ,{
      date:"06 Jan",
      Bp:70
    },
    {
      date:"07 Jan",
      Bp:75
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
        <Line dataKey="Bp" stroke='black'/>
      </LineChart>
    </ResponsiveContainer>

    </>
  )
}

export default Heart
