import Link from 'next/link'
import { Play, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red flex items-center justify-center">
                <Play size={14} className="text-white ml-0.5" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-white text-sm">Health Insurance</span>
                <span className="block font-bold text-red text-sm -mt-0.5">Video Hub</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Short videos that simplify health insurance — for buyers making decisions and agents enabling clients.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Videos</h4>
            <ul className="space-y-2.5">
              {['Health Basics', 'Cashless Claims', 'Critical Illness', 'Family Floater', 'Wellness Benefits'].map(t => (
                <li key={t}><Link href="/courses" className="text-white/50 text-sm hover:text-red transition-colors">{t}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5">
              {[['Video Guides', '/courses'], ['Policy Updates', '/policies'], ['Offers & Rewards', '/promotions']].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-white/50 text-sm hover:text-red transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail size={14} className="text-red flex-shrink-0" /> support@healthvideohub.in
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={14} className="text-red flex-shrink-0" /> 1800-XXX-XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 Health Insurance Video Hub. All rights reserved.</p>
          <p className="text-white/30 text-xs">IRDAI Compliant · For Buyers & Advisors</p>
        </div>
      </div>
    </footer>
  )
}
