import type { RadioGroupProps } from '../../interfaces/ui'

export function RadioGroup({ name, label, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}
