import type { SegmentedControlProps } from '../../interfaces/ui'

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div className="segmented-border flex mb-6 overflow-hidden">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`seg-option flex-1 py-2 px-3 text-sm font-semibold border-none cursor-pointer ${value === option.value ? 'active' : ''}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
