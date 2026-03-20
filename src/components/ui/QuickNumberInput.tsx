import type { QuickNumberInputProps } from '../../interfaces/ui'

export function QuickNumberInput({ id, label, value, onChange, presets, placeholder, info, infoClassName }: QuickNumberInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-1.5 font-semibold text-sm">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {presets.map((n) => (
          <button
            key={n}
            type="button"
            className={`btn-styled flex-1 py-2 text-sm font-semibold cursor-pointer ${value === String(n) ? 'active' : ''}`}
            onClick={() => onChange(String(n))}
          >
            {n}
          </button>
        ))}
      </div>
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
        placeholder={placeholder ?? '0'}
      />
      {info && <p className={`mt-2 text-sm font-semibold ${infoClassName === 'info-warning' ? 'text-rose-400' : ''}`} style={infoClassName !== 'info-warning' ? { color: 'var(--accent)' } : {}}>{info}</p>}
    </div>
  )
}
