import type { NumberInputProps } from '../../interfaces/ui'

export function NumberInput({ id, label, value, onChange, info, infoClassName }: NumberInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-1.5 font-semibold text-sm">{label}</label>
      <input
        id={id}
        type="number"
        min="0"
        step="1"
        className="input-styled w-full py-2.5 px-3 text-base box-border"
        value={value}
        onChange={(e) => {
          const val = e.target.value
          if (val === '' || (/^\d+$/.test(val) && parseInt(val, 10) >= 0)) {
            onChange(val)
          }
        }}
        placeholder="0"
      />
      {info && <p className={`mt-2 text-sm font-semibold ${infoClassName === 'info-warning' ? 'text-red-700' : ''}`} style={infoClassName !== 'info-warning' ? { color: 'var(--accent)' } : {}}>{info}</p>}
    </div>
  )
}
