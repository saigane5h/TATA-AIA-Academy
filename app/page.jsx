import Link from 'next/link'
import { courses, policyVideos, promotions } from '@/lib/data'
import { Play, ChevronRight, ArrowRight, BookOpen, Zap, Shield, Share2, TrendingUp, Star, Users, Clock } from 'lucide-react'

function VideoThumb({ title, tag, tagColor, duration, date, thumb }) {
  return (
    <div className="flex-shrink-0 w-60 snap-start group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden bg-navy h-36 mb-3">
        {thumb
          ? <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy" />}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
            <Play size={16} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 rounded px-1.5 py-0.5 text-xs text-white font-medium">{duration}</div>
        {tag && <div className={`absolute top-2 left-2 badge ${tagColor} text-[10px]`}>{tag}</div>}
      </div>
      <p className="text-sm font-semibold text-navy leading-snug group-hover:text-red transition-colors line-clamp-2">{title}</p>
      {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
    </div>
  )
}

function TrackCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="card flex gap-4 p-4 items-start">
        <div className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play size={16} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-red uppercase tracking-wide">{course.category}</span>
            <span className={`badge text-[9px] ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' : course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{course.level}</span>
          </div>
          <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-red transition-colors mb-1.5 line-clamp-2">{course.title}</h3>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Play size={10} /> {course.videos} videos</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {course.duration}</span>
          </div>
        </div>
        <ChevronRight size={16} className="text-gray-300 group-hover:text-red flex-shrink-0 mt-1 transition-colors" />
      </div>
    </Link>
  )
}

export default function HomePage() {
  const promoVideos = promotions.map((p, i) => ({
    id: p.id,
    title: p.title + ' — ' + p.subtitle,
    tag: p.badge,
    tagColor: 'bg-red/90 text-white',
    duration: '2:30',
    thumb: courses[i % courses.length]?.thumbnail,
  }))

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="max-w-2xl">
            <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-red/15 border border-red/30 rounded-full px-4 py-1.5 mb-5">
              <Zap size={12} className="text-red" />
              <span className="text-xs font-bold text-red uppercase tracking-wider">For Field Insurance Agents</span>
            </div>
            <h1 className="fade-up fade-up-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Learn. Share.<br /><span className="shimmer-red">Close.</span>
            </h1>
            <p className="fade-up fade-up-3 text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Short videos to sharpen your product knowledge — and share instantly with prospects & clients to showcase what you offer.
            </p>
            <div className="fade-up fade-up-4 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-red px-6 py-3 text-sm inline-flex items-center gap-2">
                <Play size={15} /> Browse Tracks
              </Link>
              <Link href="/policies" className="btn-outline px-6 py-3 text-sm inline-flex items-center gap-2">
                <Shield size={15} /> Policy Updates
              </Link>
            </div>
            <div className="fade-up fade-up-4 flex flex-wrap gap-2 mt-8">
              {[
                { icon: BookOpen, label: 'Product Knowledge' },
                { icon: Share2, label: 'Share with Clients' },
                { icon: TrendingUp, label: 'Close More Sales' },
                { icon: Shield, label: 'Stay Compliant' },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5">
                  <p.icon size={12} className="text-red" />
                  <span className="text-xs text-white/70 font-medium">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-navy-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              {[
                { icon: Users, value: '10,000+', label: 'Agents Learning' },
                { icon: Play, value: '200+', label: 'Video Lessons' },
                { icon: BookOpen, value: '50+', label: 'Learning Tracks' },
                { icon: Star, value: '4.9★', label: 'Agent Rating' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <s.icon size={14} className="text-red" />
                  <span className="font-bold text-white text-sm">{s.value}</span>
                  <span className="text-white/40 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMO VIDEO CAROUSEL */}
      <section className="py-10 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-6 bg-red rounded-full" />
              <div>
                <h2 className="font-bold text-navy text-lg leading-none">🔥 Offers &amp; Promotions</h2>
                <p className="text-xs text-gray-400 mt-0.5">Share these with your prospects</p>
              </div>
            </div>
            <Link href="/promotions" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              See all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
            {promoVideos.map(v => <VideoThumb key={v.id} {...v} />)}
            <Link href="/promotions" className="flex-shrink-0 w-44 snap-start">
              <div className="h-36 rounded-xl border-2 border-dashed border-red/30 bg-red/3 flex flex-col items-center justify-center gap-2 hover:border-red/60 hover:bg-red/5 transition-all">
                <ArrowRight size={20} className="text-red" />
                <span className="text-xs font-semibold text-red text-center px-3">View All Offers</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* POLICY UPDATE CAROUSEL */}
      <section className="py-10 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-6 bg-navy rounded-full" />
              <div>
                <h2 className="font-bold text-navy text-lg leading-none">📋 New Policy Updates</h2>
                <p className="text-xs text-gray-400 mt-0.5">Stay ahead of regulatory changes</p>
              </div>
            </div>
            <Link href="/policies" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              See all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
            {policyVideos.map((pv, i) => (
              <VideoThumb key={pv.id} title={pv.title} tag={pv.tag} tagColor={pv.tagColor} duration={pv.duration} date={pv.date} thumb={courses[i % courses.length]?.thumbnail} />
            ))}
            <Link href="/policies" className="flex-shrink-0 w-44 snap-start">
              <div className="h-36 rounded-xl border-2 border-dashed border-navy/20 bg-navy/3 flex flex-col items-center justify-center gap-2 hover:border-navy/40 transition-all">
                <ArrowRight size={20} className="text-navy" />
                <span className="text-xs font-semibold text-navy text-center px-3">All Policy Updates</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING TRACKS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-6 bg-red rounded-full" />
              <div>
                <h2 className="font-bold text-navy text-lg leading-none">🛤️ Learning Tracks</h2>
                <p className="text-xs text-gray-400 mt-0.5">Structured paths for every product line</p>
              </div>
            </div>
            <Link href="/courses" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              All tracks <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(course => <TrackCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      {/* AGENT SHARE BANNER */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden hero-bg p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,24,55,0.25),transparent_60%)]" />
            <div className="relative max-w-xl">
              <span className="badge bg-red/20 text-red mb-4">For Field Agents</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Share product videos with clients in one tap
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Found a great explainer? Share it directly with your prospect via WhatsApp, email, or link — and let the video do the selling.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses" className="btn-red px-6 py-2.5 text-sm inline-flex items-center gap-2">
                  <Play size={14} /> Start Watching
                </Link>
                <Link href="/policies" className="btn-outline px-6 py-2.5 text-sm inline-flex items-center gap-2">
                  <Share2 size={14} /> Policy Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy">How it works</h2>
            <p className="text-gray-400 text-sm mt-1">Three steps to become a better agent</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', icon: BookOpen, title: 'Watch a Track', desc: 'Pick a product track — Life, Health, Motor — and watch short expert videos at your own pace.', color: 'bg-red/10 text-red' },
              { step: '02', icon: Share2, title: 'Share with Clients', desc: 'Found a great video? Share it instantly with prospects via WhatsApp or email to explain products simply.', color: 'bg-blue-100 text-blue-600' },
              { step: '03', icon: TrendingUp, title: 'Close More Sales', desc: 'Better product knowledge + client education = higher conversion and trust.', color: 'bg-green-100 text-green-700' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:border-red/20 hover:shadow-md transition-all">
                <div className="text-3xl font-display font-bold text-gray-100 mb-3">{s.step}</div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.color} mb-4`}>
                  <s.icon size={22} />
                </div>
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
