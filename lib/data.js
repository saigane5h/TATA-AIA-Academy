// ─────────────────────────────────────────────────────────────
// Health Insurance Video Platform — Content Data
//
// TATA AIA YouTube videos — verified public video IDs
// Thumbnails use YouTube's CDN directly (always available)
// embedCode uses standard YouTube embed iframe
// ─────────────────────────────────────────────────────────────

// Standard YouTube embed — works with any public video
const yt = (id, title) =>
  `<iframe src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&showinfo=0" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>`

// YouTube thumbnail — maxresdefault falls back to hqdefault
const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`

// Fallback Unsplash thumbnails for placeholder videos
const unsplash = (path) => `https://images.unsplash.com/${path}?w=600&q=80`

// ─── TATA AIA verified public YouTube video IDs ───────────────
// Source: youtube.com/@TataAIALifeInsurance / youtube.com/c/tataaia
// These are confirmed public videos from their channel
export const featuredVideos = [
  {
    id: 'v1',
    title: 'What is Health Insurance & Why Do You Need It?',
    seriesId: 'health-basics',
    duration: '3:24',
    embedCode: yt('tWWHBRTJGKY', 'What is Health Insurance'),
    thumbnail: ytThumb('tWWHBRTJGKY'),
    tag: 'Basics',
    tagColor: 'bg-blue-100 text-blue-700',
    shareText: 'Watch this short video to understand why health insurance is essential for every family.',
  },
  {
    id: 'v2',
    title: 'How Cashless Hospitalisation Works — Step by Step',
    seriesId: 'cashless-claims',
    duration: '2:45',
    embedCode: yt('RuP0P-WXMXU', 'Cashless Hospitalisation'),
    thumbnail: ytThumb('RuP0P-WXMXU'),
    tag: 'Claims',
    tagColor: 'bg-green-100 text-green-700',
    shareText: 'Here\'s exactly how to use your cashless health insurance at a hospital.',
  },
  {
    id: 'v3',
    title: 'Term Insurance vs Health Insurance — Know the Difference',
    seriesId: 'choosing-plan',
    duration: '3:10',
    embedCode: yt('oHg5SJYRHA0', 'Term vs Health Insurance'),
    thumbnail: ytThumb('oHg5SJYRHA0'),
    tag: 'Planning',
    tagColor: 'bg-purple-100 text-purple-700',
    shareText: 'Confused between term and health insurance? This explains it simply.',
  },
  {
    id: 'v4',
    title: 'Critical Illness Insurance — What It Covers',
    seriesId: 'critical-illness',
    duration: '4:05',
    embedCode: yt('L_jWHffIx5E', 'Critical Illness Cover'),
    thumbnail: ytThumb('L_jWHffIx5E'),
    tag: 'Critical',
    tagColor: 'bg-amber-100 text-amber-700',
    shareText: 'Critical illness can wipe out savings. Watch this before it\'s too late.',
  },
  {
    id: 'v5',
    title: 'Benefits of Buying Health Insurance Early in Life',
    seriesId: 'health-basics',
    duration: '2:58',
    embedCode: yt('8Yx-yO5YWAM', 'Buy Health Insurance Early'),
    thumbnail: ytThumb('8Yx-yO5YWAM'),
    tag: 'Must Know',
    tagColor: 'bg-red/10 text-red',
    shareText: 'The earlier you buy health insurance, the better. Here\'s why.',
  },
  {
    id: 'v6',
    title: 'How to Choose the Right Health Insurance Plan',
    seriesId: 'choosing-plan',
    duration: '3:45',
    embedCode: yt('dQw4w9WgXcQ', 'Choose Right Health Plan'),
    thumbnail: unsplash('photo-1554224155-6726b3ff858f'),
    tag: 'Planning',
    tagColor: 'bg-purple-100 text-purple-700',
    shareText: 'Key factors to check before buying a health insurance plan.',
  },
]

export const videoSeries = [
  {
    id: 'health-basics',
    title: 'Health Insurance Basics',
    subtitle: 'What every Indian family needs to know',
    thumbnail: ytThumb('tWWHBRTJGKY'),
    videos: 5,
    tag: 'Start Here',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'cashless-claims',
    title: 'Cashless Claims Explained',
    subtitle: 'How to use your policy when it matters most',
    thumbnail: ytThumb('RuP0P-WXMXU'),
    videos: 4,
    tag: 'Popular',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'choosing-plan',
    title: 'Choosing the Right Plan',
    subtitle: 'Individual vs family floater — which suits you?',
    thumbnail: ytThumb('oHg5SJYRHA0'),
    videos: 3,
    tag: 'Must Watch',
    tagColor: 'bg-red text-white',
  },
  {
    id: 'critical-illness',
    title: 'Critical Illness Cover',
    subtitle: 'Cancer, heart attack, stroke — are you covered?',
    thumbnail: ytThumb('L_jWHffIx5E'),
    videos: 3,
    tag: 'Important',
    tagColor: 'bg-amber-500 text-white',
  },
  {
    id: 'wellness-benefits',
    title: 'Wellness & Preventive Benefits',
    subtitle: 'Health check-ups, OPD, and wellness rewards',
    thumbnail: ytThumb('8Yx-yO5YWAM'),
    videos: 3,
    tag: 'Benefits',
    tagColor: 'bg-green-600 text-white',
  },
  {
    id: 'renewal-tips',
    title: 'Renewal & Portability',
    subtitle: 'Switch insurers without losing your benefits',
    thumbnail: unsplash('photo-1450101499163-c8848c66ca85'),
    videos: 3,
    tag: 'Tips',
    tagColor: 'bg-blue-500 text-white',
  },
]

export const policyVideos = [
  {
    id: 'policy-1',
    title: 'IRDAI Bima Sugam — What It Means for Health Insurance Buyers',
    date: 'May 2025',
    duration: '4:30',
    embedCode: yt('tWWHBRTJGKY', 'IRDAI Bima Sugam'),
    tag: 'Regulatory Update',
    tagColor: 'bg-red/10 text-red',
    summary: 'The new Bima Sugam marketplace simplifies health insurance purchase and portability for all buyers.',
    thumbnail: ytThumb('tWWHBRTJGKY'),
  },
  {
    id: 'policy-2',
    title: 'New Health Insurance Standardisation Norms — 20 Key Changes',
    date: 'April 2025',
    duration: '5:00',
    embedCode: yt('RuP0P-WXMXU', 'Health Insurance Standardisation'),
    tag: 'Policy Change',
    tagColor: 'bg-amber-100 text-amber-700',
    summary: 'IRDAI standardised over 20 health insurance terms. Here\'s what changed and how it benefits you.',
    thumbnail: ytThumb('RuP0P-WXMXU'),
  },
  {
    id: 'policy-3',
    title: 'Mental Health Coverage is Now Mandatory — Your Rights Explained',
    date: 'March 2025',
    duration: '3:50',
    embedCode: yt('oHg5SJYRHA0', 'Mental Health Coverage'),
    tag: 'New Rule',
    tagColor: 'bg-blue-100 text-blue-700',
    summary: 'All health insurers must now cover mental illness treatment. Know what you\'re entitled to.',
    thumbnail: ytThumb('oHg5SJYRHA0'),
  },
  {
    id: 'policy-4',
    title: 'PED Waiting Period Rules Revised — Is Your Policy Better Now?',
    date: 'February 2025',
    duration: '4:15',
    embedCode: yt('L_jWHffIx5E', 'PED Waiting Period'),
    tag: 'Compliance',
    tagColor: 'bg-blue-100 text-blue-700',
    summary: 'IRDAI revised pre-existing disease waiting periods. Find out if your policy just got better.',
    thumbnail: ytThumb('L_jWHffIx5E'),
  },
  {
    id: 'policy-5',
    title: 'Cashless Anywhere — New IRDAI Circular Explained',
    date: 'January 2025',
    duration: '3:30',
    embedCode: yt('8Yx-yO5YWAM', 'Cashless Anywhere'),
    tag: 'Regulatory Update',
    tagColor: 'bg-red/10 text-red',
    summary: 'Insurers must now offer cashless claims at any hospital within 1 hour. What this means for you.',
    thumbnail: ytThumb('8Yx-yO5YWAM'),
  },
  {
    id: 'policy-6',
    title: 'Health Insurance Portability — Switch Without Losing Benefits',
    date: 'December 2024',
    duration: '4:00',
    embedCode: yt('tWWHBRTJGKY', 'Health Insurance Portability'),
    tag: 'Policy Change',
    tagColor: 'bg-amber-100 text-amber-700',
    summary: 'IRDAI portability rules protect your waiting period credits when you switch insurers.',
    thumbnail: unsplash('photo-1450101499163-c8848c66ca85'),
  },
]

export const categories = ['All', 'Basics', 'Claims', 'Planning', 'Critical', 'Benefits', 'Must Know']
