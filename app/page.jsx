import Link from 'next/link'
import { courses, policyVideos, promotions } from '@/lib/data'
import { Play, ArrowRight, BookOpen, Zap, Shield, Share2, TrendingUp, Users, Clock, Globe, ChevronRight } from 'lucide-react'

function ReelCard({ title, tag, tagColor, duration, thumb, label }) {
  return (
    <div className="flex-shrink-0 w-36 sm:w-40 snap-start group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-navy aspect-[9/16] mb-2.5">
        {thumb
          ? <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <div className="w-full h-full bg-gradient-to-b from-navy-700 to-navy" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/25 border border-white/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
            <Play size={14} className="text-white ml-0.5" />
          </div>
        </div>
        {tag && <div className={`absolute top-2 left-2 badge ${tagColor} text-[9px] px-2 py-0.5`}>{tag}</div>}
        <div className="absolute bottom-2 right-2 bg-black/60 rounded text-[10px] text-white px-1.5 py-0.5 font-medium">{duration}</div>
        <div className="absolute bottom-7 left-2 right-2">
          <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{title}</p>
        </div>
      </div>
      {label && <p className="text-[11px] text-gray-400 text-center truncate px-1">{label}</p>}
    </div>
  )
}

function VideoRow({ title, tag, tagColor, duration, date, thumb, summary }) {
  return (
    <div className="card flex gap-4 p-4 items-start group cursor-pointer hover:border-red/30">
      <div className="relative flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden bg-gray-100">
        {thumb && <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center">
            <Play size={13} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-1.5 right-1.5 bg-black/70 rounded text-[10px] text-white px-1.5 py-0.5">{duration}</div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`badge ${tagColor} text-[10px]`}>{tag}</span>
          {date && <span className="text-[10px] text-gray-400">{date}</span>}
        </div>
        <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-red transition-colors mb-1 line-clamp-2">{title}</h3>
        {summary && <p className="text-xs text-gray-400 line-clamp-1">{summary}</p>}
      </div>
    </div>
  )
}

function ModuleCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="card overflow-hidden">
        <div className="relative h-32 overflow-hidden bg-gray-100">
          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wide">{course.category}</span>
          </div>
          <div className="absolute top-2 right-2 bg-black/60 rounded-full px-2 py-0.5 text-[10px] text-white flex items-center gap-1">
            <Play size={9} /> {course.videos}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-red transition-colors mb-2 line-clamp-2">{course.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={11} /> {course.duration}
            </div>
            <span className={`badge text-[9px] ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' : course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{course.level}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const promoReels = promotions.map((p, i) => ({
    id: p.id, title: p.title, tag: p.badge, tagColor: 'bg-red text-white',
    duration: '0:45', thumb: courses[i % courses.length]?.thumbnail, label: p.subtitle,
  }))

  const policyReels = policyVideos.map((pv, i) => ({
    id: pv.id, title: pv.title, tag: pv.tag, tagColor: pv.tagColor,
    duration: pv.duration, date: pv.date, thumb: courses[(i + 2) % courses.length]?.thumbnail, summary: pv.summary,
  }))

  return (
    <div className="bg-gray-50">
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div className="pb-12">
              <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-red/15 border border-red/30 rounded-full px-3.5 py-1.5 mb-5">
                <Zap size={11} className="text-red" />
                <span className="text-[11px] font-bold text-red uppercase tracking-wider">Digital Insurance Learning Academy</span>
              </div>
              <h1 className="fade-up fade-up-2 font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                Simplify Insurance.<br />Build Trust.<br /><span className="shimmer-red">Grow Together.</span>
              </h1>
              <p className="fade-up fade-up-3 text-white/55 text-base leading-relaxed mb-6 max-w-md">
                India's video-first insurance education platform — empowering customers, agents, and advisors with short, multilingual videos that simplify complex concepts and drive informed decisions.
              </p>
              <div className="fade-up fade-up-3 flex flex-wrap gap-2 mb-7">
                {['Customers', 'Field Agents', 'Advisors', 'Partner Banks'].map((label, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/75 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-red inline-block" />{label}
                  </span>
                ))}
              </div>
              <div className="fade-up fade-up-4 flex flex-wrap gap-3">
                <Link href="/courses" className="btn-red px-6 py-3 text-sm inline-flex items-center gap-2"><Play size={14} /> Start Learning</Link>
                <Link href="/policies" className="btn-outline px-6 py-3 text-sm inline-flex items-center gap-2"><Shield size={14} /> Policy Updates</Link>
              </div>
              <div className="fade-up fade-up-4 flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/10">
                {[{icon:Users,value:'10,000+',label:'Learners'},{icon:Play,value:'200+',label:'Videos'},{icon:Globe,value:'8',label:'Languages'},{icon:TrendingUp,value:'2.8%→5.6%',label:'Penetration Goal'}].map((s,i)=>(
                  <div key={i} className="flex items-center gap-2"><s.icon size={13} className="text-red"/><span className="font-bold text-white text-sm">{s.value}</span><span className="text-white/40 text-xs">{s.label}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-end gap-3 pb-0 justify-center">
              {courses.slice(0,3).map((course,i)=>(
                <div key={course.id} className={`flex-shrink-0 w-36 ${i===1?'-mb-4':'mb-8'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-navy border border-white/10">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover opacity-80"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-red/80 border border-red flex items-center justify-center"><Play size={14} className="text-white ml-0.5"/></div>
                    </div>
                    <div className="absolute bottom-3 left-2.5 right-2.5">
                      <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">{course.title}</p>
                      <p className="text-white/50 text-[10px] mt-0.5">{course.duration}</p>
                    </div>
                    <div className="absolute top-2 left-2 bg-red rounded text-[9px] text-white px-1.5 py-0.5 font-bold">{course.category.split(' ')[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-navy/60 mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-x-8 gap-y-1">
            {['Life Insurance','Health Insurance','Motor Insurance','IRDAI Compliance','Bancassurance','Claims','Term Plans','ULIPs'].map((t,i)=>(
              <span key={i} className="text-[11px] text-white/30 uppercase tracking-widest flex items-center gap-2"><span className="text-red text-[8px]">●</span>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-red rounded-full"/>
              <div><h2 className="font-bold text-navy text-base leading-none">🔥 Offers &amp; Promotions</h2><p className="text-[11px] text-gray-400 mt-0.5">Short reels to share with your prospects</p></div>
            </div>
            <Link href="/promotions" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">See all <ArrowRight size={12}/></Link>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1" style={{scrollbarWidth:'none'}}>
            {promoReels.map(v=><ReelCard key={v.id} {...v}/>)}
            <Link href="/promotions" className="flex-shrink-0 w-36 sm:w-40 snap-start">
              <div className="rounded-2xl border-2 border-dashed border-red/25 bg-red/3 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-red/50 hover:bg-red/5 transition-all">
                <ArrowRight size={18} className="text-red"/><span className="text-[11px] font-semibold text-red text-center px-3 leading-tight">View All Offers</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-navy rounded-full"/>
              <div><h2 className="font-bold text-navy text-base leading-none">📋 New Policy Updates</h2><p className="text-[11px] text-gray-400 mt-0.5">Stay compliant — latest IRDAI changes</p></div>
            </div>
            <Link href="/policies" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">See all <ArrowRight size={12}/></Link>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1" style={{scrollbarWidth:'none'}}>
            {policyReels.map(v=><ReelCard key={v.id} title={v.title} tag={v.tag} tagColor={v.tagColor} duration={v.duration} thumb={v.thumb} label={v.date}/>)}
            <Link href="/policies" className="flex-shrink-0 w-36 sm:w-40 snap-start">
              <div className="rounded-2xl border-2 border-dashed border-navy/15 bg-navy/3 aspect-[9/16] flex flex-col items-center justify-center gap-2 hover:border-navy/30 transition-all">
                <ArrowRight size={18} className="text-navy"/><span className="text-[11px] font-semibold text-navy text-center px-3 leading-tight">All Policy Updates</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-navy rounded-full"/>
              <div><h2 className="font-bold text-navy text-base leading-none">Recent Regulatory Briefings</h2><p className="text-[11px] text-gray-400 mt-0.5">In-depth compliance updates for agents</p></div>
            </div>
            <Link href="/policies" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">See all <ArrowRight size={12}/></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {policyReels.slice(0,4).map(pv=>(<Link href="/policies" key={pv.id}><VideoRow {...pv}/></Link>))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-red rounded-full"/>
              <div><h2 className="font-bold text-navy text-base leading-none">📚 Learning Modules</h2><p className="text-[11px] text-gray-400 mt-0.5">Product knowledge for every line of business</p></div>
            </div>
            <Link href="/courses" className="text-red text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">All modules <ArrowRight size={12}/></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {courses.map(course=><ModuleCard key={course.id} course={course}/>)}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy mb-1">Built for everyone in insurance</h2>
            <p className="text-gray-400 text-sm">One platform, multiple audiences</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {icon:Users,title:'Customers',points:['Understand products easily','Learn in regional languages','Make confident decisions'],color:'bg-red/10 text-red'},
              {icon:Share2,title:'Field Agents',points:['Shareable video content','Better client conversations','Reduce explanation time'],color:'bg-blue-100 text-blue-600'},
              {icon:TrendingUp,title:'Advisors',points:['Onboarding & enablement','Credible education tools','Drive higher conversion'],color:'bg-green-100 text-green-700'},
              {icon:BookOpen,title:'Partner Banks',points:['Bancassurance training','Cross-sell enablement','Compliance ready'],color:'bg-purple-100 text-purple-700'},
            ].map((a,i)=>(
              <div key={i} className="card p-5">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${a.color} mb-4`}><a.icon size={20}/></div>
                <h3 className="font-bold text-navy text-sm mb-3">{a.title}</h3>
                <ul className="space-y-1.5">
                  {a.points.map((pt,j)=>(<li key={j} className="flex items-start gap-2 text-xs text-gray-500"><span className="w-1.5 h-1.5 rounded-full bg-red mt-1.5 flex-shrink-0"/>{pt}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden hero-bg p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,24,55,0.2),transparent_60%)]"/>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-lg">
                <span className="badge bg-red/20 text-red mb-3 inline-block"><Globe size={10} className="inline mr-1"/>Multilingual</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Insurance education in your language</h2>
                <p className="text-white/50 text-sm leading-relaxed">Videos with subtitles, translated content, and multilingual audio — reaching customers across Hindi, Tamil, Telugu, Marathi, Bengali, and more.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['हिंदी','தமிழ்','తెలుగు','मराठी','বাংলা','English'].map((lang,i)=>(
                    <span key={i} className="bg-white/10 border border-white/20 rounded-full px-2.5 py-1 text-xs text-white/70">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link href="/courses" className="btn-red px-7 py-3 text-sm inline-flex items-center gap-2"><Play size={14}/> Watch Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy">How it works</h2>
            <p className="text-gray-400 text-sm mt-1">From learning to closing — in three steps</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {step:'01',icon:BookOpen,title:'Watch a short video',desc:'Pick any module — Life, Health, IRDAI — and learn through quick, engaging reels.',color:'bg-red/10 text-red'},
              {step:'02',icon:Share2,title:'Share with clients',desc:"Share directly with prospects via WhatsApp or email. Let the video explain so you don't have to.",color:'bg-blue-100 text-blue-600'},
              {step:'03',icon:TrendingUp,title:'Build trust & close',desc:'Educated customers make faster, better decisions. Higher trust = higher conversion.',color:'bg-green-100 text-green-700'},
            ].map((s,i)=>(
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:border-red/20 hover:shadow-md transition-all">
                <div className="font-display text-4xl font-bold text-gray-100 mb-3">{s.step}</div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.color} mb-4`}><s.icon size={22}/></div>
                <h3 className="font-semibold text-navy text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
