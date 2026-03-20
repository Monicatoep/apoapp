import type { DateInputProps } from '../../interfaces/ui'

export function DateInput({ id, label, value, onChange, info }: DateInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-1.5 font-semibold text-sm">{label}</label>
      <input
        id={id}
        type="date"
        className="input-styled w-full py-2.5 px-3 text-base box-border"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {info && <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--accent)' }}>{info}</p>}
    </div>
  )
}
