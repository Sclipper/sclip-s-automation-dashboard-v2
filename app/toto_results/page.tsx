'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable no-restricted-syntax */

import * as React from 'react'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { results } from './TotoResults.model'
import { countNumbersInDataset, formatCounts } from './TotoResults.controller'

const groupData = (years: number[]) => {
  const data = []
  for (const year of years) {
    data.push(...results[year as keyof typeof results])
  }
  return data
}

function TotoResultsPage() {
  const [year, setYear] = React.useState([2023])
  const data = countNumbersInDataset(groupData(year))
  const formattedData = formatCounts(data)

  return (
    <div style={{ width: '100vw', height: '25rem' }}>
      <p>Избери година / години</p>
      <div style={{ display: 'flex', gap: '5px', flexDirection: 'row' }}>
        {Object.keys(results).map((resultYear) => (
          <div key={resultYear}>
            <input
              type="checkbox"
              checked={year.includes(+resultYear)}
              onChange={(e) => {
                if (e.target.checked) {
                  setYear([...year, +resultYear])
                } else {
                  setYear(year.filter((y) => y !== +resultYear))
                }
              }}
            />
            <label>{resultYear}</label>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        {/* @ts-ignore */}
        <BarChart
          width={500}
          height={300}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* @ts-ignore */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* @ts-ignore */}
          <Tooltip />
          {/* @ts-ignore */}
          <Legend />
          {/* @ts-ignore */}
          <Bar
            dataKey="Изтеглено пъти"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotoResultsPage
