import { useState } from 'react'
import { daysBetween } from '../utility/date'
import { DateInput } from './ui/DateInput'
import { QuickNumberInput } from './ui/QuickNumberInput'

export function IntervalCalculator() {
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0])
  const [number, setNumber] = useState('')

  const today = new Date()
  const parsedDate = date ? new Date(date + 'T00:00:00') : null
  const parsedNumber = number !== '' ? parseInt(number, 10) : null
  const validNumber = parsedNumber !== null && Number.isInteger(parsedNumber) && parsedNumber >= 0

  let dateInfo = ''
  if (parsedDate && !isNaN(parsedDate.getTime())) {
    const diff = daysBetween(today, parsedDate)
    if (diff > 0) {
      dateInfo = `${diff} dag${diff !== 1 ? 'e' : ''} til`
    } else if (diff < 0) {
      dateInfo = `${Math.abs(diff)} dag${Math.abs(diff) !== 1 ? 'e' : ''} siden`
    } else {
      dateInfo = 'I dag'
    }
  }

  let calcInfo = ''
  let calcIsLeft = false
  if (parsedDate && !isNaN(parsedDate.getTime()) && validNumber) {
    const target = new Date(parsedDate)
    target.setDate(target.getDate() + parsedNumber!)
    const diff = daysBetween(today, target)
    if (diff > 0) {
      calcInfo = `${diff} dag${diff !== 1 ? 'e' : ''} tilbage til interval overholdes`
      calcIsLeft = true
    } else if (diff < 0) {
      calcInfo = `${Math.abs(diff)} dag${Math.abs(diff) !== 1 ? 'e' : ''} siden interval blev overholdt`
    } else {
      calcInfo = 'Det er i dag'
    }
  }

  return (
    <div className="card-right flex-1 p-4 md:p-6">
      <h2 className="mb-3 text-lg font-medium" style={{ color: 'var(--text-h)' }}>Udleveringsintervalsberegner</h2>
      <DateInput id="date-input" label="Dato for udlevering" value={date} onChange={setDate} info={dateInfo} />
      <QuickNumberInput id="number-input" label="Udleveringsinterval (dage)" value={number} onChange={setNumber} presets={[30, 100]} placeholder="Andet antal" info={calcInfo} infoClassName={calcIsLeft ? 'info-warning' : ''} />
    </div>
  )
}
