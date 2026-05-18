import Link from 'next/link'
import { featuredVideos, rewardReels, policyVideos, videoSeries } from '@/lib/data'
import { Play, ArrowRight, Share2, Shield, BadgeCheck, Gift, ChevronRight } from 'lucide-react'

// ── 9:16 Reel Card ───────────────────────────────────────────
function ReelCard({ title, tag, tagColor, duration, thumbnail, subtitle }) {
  return (
    <div className="flex-shrink-0 w-40 sm:w-44 snap-start group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-md">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all duration-300">
            <Play size={16} className="text-white ml-1" />
          </div>
        </div>
        {tag && <span className={`absolute top-2.5 left-2.5 badge ${tagColor} text-[9px] px-2 py-0.5`}>{tag}</span>}
        <div className="absolute bottom-2 right-2 bg-black/60 rounded text-[10px] text-white px-1.5 py-0.5">{duration}</div>
        <div className="absolute bottom-8 left-2.5 right-2.5">
          <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{title}</p>
        </div>
      </div>
      {subtitle && <p className="text-[11px] text-gray-400 text-center mt-1.5 px-1 line-clamp-1">{subtitle}</p>}
    </div>
  )
}

// ── 16:9 Video Card (larger) ──────────────────────────────────
function VideoCard({ video, large = false }) {
  return (
    <div className="group cursor-pointer">
      <div className={`relative rounded-xl overflow-hidden bg-gray-100 ${large ? 'aspect-video' : 'aspect-video'} mb-3`}>
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all duration-300 ${large ? 'w-14 h-14' : 'w-11 h-11'}`}>
            <Play size={large ? 20 : 15} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2.5 right-2.5 bg-black/70 rounded px-2 py-0.5 text-xs text-white font-medium">{video.duration}</div>
        {video.tag && <span className={`absolute top-2.5 left-2.5 badge ${video.tagColor} text-[10px]`}>{video.tag}</span>}
      </div>
      <h3 className={`font-semibold text-navy group-hover:text-red transition-colors leading-snug ${large ? 'text-base' : 'text-sm'}`}>{video.title}</h3>
    </div>
  )
}

// ── Series Card ───────────────────────────────────────────────
function SeriesCard({ series }) {
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
        <div className="p-3.5">
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
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`badge ${pv.tagColor} text-[10px]`}>{pv.tag}</span>
            <span className="text-[10px] text-gray-400">{pv.date}</span>
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

      {/* ── HERO — video-first, minimal text ─────────────────── */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(227,24,55,0.1),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          {/* Top label */}
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck size={13} className="text-red" />
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Health Insurance · Video Resource Centre</span>
          </div>

          {/* Main headline — short */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display font-bold text-white leading-tight mb-4" style={{fontSize:'clamp(2rem,4.5vw,3.2rem)'}}>
                Understand Health Insurance.<br />
                <span className="shimmer-red">In minutes, not months.</span>
              </h1>
              <p className="text-white/50 text-base leading-relaxed mb-6 max-w-md">
                Short videos that explain health insurance simply — for buyers making decisions and agents helping clients.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/courses" className="btn-red px-6 py-3 text-sm inline-flex items-center gap-2 shadow-lg shadow-red/20">
                  <Play size={14} /> Watch Videos
                </Link>
                <Link href="/policies" className="btn-outline px-6 py-3 text-sm inline-flex items-center gap-2">
                  <Shield size={14} /> Policy Updates
                </Link>
              </div>
            </div>

            {/* Right — featured video player area */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/15 shadow-2xl">
                <img src={featuredVideos[0].thumbnail} alt={featuredVideos[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className={`badge ${featuredVideos[0].tagColor} text-[10px] mb-1.5`}>{featuredVideos[0].tag}</span>
                  <p className="text-white font-semibold text-sm">{featuredVideos[0].title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{featuredVideos[0].duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured videos row — visible immediately below hero text */}
          <div className="pb-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Featured Videos</p>
              <Link href="/courses" className="text-red text-xs font-semibold flex items-center gap-1">All videos <ArrowRight size={11} /></Link>
            </div>
            <div className="flex gap-3 overflow-x-auto snap-x pb-2" style={{ scrollbarWidth: 'none' }}>
              {featuredVideos.map(v => (
                <div key={v.id} className="flex-shrink-0 w-56 snap-start group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/25 border border-white/40 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
                        <Play size={13} className="text-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5">{v.duration}</span>
                    <span className={`absolute top-2 left-2 badge ${v.tagColor} text-[9px]`}>{v.tag}</span>
                  </div>
                  <p className="text-white/75 text-xs font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-t border-white/8 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap gap-x-8 gap-y-1">
            {['Sum Insured', 'Cashless Claims', 'Pre-existing Diseases', 'Family Floater', 'Critical Illness', 'Maternity Cover', 'No-Claim Bonus', 'Waiting Period'].map((t, i) => (
              <span key={i} className="text-[11px] text-white/20 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                <span className="text-red text-[7px]">◆</span>{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS + POLICY REELS — side by side ─────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

            {/* Rewards / Offers reels */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-6 bg-red rounded-full" />
                  <div>
                    <h2 className="font-bold text-navy text-sm leading-tight">🎁 Offers & Rewards</h2>
                    <p className="text-[11px] text-gray-400">Discounts & benefits on health plans</p>
                  </div>
                </div>
                <Link href="/promotions" className="text-red text-xs font-semibold flex items-center gap-1">All <ArrowRight size={11} /></Link>
              </div>
              <div className="flex gap-3 overflow-x-auto snap-x pb-2" style={{ scrollbarWidth: 'none' }}>
                {rewardReels.map(r => <ReelCard key={r.id} {...r} />)}
                <Link href="/promotions" className="flex-shrink-0 w-40 snap-start">
                  <div className="rounded-2xl border-2 border-dashed border-red/20 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-red/40 bg-red/2 transition-all">
                    <Gift size={18} className="text-red/50" />
                    <span className="text-[11px] font-semibold text-red/60 text-center px-3 leading-tight">All Offers</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Policy reels */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-6 bg-navy rounded-full" />
                  <div>
                    <h2 className="font-bold text-navy text-sm leading-tight">📋 Policy Updates</h2>
                    <p className="text-[11px] text-gray-400">Latest IRDAI regulatory changes</p>
                  </div>
                </div>
                <Link href="/policies" className="text-red text-xs font-semibold flex items-center gap-1">All <ArrowRight size={11} /></Link>
              </div>
              <div className="flex gap-3 overflow-x-auto snap-x pb-2" style={{ scrollbarWidth: 'none' }}>
                {policyVideos.map(pv => (
                  <ReelCard key={pv.id} title={pv.title} tag={pv.tag} tagColor={pv.tagColor} duration={pv.duration} thumbnail={pv.thumbnail} subtitle={pv.date} />
                ))}
                <Link href="/policies" className="flex-shrink-0 w-40 snap-start">
                  <div className="rounded-2xl border-2 border-dashed border-navy/15 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-navy/30 bg-navy/2 transition-all">
                    <Shield size={18} className="text-navy/40" />
                    <span className="text-[11px] font-semibold text-navy/50 text-center px-3 leading-tight">All Updates</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MORE VIDEOS — 16:9 grid ───────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Health Insurance</p>
              <h2 className="font-display text-xl font-bold text-navy">Videos for You</h2>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all">
              See all <ArrowRight size={13} />
            </Link>
          </div>

          {/* Large featured + grid */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Large card */}
            <div className="lg:col-span-1">
              <VideoCard video={featuredVideos[2]} large={true} />
            </div>
            {/* 2x2 grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {featuredVideos.slice(3, 7).map(v => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POLICY BRIEFINGS ─────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Regulatory</p>
              <h2 className="font-display text-xl font-bold text-navy">Recent Policy Briefings</h2>
            </div>
            <Link href="/policies" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all">
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {policyVideos.map(pv => <PolicyRow key={pv.id} pv={pv} />)}
          </div>
        </div>
      </section>

      {/* ── VIDEO SERIES ─────────────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red text-xs font-semibold uppercase tracking-wider mb-1">Go Deeper</p>
              <h2 className="font-display text-xl font-bold text-navy">Video Guides</h2>
              <p className="text-gray-400 text-sm mt-0.5">Topic-wise video collections on health insurance</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-1 text-red text-sm font-semibold hover:gap-2 transition-all">
              All guides <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {videoSeries.map(s => <SeriesCard key={s.id} series={s} />)}
          </div>
        </div>
      </section>

      {/* ── FOR AGENTS — share banner ─────────────────────────── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Agent share */}
            <div className="relative rounded-2xl overflow-hidden hero-bg p-7">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,55,0.2),transparent_70%)]" />
              <div className="relative">
                <Share2 size={20} className="text-red mb-3" />
                <h3 className="font-display text-xl font-bold text-white mb-2">Share with your clients & leads</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Send any video directly to prospects via WhatsApp or email. Help them understand health insurance before you pitch.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['WhatsApp', 'Email', 'SMS', 'Direct Link'].map((ch, i) => (
                    <span key={i} className="bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-xs text-white/70 font-medium">{ch}</span>
                  ))}
                </div>
                <Link href="/courses" className="btn-red px-5 py-2.5 text-sm inline-flex items-center gap-1.5">
                  <Play size={13} /> Browse Videos
                </Link>
              </div>
            </div>

            {/* For buyers */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 p-7">
              <BadgeCheck size={20} className="text-red mb-3" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">Buying health insurance?</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Don't buy blind. Watch our short guides on sum insured, waiting periods, cashless claims, and what to look for before signing.
              </p>
              <ul className="space-y-2 mb-5">
                {['What sum insured do I actually need?', 'Which hospital network is best?', 'How to avoid claim rejections'].map((q, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <ChevronRight size={13} className="text-red flex-shrink-0" />{q}
                  </li>
                ))}
              </ul>
              <Link href="/courses" className="btn-red px-5 py-2.5 text-sm inline-flex items-center gap-1.5">
                <Play size={13} /> Watch Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
