import Link from 'next/link'
import { courses, policyVideos, promotions } from '@/lib/data'
import { Play, ArrowRight, BookOpen, Zap, Shield, Share2, TrendingUp, Users, Clock, Globe, ChevronRight, Sparkles, BadgeCheck } from 'lucide-react'

function ReelCard({ title, tag, tagColor, duration, thumb, label }) {
  return (
    <div className="flex-shrink-0 w-40 sm:w-44 snap-start group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-navy aspect-[9/16] mb-2.5 shadow-md">
        {thumb
          ? <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <div className="w-full h-full bg-gradient-to-b from-navy-700 to-navy" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all duration-300">
            <Play size={16} className="text-white ml-1" />
          </div>
        </div>
        {tag && <div className={`absolute top-2.5 left-2.5 badge ${tagColor} text-[9px] px-2 py-0.5 shadow-sm`}>{tag}</div>}
        <div className="absolute bottom-2 right-2 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5 font-medium">{duration}</div>
        <div className="absolute bottom-8 left-2.5 right-2.5">
          <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2 drop-shadow">{title}</p>
        </div>
      </div>
      {label && <p className="text-[11px] text-gray-400 text-center truncate px-1">{label}</p>}
    </div>
  )
}

function PlaybookCard({ course, featured = false }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className={`card overflow-hidden ${featured ? 'ring-2 ring-red/30' : ''}`}>
        <div className={`relative overflow-hidden bg-gray-100 ${featured ? 'h-48' : 'h-40'}`}>
          <img src={course.thumbnail} alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-red flex items-center justify-center shadow-lg">
              <Play size={18} className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wide bg-black/40 px-2 py-0.5 rounded">{course.category}</span>
            <span className="bg-black/60 rounded-full px-2 py-0.5 text-[10px] text-white flex items-center gap-1">
              <Play size={8} /> {course.videos} videos
            </span>
          </div>
          {featured && <div className="absolute top-3 right-3 badge bg-red text-white text-[9px]">Featured</div>}
        </div>
        <div className="p-4">
          <h3 className={`font-semibold text-navy group-hover:text-red transition-colors mb-2 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
            {course.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={11} /> {course.duration}</span>
            <span className={`badge text-[9px] ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' : course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
              {course.level}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PolicyRow({ title, tag, tagColor, duration, date, thumb, summary }) {
  return (
    <div className="card flex gap-4 p-4 items-start group cursor-pointer hover:border-red/25 transition-all">
      <div className="relative flex-shrink-0 w-40 h-24 rounded-xl overflow-hidden bg-gray-100">
        {thumb && <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-9 h-9 rounded-full bg-red flex items-center justify-center shadow">
            <Play size={14} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5">{duration}</div>
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className={`badge ${tagColor} text-[10px]`}>{tag}</span>
          {date && <span className="text-[10px] text-gray-400">{date}</span>}
        </div>
        <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-red transition-colors mb-1.5 line-clamp-2">{title}</h3>
        {summary && <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{summary}</p>}
      </div>
    </div>
  )
}

export default function HomePage() {
  const promoReels = promotions.map((p, i) => ({
    id: p.id, title: p.title, tag: p.badge, tagColor: 'bg-red text-white',
    duration: '0:45', thumb: courses[i % courses.length]?.thumbnail, label: p.subtitle,
  }))

  const policyReels = policyVideos.map((pv, i) => ({
    id: pv.id, title: pv.title, tag: pv.tag, tagColor: pv.tagColor,
    duration: pv.duration, date: pv.date, thumb: courses[(i + 1) % courses.length]?.thumbnail, summary: pv.summary,
  }))

  return (
    <div className="bg-gray-50">
      <section className="hero-bg relative overflow-hidden min-h-[85vh] flex flex-col justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(227,24,55,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(15,52,96,0.4),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 flex-1 flex items-center">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 w-full items-center">
            <div className="lg:col-span-3">
              <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <BadgeCheck size={12} className="text-red" />
                <span className="text-[11px] font-semibold text-white/80 tracking-wider">Digital Insurance Learning Academy</span>
              </div>
              <h1 className="fade-up fade-up-2 font-display font-bold text-white leading-[1.1] mb-5" style={{fontSize:'clamp(2.2rem,5vw,3.8rem)'}}>
                Insurance Education<br />
                <span className="text-white/60 font-normal">that</span> Builds Trust,<br />
                <span className="shimmer-red">Drives Growth.</span>
              </h1>
              <p className="fade-up fade-up-3 text-white/50 text-base leading-relaxed mb-3 max-w-lg">
                India's video-first platform simplifying insurance for <span className="text-white/80 font-medium">customers</span>, <span className="text-white/80 font-medium">field agents</span>, and <span className="text-white/80 font-medium">advisors</span> — short, multilingual videos that educate and convert.
              </p>
              <div className="fade-up fade-up-3 inline-flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 mb-7">
                <TrendingUp size={16} className="text-red flex-shrink-0" />
                <p className="text-xs text-white/55 leading-snug">
                  India's insurance penetration is <span className="text-white font-semibold">2.8%</span> vs global avg of <span className="text-white font-semibold">5.6%</span> —<br className="hidden sm:block" /> education is the gap. We're bridging it.
                </p>
              </div>
              <div className="fade-up fade-up-4 flex flex-wrap gap-3 mb-10">
                <Link href="/courses" className="btn-red px-7 py-3.5 text-sm inline-flex items-center gap-2 shadow-lg shadow-red/20">
                  <Play size={15} /> Explore Playbooks
                </Link>
                <Link href="/policies" className="btn-outline px-7 py-3.5 text-sm inline-flex items-center gap-2">
                  <Shield size={14} /> Policy Updates
                </Link>
              </div>
              <div className="fade-up fade-up-4 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {[
                  { icon: Users, value: '10,000+', label: 'Active Learners' },
                  { icon: Play, value: '200+', label: 'Video Lessons' },
                  { icon: Globe, value: '8 Languages', label: 'Multilingual' },
                  { icon: BadgeCheck, value: 'IRDAI', label: 'Compliant Content' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <s.icon size={13} className="text-red" />
                      <span className="font-bold text-white text-sm">{s.value}</span>
                    </div>
                    <span className="text-white/35 text-[11px] pl-[19px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-2 items-end justify-center gap-3 h-full pt-8">
              {[
                { course: courses[0], offset: 'mb-16', label: 'Life' },
                { course: courses[1], offset: 'mb-4', label: 'Health' },
                { course: courses[2], offset: 'mb-10', label: 'Motor' },
              ].map(({ course, offset, label }, i) => (
                <div key={i} className={`flex-shrink-0 w-32 ${offset} group cursor-pointer`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/15 shadow-xl">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-red/80 border border-red/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={14} className="text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-red rounded text-[9px] text-white font-bold px-1.5 py-0.5">{label}</div>
                    <div className="absolute bottom-3 left-2.5 right-2.5">
                      <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{course.title}</p>
                      <p className="text-white/50 text-[10px] mt-0.5">{course.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 bg-white/5 backdrop-blur-sm mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-x-8 gap-y-1 overflow-hidden">
            {['Life Insurance', 'Health Insurance', 'Motor Insurance', 'IRDAI Compliance', 'Bancassurance', 'Claims', 'Term Plans', 'ULIPs', 'Endowment'].map((t, i) => (
              <span key={i} className="text-[11px] text-white/25 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                <span className="text-red text-[7px]">◆</span>{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-7 bg-red rounded-full" />
                  <div>
                    <h2 className="font-bold text-navy text-base leading-tight">🔥 Offers & Promotions</h2>
                    <p className="text-[11px] text-gray-400">Share instantly with prospects</p>
                  </div>
                </div>
                <Link href="/promotions" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">All <ArrowRight size={12} /></Link>
              </div>
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: 'none' }}>
                {promoReels.map(v => <ReelCard key={v.id} {...v} />)}
                <Link href="/promotions" className="flex-shrink-0 w-40 snap-start">
                  <div className="rounded-2xl border-2 border-dashed border-red/20 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-red/40 transition-all bg-red/3">
                    <ArrowRight size={18} className="text-red/60" />
                    <span className="text-[11px] font-semibold text-red/70 text-center px-3 leading-tight">View All</span>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-7 bg-navy rounded-full" />
                  <div>
                    <h2 className="font-bold text-navy text-base leading-tight">📋 Policy Updates</h2>
                    <p className="text-[11px] text-gray-400">Stay compliant — latest IRDAI</p>
                  </div>
                </div>
                <Link href="/policies" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">All <ArrowRight size={12} /></Link>
              </div>
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: 'none' }}>
                {policyReels.map(v => <ReelCard key={v.id} title={v.title} tag={v.tag} tagColor={v.tagColor} duration={v.duration} thumb={v.thumb} label={v.date} />)}
                <Link href="/policies" className="flex-shrink-0 w-40 snap-start">
                  <div className="rounded-2xl border-2 border-dashed border-navy/15 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-navy/30 transition-all bg-navy/3">
                    <ArrowRight size={18} className="text-navy/50" />
                    <span className="text-[11px] font-semibold text-navy/60 text-center px-3 leading-tight">View All</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Regulatory</p>
              <h2 className="font-display text-2xl font-bold text-navy">Recent Policy Briefings</h2>
            </div>
            <Link href="/policies" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all">View all <ArrowRight size={14} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {policyReels.slice(0, 4).map(pv => (
              <Link href="/policies" key={pv.id}><PolicyRow {...pv} /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Structured Learning</p>
              <h2 className="font-display text-2xl font-bold text-navy">📖 Playbooks</h2>
              <p className="text-gray-400 text-sm mt-0.5">Step-by-step video series for each product line</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all">All playbooks <ArrowRight size={14} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <PlaybookCard course={courses[0]} featured={true} />
            </div>
            {courses.slice(1, 3).map(course => <PlaybookCard key={course.id} course={course} />)}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {courses.slice(3).map(course => <PlaybookCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red text-xs font-semibold uppercase tracking-wider mb-2">For everyone in insurance</p>
            <h2 className="font-display text-2xl font-bold text-navy">One platform. Multiple audiences.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, title: 'Customers', color: 'bg-red/8 border-red/20', iconColor: 'bg-red/10 text-red', points: ['Understand products in plain language', 'Watch in your regional language', 'Make confident, informed decisions'] },
              { icon: Share2, title: 'Field Agents', color: 'bg-blue-50 border-blue-100', iconColor: 'bg-blue-100 text-blue-600', points: ['Ready-to-share video content', 'Better client conversations', 'Spend less time explaining basics'] },
              { icon: TrendingUp, title: 'Advisors', color: 'bg-green-50 border-green-100', iconColor: 'bg-green-100 text-green-700', points: ['Onboarding & enablement tools', 'Credible educational resources', 'Higher conversion through trust'] },
              { icon: BookOpen, title: 'Partner Banks', color: 'bg-purple-50 border-purple-100', iconColor: 'bg-purple-100 text-purple-700', points: ['Bancassurance training', 'Cross-sell enablement', 'Compliance-ready content'] },
            ].map((a, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${a.color}`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${a.iconColor} mb-4`}><a.icon size={20} /></div>
                <h3 className="font-bold text-navy text-sm mb-3">{a.title}</h3>
                <ul className="space-y-2">
                  {a.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500 leading-snug">
                      <BadgeCheck size={12} className="text-red mt-0.5 flex-shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden hero-bg p-7">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,55,0.2),transparent_70%)]" />
              <div className="relative">
                <Globe size={20} className="text-red mb-3" />
                <h3 className="font-display text-xl font-bold text-white mb-2">Learn in your language</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">Subtitles, translated content, and multilingual audio across India's major languages.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['हिंदी', 'தமிழ்', 'తెలుగు', 'मराठी', 'বাংলা', 'English'].map((lang, i) => (
                    <span key={i} className="bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-xs text-white/70">{lang}</span>
                  ))}
                </div>
                <Link href="/courses" className="btn-red px-5 py-2.5 text-sm inline-flex items-center gap-1.5"><Play size={13} /> Start Watching</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 p-7">
              <Share2 size={20} className="text-red mb-3" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">Share with clients in one tap</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Found a great explainer? Send it directly to prospects via WhatsApp or email — let the video do the selling for you.</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['WhatsApp', 'Email', 'SMS', 'Direct Link'].map((ch, i) => (
                  <span key={i} className="bg-gray-100 border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-600 font-medium">{ch}</span>
                ))}
              </div>
              <Link href="/courses" className="btn-red px-5 py-2.5 text-sm inline-flex items-center gap-1.5"><Share2 size={13} /> Explore Content</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red text-xs font-semibold uppercase tracking-wider mb-2">Simple process</p>
            <h2 className="font-display text-2xl font-bold text-navy">How it works</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', icon: BookOpen, title: 'Watch a Playbook', desc: 'Pick a product line — Life, Health, Motor or IRDAI — and learn through short, expert videos.', color: 'bg-red/8 text-red border-red/15' },
              { step: '02', icon: Share2, title: 'Share with Clients', desc: 'Send any video directly to prospects via WhatsApp or email. Educate before you pitch.', color: 'bg-blue-50 text-blue-600 border-blue-100' },
              { step: '03', icon: TrendingUp, title: 'Build Trust, Close More', desc: 'Informed customers decide faster. Educated prospects become confident policyholders.', color: 'bg-green-50 text-green-700 border-green-100' },
            ].map((s, i) => (
              <div key={i} className="relative">
                {i < 2 && <div className="hidden sm:block absolute top-8 left-full w-full h-px border-t border-dashed border-gray-200 z-0 -translate-x-1/2" />}
                <div className={`relative z-10 rounded-2xl border p-6 ${s.color}`}>
                  <div className="font-display text-5xl font-bold opacity-10 mb-2 leading-none">{s.step}</div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-current/20 flex items-center justify-center mb-4 shadow-sm">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
