export interface DateInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  info?: string
}

export interface NumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  info?: string
  infoClassName?: string
}

export interface RadioOption {
  label: string
  value: string
}

export interface RadioGroupProps {
  name: string
  label: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
}

export interface SegmentedOption {
  label: string
  value: string
}

export interface SegmentedControlProps {
  options: SegmentedOption[]
  value: string
  onChange: (value: string) => void
}

export interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export interface QuickNumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  presets: number[]
  placeholder?: string
  info?: string
  infoClassName?: string
}
