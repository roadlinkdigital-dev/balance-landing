import { Check } from 'lucide-react'

export type PricingPlan = {
  name: string
  monthly: string
  yearly: string
  description: string
  features: string[]
  featured?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    monthly: 'Free',
    yearly: 'Free',
    description: 'For creators taking their first steps with Forma.',
    features: ['Up to 3 projects in the cloud', 'Image export up to 1080p', 'Basic editing tools', 'Free templates and icons', 'Access via web and mobile app'],
  },
  {
    name: 'Standard',
    monthly: '$9,99/m',
    yearly: '$99,99/y',
    description: 'For freelancers and small teams who need more freedom and flexibility.',
    features: ['Up to 50 projects in the cloud', 'Export up to 4K', 'Advanced editing toolkit', 'Team collaboration (up to 5 members)', 'Access to premium template library'],
  },
  {
    name: 'Pro',
    monthly: '$19,99/m',
    yearly: '$199,99/y',
    description: 'For studios, agencies, and professional creators working with brands.',
    features: ['Unlimited projects', 'Export up to 8K + animations', 'AI-powered content generation tools', 'Unlimited team members', 'Brand customization'],
    featured: true,
  },
]

type PricingSectionProps = {
  yearly: boolean
  onToggle: () => void
  onChoosePlan: (plan: string) => void
}

export function PricingSection({ yearly, onToggle, onChoosePlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="c3-pricing-section" aria-labelledby="pricing-heading">
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>
      <div className="c3-watermark-container">
        <h2 id="pricing-heading" className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </h2>
      </div>

      <div className="c3-grid" aria-label="Aura plans">
        {plans.map((plan) => (
          <article key={plan.name} className={`c3-card ${plan.featured ? 'c3-card-pro' : ''}`}>
            <p className="c3-tier-small">{plan.name}</p>
            <p className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</p>
            <p className="c3-desc">{plan.description}</p>
            <ul className="c3-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="c3-check"><Check className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button type="button" className="c3-btn" onClick={() => onChoosePlan(plan.name)}>Choose Plan</button>
          </article>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/60">Yearly</span>
        <button type="button" aria-pressed={yearly} aria-label="Toggle yearly billing" onClick={onToggle} className={`c3-toggle ${yearly ? 'active' : ''}`}>
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  )
}
