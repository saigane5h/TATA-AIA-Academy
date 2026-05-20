import Link from 'next/link'
import { featuredVideos, policyVideos, videoSeries } from '@/lib/data'
import { Play, ArrowRight, Shield, BadgeCheck, Share2, ChevronRight, Clock, Calendar, Search, TrendingUp, Calculator, BookOpen, HelpCircle, Star } from 'lucide-react'

// ── Video Card 16:9 ───────────────────────────────────────────
function VideoCard({ video, large = false }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden aspect-video mb-3 bg-gray-100">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all duration-300 ${large ? 'w-14 h-14' : 'w-11 h-11'}`}>
            <Play size={large ? 20 : 15} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2.5 right-2.5 bg-black/70 rounded px-2 py-0.5 text-xs text-white font-medium">{video.duration}</div>
        {video.tag && <span className={`absolute top-2.5 left-2.5 badge ${video.tagColor} text-[10px]`}>{video.tag}</span>}
        <button className="absolute bottom-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded px-1.5 py-0.5 text-[10px] font-semibold text-navy flex items-center gap-1">
          <Share2 size={9} /> Share
        </button>
      </div>
      <h3 className={`font-semibold text-navy group-hover:text-red transition-colors leading-snug ${large ? 'text-base' : 'text-sm'}`}>{video.title}</h3>
    </div>
  )
}

// ── Guide Tile ────────────────────────────────────────────────
function GuideTile({ series }) {
  return (
    <Link href={`/courses/${series.id}`} className="block group">
      <div className="card overflow-hidden">
        <div className="relative h-36 overflow-hidden">
          <img src={series.thumbnail} alt={series.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-red flex items-center justify-center shadow-lg">
              <Play size={16} className="text-white ml-1" />
            </div>
          </div>
          <span className={`absolute top-2.5 left-2.5 badge ${series.tagColor} text-[9px]`}>{series.tag}</span>
          <div className="absolute bottom-2.5 right-2.5 bg-black/60 rounded-full px-2 py-0.5 text-[10px] text-white flex items-center gap-1">
            <Play size={8} /> {series.videos} videos
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-navy text-sm group-hover:text-red transition-colors leading-snug mb-0.5">{series.title}</h3>
          <p className="text-[11px] text-gray-400 line-clamp-1">{series.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

// ── Policy Row ────────────────────────────────────────────────
function PolicyRow({ pv }) {
  return (
    <Link href="/policies" className="block group">
      <div className="card flex gap-4 p-4 items-start hover:border-red/25 transition-all">
        <div className="relative flex-shrink-0 w-36 h-20 rounded-xl overflow-hidden bg-gray-100">
          <img src={pv.thumbnail} alt={pv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center">
              <Play size={13} className="text-white ml-0.5" />
            </div>
          </div>
          <span className="absolute bottom-1.5 right-1.5 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5">{pv.duration}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`badge ${pv.tagColor} text-[10px]`}>{pv.tag}</span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1"><Calendar size={9} />{pv.date}</span>
          </div>
          <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-red transition-colors mb-1">{pv.title}</h3>
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{pv.summary}</p>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="bg-gray-50">

      {/* ── SECTION 01: HERO ──────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(227,24,55,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">

          <div className="flex items-center gap-2 mb-5">
            <BadgeCheck size={13} className="text-red" />
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Tata AIA Life Insurance Academy</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display font-bold text-white leading-tight mb-2" style={{fontSize:'clamp(2rem,4.5vw,3.4rem)'}}>
                Life insurance, finally explained.
              </h1>
              <p className="text-white/40 text-lg mb-1 italic">The gap isn't coverage. It's clarity.</p>
              <p className="text-white/50 text-base leading-relaxed mb-7 max-w-lg mt-3">
                India's most complete life insurance resource. Videos, guides, tools and expert answers — everything you need to buy right, understand your cover, and claim with confidence.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/courses" className="btn-red px-7 py-3.5 text-sm inline-flex items-center gap-2 shadow-lg shadow-red/20">
                  <Play size={15} /> Start Learning
                </Link>
                <Link href="/policies" className="btn-outline px-7 py-3.5 text-sm inline-flex items-center gap-2">
                  What's New
                </Link>
              </div>
            </div>

            {/* Hero video */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/15 shadow-2xl group cursor-pointer">
                <img src={featuredVideos[0].thumbnail} alt="Hero video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-sm">Why life insurance is not what you think it is</p>
                  <p className="text-white/50 text-xs mt-0.5">3 min · Start here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="border-t border-white/8 bg-white/5 -mx-4 sm:-mx-6 lg:-mx-8 mt-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap gap-x-8 gap-y-1 overflow-hidden">
              {['Term Insurance', 'ULIP', 'Whole Life', 'Critical Illness', 'Claim Settlement', 'Tax Benefits', 'Riders', 'Endowment'].map((t, i) => (
                <span key={i} className="text-[11px] text-white/20 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                  <span className="text-red text-[7px]">◆</span>{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: START HERE ────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Begin here</p>
              <h2 className="font-display text-2xl font-bold text-navy">The essentials, explained simply</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">The most important things to know about life insurance — curated, not algorithmic.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">
              All videos <ArrowRight size={13} />
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 my-5">
            {['Basics', 'Claims', 'Planning', 'Critical illness', 'Benefits', 'Must know', 'Tax & cover', 'Myth busted'].map((tag, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border cursor-pointer transition-all hover:border-red/40 hover:text-red ${i === 0 ? 'bg-red text-white border-red' : 'bg-white text-gray-500 border-gray-200'}`}>{tag}</span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'What is life insurance and why do you need it?', duration: '3:24', tag: 'Basics', tagColor: 'bg-blue-100 text-blue-700', thumb: featuredVideos[0].thumbnail },
              { title: 'Term vs whole life — what\'s the real difference?', duration: '4:10', tag: 'Planning', tagColor: 'bg-purple-100 text-purple-700', thumb: featuredVideos[2].thumbnail },
              { title: 'How the life insurance claim process works', duration: '3:55', tag: 'Claims', tagColor: 'bg-green-100 text-green-700', thumb: featuredVideos[1].thumbnail },
              { title: 'How much life cover does your family actually need?', duration: '4:22', tag: 'Must know', tagColor: 'bg-red/10 text-red', thumb: featuredVideos[3].thumbnail },
            ].map((v, i) => (
              <VideoCard key={i} video={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: TRENDING ──────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">What people are watching</p>
              <h2 className="font-display text-2xl font-bold text-navy">Trending this week</h2>
              <p className="text-gray-400 text-sm mt-1">The life insurance questions Indians are searching for right now — answered.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">
              See all trending <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'GST exemption on insurance', icon: TrendingUp },
              { label: 'Term vs ULIP', icon: TrendingUp },
              { label: 'Claim rejection reasons', icon: TrendingUp },
              { label: 'Protection gap calculator', icon: Calculator },
              { label: 'Insurance for self-employed', icon: TrendingUp },
              { label: 'Single woman & life cover', icon: TrendingUp },
            ].map((t, i) => (
              <Link href="/courses" key={i} className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red/40 hover:text-red text-gray-600 text-sm font-medium rounded-full px-4 py-2 transition-all group">
                <TrendingUp size={13} className="text-red" />
                {t.label}
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: FOR YOUR SITUATION ───────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Find what's relevant to you</p>
            <h2 className="font-display text-2xl font-bold text-navy">Life insurance looks different at every stage</h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">Whether you're buying for the first time, building a family, or planning for retirement — start with what matters to you right now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Just starting out', desc: 'First job, first policy — what you actually need and what you don\'t', icon: '🌱', color: 'hover:border-green-300' },
              { title: 'Growing family', desc: 'How much cover your family needs and which plan protects them best', icon: '👨‍👩‍👧', color: 'hover:border-blue-300' },
              { title: 'Peak earning years', desc: 'Maximise your cover, optimise your tax, and close your protection gap', icon: '📈', color: 'hover:border-purple-300' },
              { title: 'Planning for retirement', desc: 'Annuities, whole life cover, and making sure your money lasts', icon: '🏡', color: 'hover:border-amber-300' },
              { title: 'Already have a policy', desc: 'Understand what you\'re covered for and get everything your policy offers', icon: '📋', color: 'hover:border-red/40' },
              { title: 'Self-employed or freelance', desc: 'No employer cover? Here\'s what you need to protect yourself and your income', icon: '💼', color: 'hover:border-teal-300' },
            ].map((card, i) => (
              <Link href="/courses" key={i} className="block group">
                <div className={`bg-white border border-gray-200 ${card.color} rounded-2xl p-5 cursor-pointer transition-all group-hover:shadow-md`}>
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h3 className="font-semibold text-navy text-sm mb-1.5 group-hover:text-red transition-colors">{card.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: TOPIC GUIDES ──────────────────────────── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Go deeper</p>
              <h2 className="font-display text-2xl font-bold text-navy">Everything on one topic, in one place</h2>
              <p className="text-gray-400 text-sm mt-1">From buying basics to claim settlements — every topic covered in full.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">
              Browse all guides <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'Life insurance basics', sub: 'What every Indian family needs to know', videos: 5, thumb: featuredVideos[0].thumbnail, tag: 'Start Here', tagColor: 'bg-red text-white' },
              { title: 'How claims work', sub: 'Process, documents, timelines', videos: 4, thumb: featuredVideos[1].thumbnail, tag: 'Claims', tagColor: 'bg-green-600 text-white' },
              { title: 'Choosing the right plan', sub: 'Term, ULIP, whole life, endowment', videos: 4, thumb: featuredVideos[2].thumbnail, tag: 'Planning', tagColor: 'bg-purple-600 text-white' },
              { title: 'Critical illness cover', sub: 'Cancer, heart attack, stroke and more', videos: 3, thumb: featuredVideos[3].thumbnail, tag: 'Important', tagColor: 'bg-amber-500 text-white' },
              { title: 'Tax & life insurance', sub: '80C, 10(10D), GST exemption', videos: 3, thumb: featuredVideos[4].thumbnail, tag: 'Tax', tagColor: 'bg-blue-600 text-white' },
              { title: 'Riders & add-ons', sub: "What's worth adding and what's not", videos: 3, thumb: featuredVideos[5].thumbnail, tag: 'Tips', tagColor: 'bg-teal-600 text-white' },
              { title: 'Switching & portability', sub: 'Move insurers without losing benefits', videos: 3, thumb: featuredVideos[0].thumbnail, tag: 'Tips', tagColor: 'bg-blue-500 text-white' },
              { title: 'Retirement planning', sub: 'Annuities, whole life, legacy planning', videos: 4, thumb: featuredVideos[2].thumbnail, tag: 'Retirement', tagColor: 'bg-navy text-white' },
            ].map((g, i) => (
              <Link href="/courses" key={i} className="block group">
                <div className="card overflow-hidden">
                  <div className="relative h-28 overflow-hidden">
                    <img src={g.thumb} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute top-2 left-2 badge ${g.tagColor} text-[9px]`}>{g.tag}</span>
                    <span className="absolute bottom-2 right-2 bg-black/60 rounded-full px-1.5 py-0.5 text-[10px] text-white flex items-center gap-1"><Play size={7} />{g.videos}</span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-navy text-xs group-hover:text-red transition-colors leading-snug mb-0.5">{g.title}</h3>
                    <p className="text-[10px] text-gray-400 line-clamp-1">{g.sub}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: KNOW YOUR NUMBERS ────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Do the math</p>
            <h2 className="font-display text-2xl font-bold text-navy">Know your numbers before you decide</h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">Cover calculators, premium estimators and protection gap tools — so the numbers make sense before you commit.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', title: 'How much cover do I need?', desc: 'Life cover calculator — based on income, dependants and liabilities' },
              { icon: '💰', title: 'What will my premium be?', desc: 'Premium estimator — age, cover amount, policy term' },
              { icon: '📊', title: "What's my protection gap?", desc: "See how much of your family's financial need is currently uncovered" },
              { icon: '⚖️', title: 'Term vs ULIP — which wins?', desc: 'Compare returns and cover across different scenarios' },
            ].map((tool, i) => (
              <div key={i} className="card p-5 hover:border-red/25 cursor-pointer group transition-all">
                <span className="text-2xl mb-3 block">{tool.icon}</span>
                <h3 className="font-semibold text-navy text-sm mb-2 group-hover:text-red transition-colors leading-snug">{tool.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{tool.desc}</p>
                <span className="text-red text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Use tool <ArrowRight size={11} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: REGULATORY UPDATES ───────────────────── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Stay current</p>
              <h2 className="font-display text-2xl font-bold text-navy">What just changed — and what it means for you</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">IRDAI regulations, government policy changes, and budget updates — explained in plain language.</p>
            </div>
            <Link href="/policies" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">
              All updates <ArrowRight size={13} />
            </Link>
          </div>

          {/* Sub-rail 1 — IRDAI */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-red rounded-full" />
              <div>
                <h3 className="font-bold text-navy text-sm">IRDAI Updates</h3>
                <p className="text-[11px] text-gray-400">New circulars and rules that affect your life insurance policy</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {policyVideos.slice(0, 4).map(pv => <PolicyRow key={pv.id} pv={pv} />)}
            </div>
          </div>

          {/* Sub-rail 2 — Government */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-navy rounded-full" />
              <div>
                <h3 className="font-bold text-navy text-sm">Government Updates</h3>
                <p className="text-[11px] text-gray-400">Budget announcements, tax law changes, and government schemes</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { id: 'g1', title: 'Budget 2026 — how the new 80C changes affect life insurance', tag: 'Budget Update', tagColor: 'bg-blue-100 text-blue-700', date: 'Feb 2026', duration: '4:30', summary: 'The Union Budget revised Section 80C limits. Here\'s how the changes affect your life insurance premium deductions.', thumbnail: featuredVideos[0].thumbnail },
                { id: 'g2', title: 'Insurance for All by 2047 — what the government\'s plan means for you', tag: 'Government Scheme', tagColor: 'bg-green-100 text-green-700', date: 'March 2025', duration: '3:50', summary: 'The government\'s ambitious universal insurance programme and what it means for coverage, pricing, and access.', thumbnail: featuredVideos[2].thumbnail },
              ].map(pv => <PolicyRow key={pv.id} pv={pv} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: MYTH BUSTERS ──────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Straight talk</p>
              <h2 className="font-display text-2xl font-bold text-navy">Real questions. No sales pitch.</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">The most common fears and myths about life insurance — answered with data, not marketing.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">
              All myth busters <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Do life insurance companies actually pay claims?', tag: 'Myth busted', duration: '2:45', thumb: featuredVideos[1].thumbnail },
              { title: 'Is term insurance really a waste if you don\'t die?', tag: 'Myth busted', duration: '3:10', thumb: featuredVideos[2].thumbnail },
              { title: 'Can I have more than one life insurance policy?', tag: 'FAQ', duration: '2:20', thumb: featuredVideos[3].thumbnail },
              { title: 'What happens to my policy if I stop paying premiums?', tag: 'FAQ', duration: '3:05', thumb: featuredVideos[4].thumbnail },
            ].map((v, i) => (
              <VideoCard key={i} video={{ ...v, tagColor: v.tag === 'Myth busted' ? 'bg-red/10 text-red' : 'bg-gray-100 text-gray-600' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09: EXISTING POLICYHOLDERS ───────────────── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden hero-bg p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,24,55,0.2),transparent_60%)]" />
            <div className="relative">
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-2">For existing policyholders</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Already have a life insurance policy?</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-2xl">
                Most policyholders don't fully know what they're covered for. These guides help you understand your benefits, add the right riders, and get everything your policy offers — before you ever need to make a claim.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { title: 'Understand your policy document', desc: 'What the fine print actually says' },
                  { title: 'Add a rider to your existing policy', desc: 'Critical illness, accidental death, waiver of premium' },
                  { title: 'How to make a life insurance claim', desc: 'Step by step — documents, timelines, what to expect' },
                  { title: 'Is your cover still enough?', desc: 'Your needs change — your cover should too' },
                ].map((link, i) => (
                  <Link href="/courses" key={i} className="bg-white/10 border border-white/15 hover:bg-white/15 hover:border-white/30 rounded-xl p-3.5 transition-all group">
                    <h4 className="font-semibold text-white text-xs mb-1 group-hover:text-red transition-colors">{link.title}</h4>
                    <p className="text-white/40 text-[11px] leading-snug">{link.desc}</p>
                  </Link>
                ))}
              </div>
              <Link href="/courses" className="btn-red px-6 py-2.5 text-sm inline-flex items-center gap-2">
                Make the most of your cover <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: NOT SURE WHERE TO START ──────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">Not sure where to start?</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Most people spend more time researching a phone than a life insurance policy. The Tata AIA Life Insurance Academy exists to change that — with everything you need to make a decision you're confident in.
            </p>
          </div>

          {/* Three paths */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🛒', title: 'I want to buy life insurance', desc: 'Start with how much cover you need, then find the right plan' },
              { icon: '⚖️', title: 'I want to compare my options', desc: 'Term vs ULIP vs whole life — see what\'s right for your situation' },
              { icon: '📋', title: 'I already have a policy', desc: 'Understand your cover, add riders, or check if you\'re adequately protected' },
            ].map((path, i) => (
              <Link href="/courses" key={i} className="block group">
                <div className="card p-6 text-center hover:border-red/30 hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{path.icon}</span>
                  <h3 className="font-semibold text-navy text-sm mb-2 group-hover:text-red transition-colors">{path.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{path.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick questions */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick questions</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-5">
              {[
                'How much life cover do I actually need?',
                'Term vs ULIP — which is right for me?',
                'What gets life insurance claims rejected — and how to avoid it',
                'How does the GST exemption affect my premium?',
              ].map((q, i) => (
                <li key={i}>
                  <Link href="/courses" className="flex items-center gap-2 text-sm text-gray-600 hover:text-red transition-colors group p-2 rounded-lg hover:bg-white">
                    <ChevronRight size={13} className="text-red flex-shrink-0" />{q}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/courses" className="btn-red px-6 py-2.5 text-sm inline-flex items-center gap-2">
              Build your knowledge <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
