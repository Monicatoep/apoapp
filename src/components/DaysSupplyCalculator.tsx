import { useState } from 'react'
import { NumberInput } from './ui/NumberInput'
import { formatDate } from '../utility/date'
import { SegmentedControl } from './ui/SegmentedControl'
import { QuickNumberInput } from './ui/QuickNumberInput'

const intervalOptions = [
  { label: 'Dag', value: 'day' },
  { label: 'Uge', value: 'week' },
  { label: 'Måned', value: 'month' },
]

const daysPerInterval: Record<string, number> = {
  day: 1,
  week: 7,
  month: 30,
}

const intervalLabel: Record<string, string> = {
  day: 'dag',
  week: 'uge',
  month: 'måned',
}

export function DaysSupplyCalculator() {
  const [dose, setDose] = useState('')
  const [interval, setInterval] = useState('day')
  const [totalSupply, setTotalSupply] = useState('')

  const parsedDose = dose !== '' ? parseInt(dose, 10) : null
  const parsedSupply = totalSupply !== '' ? parseInt(totalSupply, 10) : null

  let result = ''
  if (parsedDose && parsedDose > 0 && parsedSupply !== null && parsedSupply >= 0) {
    const days = (parsedSupply * daysPerInterval[interval]) / parsedDose
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + Math.ceil(days))
    const daysFormatted = days % 1 === 0 ? days : days.toFixed(1)
    result = `${daysFormatted} dages forbrug — til ${formatDate(endDate)}`
  }

  return (
    <div className="card-left flex-1 p-4 md:p-6">
      <h2 className="mb-3 text-lg font-medium" style={{ color: 'var(--text-h)' }}>Forbrugsberegner</h2>
      <div className="flex items-end gap-3 mb-3">
        <div className="flex-1 [&>div]:mb-0">
          <NumberInput id="dose-input" label="Antal (tabl, ml etc.)" value={dose} onChange={setDose} />
        </div>
        <span className="pb-2.5 font-semibold text-sm whitespace-nowrap min-w-[95px]">per {intervalLabel[interval]}</span>
      </div>
      <SegmentedControl options={intervalOptions} value={interval} onChange={setInterval} />
      <QuickNumberInput
        id="supply-input"
        label="Antal i pakken"
        value={totalSupply}
        onChange={setTotalSupply}
        presets={[10, 20, 30, 50, 100]}
        placeholder="Andet antal"
        info={result}
      />
    </div>
  )
}
