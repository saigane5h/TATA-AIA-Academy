// ─────────────────────────────────────────────────────────────
// Health Insurance Video Platform — Content Data
// YouTube embeds from TATA AIA public channel
// Replace embedCode with actual iframe if you have private/CDN videos
// ─────────────────────────────────────────────────────────────

// Helper to build YouTube embed iframe
const yt = (id, title) =>
  `<iframe src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe>`

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`

export const videoSeries = [
  {
    id: 'health-basics',
    title: 'Health Insurance Basics',
    subtitle: 'What every Indian family needs to know',
    thumbnail: ytThumb('K8oiELnGF3E'),
    videos: 5,
    tag: 'Start Here',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'cashless-claims',
    title: 'Cashless Claims Explained',
    subtitle: 'How to use your policy when it matters most',
    thumbnail: ytThumb('bRKJDKOOKm4'),
    videos: 4,
    tag: 'Popular',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'choosing-plan',
    title: 'Choosing the Right Plan',
    subtitle: 'Individual vs family floater — which suits you?',
    thumbnail: ytThumb('QdR4fPCHCuE'),
    videos: 3,
    tag: 'Must Watch',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'critical-illness',
    title: 'Critical Illness Cover',
    subtitle: 'Cancer, heart attack, stroke — are you covered?',
    thumbnail: ytThumb('W3bACkLCkVs'),
    videos: 3,
    tag: 'Important',
    tagColor: 'bg-amber-500 text-white',
  },
  {
    id: 'wellness-benefits',
    title: 'Wellness & Preventive Benefits',
    subtitle: 'Health check-ups, OPD, and wellness rewards',
    thumbnail: ytThumb('XM_TtKZ-2eU'),
    videos: 3,
    tag: 'Benefits',
    tagColor: 'bg-green-600 text-white',
  },
  {
    id: 'renewal-tips',
    title: 'Renewal & Portability',
    subtitle: 'Switch insurers without losing your benefits',
    thumbnail: ytThumb('K8oiELnGF3E'),
    videos: 3,
    tag: 'Tips',
    tagColor: 'bg-blue-500 text-white',
  },
]

export const featuredVideos = [
  {
    id: 'v1',
    title: 'What is Health Insurance & Why Do You Need It?',
    seriesId: 'health-basics',
    duration: '3:24',
    embedCode: yt('K8oiELnGF3E', 'What is Health Insurance'),
    thumbnail: ytThumb('K8oiELnGF3E'),
    tag: 'Basics',
    tagColor: 'bg-blue-100 text-blue-700',
    shareText: 'Watch this short video to understand why health insurance is essential for every family.',
  },
  {
    id: 'v2',
    title: 'How Cashless Hospitalisation Works — Step by Step',
    seriesId: 'cashless-claims',
    duration: '4:10',
    embedCode: yt('bRKJDKOOKm4', 'Cashless Hospitalisation'),
    thumbnail: ytThumb('bRKJDKOOKm4'),
    tag: 'Claims',
    tagColor: 'bg-green-100 text-green-700',
    shareText: 'Here\'s exactly how to use your cashless health insurance at a hospital — no stress, no confusion.',
  },
  {
    id: 'v3',
    title: 'Family Floater vs Individual Health Plan — Which is Better?',
    seriesId: 'choosing-plan',
    duration: '3:45',
    embedCode: yt('QdR4fPCHCuE', 'Family Floater vs Individual'),
    thumbnail: ytThumb('QdR4fPCHCuE'),
    tag: 'Planning',
    tagColor: 'bg-purple-100 text-purple-700',
    shareText: 'Confused between family floater and individual health plans? This video explains it simply.',
  },
  {
    id: 'v4',
    title: 'Critical Illness Insurance — What It Covers & Why You Need It',
    seriesId: 'critical-illness',
    duration: '4:22',
    embedCode: yt('W3bACkLCkVs', 'Critical Illness Insurance'),
    thumbnail: ytThumb('W3bACkLCkVs'),
    tag: 'Critical',
    tagColor: 'bg-amber-100 text-amber-700',
    shareText: 'Did you know a critical illness can wipe out your savings? Watch this before it\'s too late.',
  },
  {
    id: 'v5',
    title: 'What is a No-Claim Bonus & How to Maximise It',
    seriesId: 'wellness-benefits',
    duration: '2:58',
    embedCode: yt('XM_TtKZ-2eU', 'No Claim Bonus'),
    thumbnail: ytThumb('XM_TtKZ-2eU'),
    tag: 'Benefits',
    tagColor: 'bg-green-100 text-green-700',
    shareText: 'Stay healthy and get rewarded — here\'s how the No-Claim Bonus works on your health policy.',
  },
  {
    id: 'v6',
    title: 'Pre-existing Diseases & Waiting Periods — Know Your Rights',
    seriesId: 'health-basics',
    duration: '3:55',
    embedCode: yt('K8oiELnGF3E', 'Pre-existing Diseases'),
    thumbnail: ytThumb('K8oiELnGF3E'),
    tag: 'Must Know',
    tagColor: 'bg-red/10 text-red',
    shareText: 'If you have a pre-existing condition, watch this before buying health insurance.',
  },
]

// Policy briefings — IRDAI regulatory updates
export const policyVideos = [
  {
    id: 'policy-1',
    title: 'IRDAI Bima Sugam — What It Means for Health Insurance Buyers',
    date: 'May 2025',
    duration: '4:30',
    embedCode: yt('K8oiELnGF3E', 'IRDAI Bima Sugam'),
    tag: 'Regulatory Update',
    tagColor: 'bg-red/10 text-red',
    summary: 'The new Bima Sugam marketplace simplifies health insurance purchase and portability for all buyers.',
    thumbnail: ytThumb('K8oiELnGF3E'),
  },
  {
    id: 'policy-2',
    title: 'New Health Insurance Standardisation Norms — 20 Key Changes',
    date: 'April 2025',
    duration: '5:00',
    embedCode: yt('bRKJDKOOKm4', 'Health Insurance Standardisation'),
    tag: 'Policy Change',
    tagColor: 'bg-amber-100 text-amber-700',
    summary: 'IRDAI standardised over 20 health insurance terms. Here\'s what changed and how it benefits you as a policyholder.',
    thumbnail: ytThumb('bRKJDKOOKm4'),
  },
  {
    id: 'policy-3',
    title: 'Mental Health Coverage is Now Mandatory — Your Rights Explained',
    date: 'March 2025',
    duration: '3:50',
    embedCode: yt('QdR4fPCHCuE', 'Mental Health Coverage'),
    tag: 'New Rule',
    tagColor: 'bg-blue-100 text-blue-700',
    summary: 'All health insurers must now cover mental illness treatment under the Mental Healthcare Act. Know what you\'re entitled to.',
    thumbnail: ytThumb('QdR4fPCHCuE'),
  },
  {
    id: 'policy-4',
    title: 'PED Waiting Period Rules Revised — Is Your Policy Better Now?',
    date: 'February 2025',
    duration: '4:15',
    embedCode: yt('W3bACkLCkVs', 'PED Waiting Period'),
    tag: 'Compliance',
    tagColor: 'bg-blue-100 text-blue-700',
    summary: 'IRDAI revised pre-existing disease waiting periods from 4 years to 3 years. Find out if your policy just got better.',
    thumbnail: ytThumb('W3bACkLCkVs'),
  },
  {
    id: 'policy-5',
    title: 'Cashless Anywhere — New IRDAI Circular Explained',
    date: 'January 2025',
    duration: '3:30',
    embedCode: yt('XM_TtKZ-2eU', 'Cashless Anywhere'),
    tag: 'Regulatory Update',
    tagColor: 'bg-red/10 text-red',
    summary: 'Insurers must now offer cashless claims at any hospital within 1 hour. What this means for your health policy.',
    thumbnail: ytThumb('XM_TtKZ-2eU'),
  },
  {
    id: 'policy-6',
    title: 'Health Insurance Portability — Switch Without Losing Benefits',
    date: 'December 2024',
    duration: '4:00',
    embedCode: yt('K8oiELnGF3E', 'Health Insurance Portability'),
    tag: 'Policy Change',
    tagColor: 'bg-amber-100 text-amber-700',
    summary: 'IRDAI\'s portability rules now protect your waiting period credits when you switch insurers. Here\'s how to use them.',
    thumbnail: ytThumb('K8oiELnGF3E'),
  },
]

export const categories = ['All', 'Basics', 'Claims', 'Planning', 'Critical', 'Benefits', 'Must Know']
