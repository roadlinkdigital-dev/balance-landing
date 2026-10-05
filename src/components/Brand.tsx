import type { MouseEventHandler } from 'react'
import { ChevronRight } from 'lucide-react'

export function AppleLogo({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg aria-label="Aura" role="img" className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  )
}

type AppleButtonProps = {
  label?: string
  full?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function AppleButton({ label = 'Download Aura', full = false, onClick }: AppleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98] ${full ? 'w-full' : ''}`}
    >
      <AppleLogo />
      <span>{label}</span>
      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px" strokeWidth={2.3} />
    </button>
  )
}

export function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-2.5 text-xs font-medium tracking-wide text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag ? <span className="rounded-full border border-white/10 px-2 py-0.5 text-white/50">{tag}</span> : null}
    </div>
  )
}
