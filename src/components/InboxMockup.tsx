import {
  Archive,
  ChevronDown,
  FileText,
  Forward,
  Inbox,
  MoreHorizontal,
  Paperclip,
  Reply,
  Search,
  Send,
  Sparkles,
  Star,
  Trash2,
} from 'lucide-react'

type NavItem = { label: string; count?: number; icon: typeof Inbox; active?: boolean }
type Email = { name: string; subject: string; preview: string; time: string; unread?: boolean; active?: boolean }

const navItems: NavItem[] = [
  { label: 'Inbox', count: 12, icon: Inbox, active: true },
  { label: 'Starred', count: 3, icon: Star },
  { label: 'Sent', icon: Send },
  { label: 'Drafts', count: 2, icon: FileText },
  { label: 'Archive', icon: Archive },
  { label: 'Trash', icon: Trash2 },
]

const labels = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
]

const emails: Email[] = [
  { name: 'Linear', subject: 'Weekly product digest', preview: 'Your team shipped 23 issues this week...', time: '9:41 AM', unread: true, active: true },
  { name: 'Sophia Chen', subject: 'Re: Q3 roadmap review', preview: 'Thanks for sending the deck over. I had a few thoughts...', time: '8:12 AM', unread: true },
  { name: 'Figma', subject: 'Marcus commented on your file', preview: 'Love the new direction on the landing hero.', time: 'Yesterday' },
  { name: 'Stripe', subject: 'Payout of $12,480.00 sent', preview: 'Your payout is on its way to your bank...', time: 'Yesterday' },
  { name: 'Vercel', subject: 'Deployment ready for aura-web', preview: 'Preview is live at aura-web-g3f.vercel.app', time: 'Mon' },
  { name: 'GitHub', subject: '[aura/core] PR #482 approved', preview: 'david-lim approved your pull request.', time: 'Mon' },
]

export function InboxMockup() {
  return (
    <div className="inbox-scroll">
      <div className="min-w-[760px]">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-black/20 px-5">
          <div className="flex items-center gap-2" aria-label="Window controls">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-white/50">Aura — Inbox</span>
          <span className="w-12" aria-hidden="true" />
        </div>

        <div className="grid h-[520px] grid-cols-12">
          <aside className="col-span-3 border-r border-white/10 bg-black/30 p-4">
            <button type="button" className="mb-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              Compose with Aura
            </button>
            <nav aria-label="Mailbox folders" className="space-y-1">
              {navItems.map(({ label, count, icon: Icon, active }) => (
                <button key={label} type="button" className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition ${active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                  <Icon className="h-3.5 w-3.5" />
                  <span className="flex-1">{label}</span>
                  {count ? <span className="text-[10px] text-white/45">{count}</span> : null}
                </button>
              ))}
            </nav>
            <div className="mt-7">
              <p className="mb-2.5 px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">Labels</p>
              <div className="space-y-1">
                {labels.map((label) => (
                  <button key={label.name} type="button" className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-white/60 transition hover:bg-white/5 hover:text-white">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: label.color }} />
                    {label.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <section className="col-span-4 border-r border-white/10" aria-label="Message list">
            <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4 text-xs text-white/35">
              <Search className="h-3.5 w-3.5" />
              <span>Search mail</span>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {emails.map((email) => (
                <button key={`${email.name}-${email.time}`} type="button" className={`block w-full px-4 py-3 text-left transition ${email.active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'}`}>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`min-w-0 flex-1 truncate ${email.unread ? 'font-semibold text-white' : 'font-medium text-white/75'}`}>{email.name}</span>
                    <span className="shrink-0 text-[10px] text-white/35">{email.time}</span>
                  </div>
                  <p className={`mt-1 truncate text-xs ${email.unread ? 'font-medium text-white/80' : 'text-white/55'}`}>{email.subject}</p>
                  <p className="mt-1 truncate text-[11px] text-white/35">{email.preview}</p>
                </button>
              ))}
            </div>
          </section>

          <article className="col-span-5 min-w-0" aria-label="Selected email">
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-1">
                {[Reply, Forward, Archive, Trash2].map((Icon, index) => (
                  <button type="button" aria-label={['Reply', 'Forward', 'Archive', 'Delete'][index]} key={index} className="grid h-7 w-7 place-items-center rounded-md text-white/55 transition hover:bg-white/5 hover:text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
              </div>
              <button type="button" aria-label="More actions" className="grid h-7 w-7 place-items-center rounded-md text-white/55 transition hover:bg-white/5 hover:text-white">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-sm font-semibold text-white">Weekly product digest</h3>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] text-[11px] font-semibold text-white">L</span>
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="text-xs font-medium text-white">Linear <span className="font-normal text-white/40">to me · 9:41 AM</span></div>
                </div>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/60">Work</span>
                <ChevronDown className="h-3 w-3 text-white/35" />
              </div>

              <div className="mt-5 rounded-lg border border-[#A4F4FD]/20 bg-[#A4F4FD]/[0.06] p-3.5">
                <div className="flex items-center gap-2 text-xs font-medium text-[#A4F4FD]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Summary by Aura
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-white/70">Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.</p>
              </div>

              <div className="mt-5 space-y-3 text-[11px] leading-[1.65] text-white/65">
                <p>Hi team,</p>
                <p>Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.</p>
                <p>Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.</p>
                <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
                <p className="text-white/50">— The Linear team</p>
              </div>

              <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-white/65 transition hover:bg-white/[0.07]">
                <Paperclip className="h-3 w-3" />
                digest-may-6.pdf
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
