'use client'

import { useState } from 'react'
import Link from 'next/link'
import { featuredVideos, policyVideos, videoSeries } from '@/lib/data'
import { Play, ArrowRight, Shield, BadgeCheck, Share2, ChevronRight, Clock, Calendar, TrendingUp, Calculator } from 'lucide-react'

function VideoCard({ video }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden aspect-video mb-3 bg-gray-100">
        <img src={video.thumbnail} alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
        <div className="hidden w-full h-full bg-gradient-to-br from-navy-700 to-navy items-center justify-center absolute inset-0" />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all duration-300">
            <Play size={15} className="text-white ml-1" />
          </div>
        </div>
        <span className="absolute bottom-2.5 right-2.5 bg-black/70 rounded px-2 py-0.5 text-xs text-white font-medium">{video.duration}</span>
        {video.tag && <span className={`absolute top-2.5 left-2.5 badge ${video.tagColor} text-[10px]`}>{video.tag}</span>}
        <button className="absolute bottom-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded px-1.5 py-0.5 text-[10px] font-semibold text-navy flex items-center gap-1">
          <Share2 size={9} /> Share
        </button>
      </div>
      <h3 className="font-semibold text-navy group-hover:text-red transition-colors leading-snug text-sm">{video.title}</h3>
    </div>
  )
}

function GuideTile({ g }) {
  return (
    <Link href="/courses" className="block group">
      <div className="card overflow-hidden">
        <div className="relative h-28 overflow-hidden">
          <img src={g.thumb} alt={g.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={e => e.target.style.opacity='0.3'} />
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
  )
}

function PolicyRow({ pv }) {
  return (
    <Link href="/policies" className="block group">
      <div className="card flex gap-4 p-4 items-start hover:border-red/25 transition-all">
        <div className="relative flex-shrink-0 w-24 sm:w-36 h-16 sm:h-20 rounded-xl overflow-hidden bg-gray-100">
          <img src={pv.thumbnail} alt={pv.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={e => e.target.style.opacity='0.3'} />
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

function TagBtn({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${
        active ? 'bg-red text-white border-red' : 'bg-white text-gray-500 border-gray-200 hover:border-red/40 hover:text-red'
      }`}>
      {label}
    </button>
  )
}

export default function HomePage() {
  const essentialsTags = ['All', 'Basics', 'Planning', 'Claims', 'Critical illness', 'Benefits', 'Must know', 'Tax & cover', 'Myth busted']
  const [essentialsTag, setEssentialsTag] = useState('All')
  const mythTags = ['All', 'Myth busted', 'FAQ']
  const [mythTag, setMythTag] = useState('All')

  const essentialsVideos = featuredVideos.filter(v =>
    essentialsTag === 'All' ? !['Myth busted', 'FAQ'].includes(v.tag) : v.tag === essentialsTag
  )
  const mythVideos = featuredVideos.filter(v =>
    mythTag === 'All' ? ['Myth busted', 'FAQ'].includes(v.tag) : v.tag === mythTag
  )

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(227,24,55,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
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
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/15 shadow-2xl group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Hero video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

          {/* Featured video strip */}
          <div className="pb-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-wider">Featured Videos</p>
              <Link href="/courses" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">All videos <ArrowRight size={11} /></Link>
            </div>
            <div className="flex gap-3 overflow-x-auto snap-x pb-2" style={{ scrollbarWidth: 'none' }}>
              {featuredVideos.slice(0, 6).map(v => (
                <div key={v.id} className="flex-shrink-0 w-56 snap-start group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
                    <img src={v.thumbnail} alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={e => e.target.style.opacity='0.3'} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/25 border border-white/40 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
                        <Play size={13} className="text-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5">{v.duration}</span>
                    <span className={`absolute top-2 left-2 badge ${v.tagColor} text-[9px]`}>{v.tag}</span>
                    <button className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded px-1.5 py-0.5 text-[10px] font-semibold text-navy flex items-center gap-1">
                      <Share2 size={9} /> Share
                    </button>
                  </div>
                  <p className="text-white/70 text-xs font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticker — clickable */}
        <div className="border-t border-white/8 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap gap-x-8 gap-y-1 overflow-hidden">
            {['Term Insurance', 'ULIP', 'Whole Life', 'Critical Illness', 'Claim Settlement', 'Tax Benefits', 'Riders', 'Endowment'].map((t, i) => (
              <Link key={i} href="/courses" className="text-[11px] text-white/25 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap hover:text-red transition-colors">
                <span className="text-red text-[7px]">◆</span>{t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — Start Here */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Begin here</p>
              <h2 className="font-display text-2xl font-bold text-navy">The essentials, explained simply</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">The most important things to know about life insurance — curated, not algorithmic.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">All videos <ArrowRight size={13} /></Link>
          </div>
          <div className="flex flex-wrap gap-2 my-5">
            {essentialsTags.map(tag => <TagBtn key={tag} label={tag} active={essentialsTag === tag} onClick={() => setEssentialsTag(tag)} />)}
          </div>
          {essentialsVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {essentialsVideos.slice(0, 4).map(v => <VideoCard key={v.id} video={v} />)}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400 text-sm">No videos in this category yet.</div>
          )}
        </div>
      </section>

      {/* SECTION 03 — Trending */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">What people are watching</p>
              <h2 className="font-display text-2xl font-bold text-navy">Trending this week</h2>
              <p className="text-gray-400 text-sm mt-1">The life insurance questions Indians are searching for right now — answered.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">See all trending <ArrowRight size={13} /></Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {['GST exemption on insurance', 'Term vs ULIP', 'Claim rejection reasons', 'Protection gap calculator', 'Insurance for self-employed', 'Single woman & life cover'].map((t, i) => (
              <Link href="/courses" key={i} className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red/40 hover:text-red text-gray-600 text-sm font-medium rounded-full px-4 py-2 transition-all group">
                <TrendingUp size={13} className="text-red" />{t}
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — For Your Situation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Find what's relevant to you</p>
            <h2 className="font-display text-2xl font-bold text-navy">Life insurance looks different at every stage</h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">Whether you're buying for the first time, building a family, or planning for retirement — start with what matters to you right now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Just starting out', desc: "First job, first policy — what you actually need and what you don't", icon: '🌱', color: 'hover:border-green-300' },
              { title: 'Growing family', desc: 'How much cover your family needs and which plan protects them best', icon: '👨‍👩‍👧', color: 'hover:border-blue-300' },
              { title: 'Peak earning years', desc: 'Maximise your cover, optimise your tax, and close your protection gap', icon: '📈', color: 'hover:border-purple-300' },
              { title: 'Planning for retirement', desc: 'Annuities, whole life cover, and making sure your money lasts', icon: '🏡', color: 'hover:border-amber-300' },
              { title: 'Already have a policy', desc: "Understand what you're covered for and get everything your policy offers", icon: '📋', color: 'hover:border-red/40' },
              { title: 'Self-employed or freelance', desc: "No employer cover? Here's what you need to protect yourself and your income", icon: '💼', color: 'hover:border-teal-300' },
            ].map((card, i) => (
              <Link href="/courses" key={i} className="block group">
                <div className={`bg-white border border-gray-200 ${card.color} rounded-2xl p-5 transition-all group-hover:shadow-md`}>
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h3 className="font-semibold text-navy text-sm mb-1.5 group-hover:text-red transition-colors">{card.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — Topic Guides */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Go deeper</p>
              <h2 className="font-display text-2xl font-bold text-navy">Everything on one topic, in one place</h2>
              <p className="text-gray-400 text-sm mt-1">From buying basics to claim settlements — every topic covered in full.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">Browse all guides <ArrowRight size={13} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { title: 'Life insurance basics', sub: 'What every Indian family needs to know', videos: 5, thumb: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80', tag: 'Start Here', tagColor: 'bg-red text-white' },
              { title: 'How claims work', sub: 'Process, documents, timelines', videos: 4, thumb: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', tag: 'Claims', tagColor: 'bg-green-600 text-white' },
              { title: 'Choosing the right plan', sub: 'Term, ULIP, whole life, endowment', videos: 4, thumb: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80', tag: 'Planning', tagColor: 'bg-purple-600 text-white' },
              { title: 'Critical illness cover', sub: 'Cancer, heart attack, stroke and more', videos: 3, thumb: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', tag: 'Important', tagColor: 'bg-amber-500 text-white' },
              { title: 'Tax & life insurance', sub: '80C, 10(10D), GST exemption', videos: 3, thumb: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', tag: 'Tax', tagColor: 'bg-blue-600 text-white' },
              { title: 'Riders & add-ons', sub: "What's worth adding and what's not", videos: 3, thumb: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=400&q=80', tag: 'Tips', tagColor: 'bg-teal-600 text-white' },
              { title: 'Switching & portability', sub: 'Move insurers without losing benefits', videos: 3, thumb: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=400&q=80', tag: 'Tips', tagColor: 'bg-blue-500 text-white' },
              { title: 'Retirement planning', sub: 'Annuities, whole life, legacy planning', videos: 4, thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80', tag: 'Retirement', tagColor: 'bg-navy text-white' },
            ].map((g, i) => <GuideTile key={i} g={g} />)}
          </div>
        </div>
      </section>

      {/* SECTION 06 — Know Your Numbers */}
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

      {/* SECTION 07 — Regulatory Updates */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Stay current</p>
              <h2 className="font-display text-2xl font-bold text-navy">What just changed — and what it means for you</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">IRDAI regulations, government policy changes, and budget updates — explained in plain language.</p>
            </div>
            <Link href="/policies" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">All updates <ArrowRight size={13} /></Link>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-red rounded-full" />
              <div>
                <h3 className="font-bold text-navy text-sm">IRDAI Updates</h3>
                <p className="text-[11px] text-gray-400">New circulars and rules that affect your life insurance policy</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {policyVideos.slice(0, 2).map(pv => <PolicyRow key={pv.id} pv={pv} />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-navy rounded-full" />
              <div>
                <h3 className="font-bold text-navy text-sm">Government Updates</h3>
                <p className="text-[11px] text-gray-400">Budget announcements, tax law changes, and government schemes</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {policyVideos.slice(2, 4).map(pv => <PolicyRow key={pv.id} pv={pv} />)}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — Myth Busters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Straight talk</p>
              <h2 className="font-display text-2xl font-bold text-navy">Real questions. No sales pitch.</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">The most common fears and myths about life insurance — answered with data, not marketing.</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all whitespace-nowrap">All myth busters <ArrowRight size={13} /></Link>
          </div>
          <div className="flex flex-wrap gap-2 my-5">
            {mythTags.map(tag => <TagBtn key={tag} label={tag} active={mythTag === tag} onClick={() => setMythTag(tag)} />)}
          </div>
          {mythVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {mythVideos.map(v => <VideoCard key={v.id} video={v} />)}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400 text-sm">No videos in this category yet.</div>
          )}
        </div>
      </section>

      {/* SECTION 09 — Existing Policyholders */}
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

      {/* SECTION 10 — Not Sure Where to Start */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">Not sure where to start?</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Most people spend more time researching a phone than a life insurance policy. The Tata AIA Life Insurance Academy exists to change that — with everything you need to make a decision you're confident in.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🛒', title: 'I want to buy life insurance', desc: 'Start with how much cover you need, then find the right plan' },
              { icon: '⚖️', title: 'I want to compare my options', desc: "Term vs ULIP vs whole life — see what's right for your situation" },
              { icon: '📋', title: 'I already have a policy', desc: "Understand your cover, add riders, or check if you're adequately protected" },
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
                  <Link href="/courses" className="flex items-center gap-2 text-sm text-gray-600 hover:text-red transition-colors p-2 rounded-lg hover:bg-white">
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
