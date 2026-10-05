export const profile = {
  name: 'Parth Mandavia',
  role: 'Flutter Developer',
  location: 'Ahmedabad, India',
  email: 'parthmapar009@gmail.com',
  phone: '+917048321663',
  phoneDisplay: '+91 70483 21663',
  github: 'https://github.com/Parth-Code-Flutter',
}

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// Add a category here (e.g. { id: 'react', label: 'React.js', color: '#61dafb' }) and set
// `category` on a project to show a new filter tab automatically.
export const categories = [{ id: 'flutter', label: 'Flutter', color: '#54c5f8' }]

export const stats = [
  { value: 100, suffix: 'K+', label: 'Downloads on one app' },
  { value: 2, suffix: '', label: 'Government clients · UAE & Oman' },
  { value: 20, suffix: '+', label: 'Apps delivered' },
  { value: 5, suffix: '+', label: 'Years building with Flutter' },
]

export const sectors = ['Government', 'Utilities', 'Inspections & GIS', 'Social & Live Streaming', 'E-commerce', 'Agritech', 'Community', 'HR & Teams', 'Payments']

export const projects = [
  {
    id: 'nama-water',
    category: 'flutter',
    title: 'Nama Water',
    client: 'Government of Oman',
    sector: 'Public utility',
    metric: { value: '100K+', label: 'Play Store downloads' },
    summary:
      'The official water utility app for customers across Oman — accounts, bills, payments, complaints and service requests in one place.',
    built: [
      'Bill search, online payments, account statements and full payment history.',
      'Multiple water accounts per user with API-driven account validation.',
      'Complaint and service-request flows connected to the utility backend.',
      'Validated payment flows end to end, shipped production fixes and Android / iOS releases.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Payment Gateway'],
    platforms: ['Android', 'iOS'],
    links: [
      { label: 'Google Play', store: 'play', href: 'https://play.google.com/store/apps/details?id=com.diamwaterproject' },
      { label: 'App Store', store: 'apple', href: 'https://apps.apple.com/us/app/nama-water/id1504898635' },
    ],
    icon: 'apps/nama-icon.webp',
    shots: [
      { src: 'apps/nama-portal.webp', alt: 'Nama Water services portal home screen' },
      { src: 'apps/nama-dashboard.webp', alt: 'Nama Water account dashboard with credit and consumption chart' },
      { src: 'apps/nama-leak.webp', alt: 'Nama Water report a water leak screen with map' },
    ],
    accent: ['#36d1dc', '#5b86e5'],
  },
  {
    id: 'qobo1live',
    category: 'flutter',
    title: 'Qobo1live',
    client: 'Live streaming & social startup',
    sector: 'Live streaming & social',
    metric: { value: 'NEW', label: 'Launched on Google Play · 2026' },
    summary:
      'A live social app where people go live, join voice and video rooms, battle other hosts in PK matches and meet new people through calls and chat.',
    built: [
      'Live streams, group voice / video rooms and timed PK battles between hosts, powered by ZegoCloud.',
      '1:1 voice and video calls with native incoming-call screens and screenshot protection during calls.',
      'Realtime gifting, chat and notifications over Socket.IO and Firebase, with animated SVGA gift effects.',
      'Coin wallet with Razorpay top-ups, virtual mall, backpack items, medals, families and daily task rankings.',
      'Google & Facebook sign-in, and Play release work including Android 16 KB page-size compliance.',
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'ZegoCloud', 'Socket.IO', 'Firebase', 'Razorpay', 'CallKit'],
    platforms: ['Android'],
    links: [{ label: 'Google Play', store: 'play', href: 'https://play.google.com/store/apps/details?id=com.qobo1live.live' }],
    icon: 'apps/qobo-icon.webp',
    shots: [
      { src: 'apps/qobo-family.webp', alt: 'Qobo1live family circle screen with members and rankings' },
      { src: 'apps/qobo-live.webp', alt: 'Qobo1live home with live rooms and a live stream in progress' },
      { src: 'apps/qobo-chat.webp', alt: 'Qobo1live group chat with gifts' },
    ],
    accent: ['#ff4fa3', '#8b5cf6'],
  },
  {
    id: 'smart-inspection',
    category: 'flutter',
    title: 'Smart Inspection',
    client: 'Government of Ras Al Khaimah, UAE',
    sector: 'Government inspections',
    metric: { value: '3', label: 'PHSD · Urban · Land (RERA)' },
    summary:
      'Field inspection platform used by inspectors across three government departments — PHSD, Urban and Land (RERA) — built to keep working without a network connection.',
    built: [
      'One app handling three departments — PHSD, Urban and Land (RERA) — each with its own inspection types, checklists and rules.',
      'Dynamic, department-specific checklists with violation recording and photo evidence capture.',
      'Offline-first storage with Isar: inspections are cached, submissions queued and synced to REST APIs when back online.',
      'ArcGIS patrolling — map markers, boundary selection and location-based inspections.',
      'Build flavors for each environment, production fixes, store releases and contributions to the React.js web portal.',
    ],
    tech: ['Flutter', 'Dart', 'BLoC', 'GetX', 'Isar', 'ArcGIS', 'REST APIs', 'React.js'],
    platforms: ['Android', 'iOS', 'Web'],
    links: [],
    note: 'Client private · government',
    glyph: 'inspect',
    accent: ['#ff6b6b', '#7c5cff'],
  },
  {
    id: 'five',
    category: 'flutter',
    title: 'FIVE',
    client: 'Social media startup',
    sector: 'Social & live streaming',
    metric: { value: 'LIVE', label: 'Streaming & realtime chat' },
    summary: 'A social app where people share media, go live and talk in real time with friends and groups.',
    built: [
      'Media sharing feed and live-streaming experience built with Flutter and Firebase.',
      'One-to-one and group conversations with media attachments.',
      'Push notifications for messages, lives and interactions; local caching with Hive.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Hive', 'Live Streaming', 'Chat'],
    platforms: ['iOS'],
    links: [],
    note: 'Client private',
    glyph: 'live',
    accent: ['#c471f5', '#fa71cd'],
  },
  {
    id: '2waays',
    category: 'flutter',
    title: '2Waays',
    client: 'E-commerce marketplace',
    sector: 'E-commerce & group deals',
    metric: { value: '2-sided', label: 'Customer + merchant flows' },
    summary: 'A marketplace for products and group deals where customers buy together and chat directly with merchants.',
    built: [
      'Customer and merchant journeys: product listings, group deals and checkout.',
      'In-app wallet operations and transaction flows.',
      'Merchant conversations built into the shopping experience.',
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'Firebase', 'Hive'],
    platforms: ['Android'],
    links: [],
    note: 'Client private',
    glyph: 'shop',
    accent: ['#11998e', '#38ef7d'],
  },
  {
    id: 'tractor-seva',
    category: 'flutter',
    title: 'Tractor Seva',
    client: 'Agritech service network · India',
    sector: 'Agritech',
    metric: { value: '3', label: 'Languages · 2 apps' },
    summary:
      'Tractor service booking for farmers, plus a companion app for workshops — localized for rural users in Marathi, Hindi and English.',
    built: [
      'Customer app for booking and paying for tractor services.',
      'Workshop app with role-based workflows for owners and members.',
      'Full localization in Marathi, Hindi and English.',
      'CCAvenue payment integration for customer transactions.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'CCAvenue', 'Localization'],
    platforms: ['Android'],
    links: [
      { label: 'Customer App', store: 'play', href: 'https://play.google.com/store/apps/details?id=com.tractorseva.customer' },
      { label: 'Workshop App', store: 'play', href: 'https://play.google.com/store/apps/details?id=com.tractorseva.workshop' },
    ],
    icon: 'apps/tractor-icon.webp',
    shots: [
      { src: 'apps/tractor-workshop.webp', alt: 'Tractor Seva workshop app dashboard with bookings and earnings' },
      { src: 'apps/tractor-services.webp', alt: 'Tractor Seva customer app home with service offerings' },
      { src: 'apps/tractor-packages.webp', alt: 'Tractor Seva service packages and kits' },
    ],
    accent: ['#ff512f', '#f09819'],
  },
  {
    id: 'aligned-rewards',
    category: 'flutter',
    title: 'Aligned Rewards',
    client: 'Organization management platform',
    sector: 'HR & team productivity',
    metric: { value: '5+', label: 'Business modules' },
    summary: 'An all-in-one workspace app for teams — meetings, leave, projects, goals and departments, with built-in messaging.',
    built: [
      'Modules for meetings, leave management, projects, goals and departments.',
      'Role-based access so each user sees the right tools and data.',
      'Individual and group chat with media sharing and push notifications.',
      'Delivered features independently across multiple modules.',
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    links: [],
    note: 'Client private',
    glyph: 'org',
    accent: ['#f7971e', '#ffd200'],
  },
  {
    id: 'yuvasangh',
    category: 'flutter',
    title: 'Yuvasangh',
    client: 'All-India community organisation',
    sector: 'Community & membership',
    metric: { value: '1K+', label: 'Downloads · 5.0★ rating' },
    summary:
      'A member directory for a large community organisation — members and volunteers find each other, follow their committees and get updates from admins.',
    built: [
      'Searchable member and volunteer directory with filters for layer, designation, committee, region, local samaj and council.',
      'Committee information so members know who is responsible for what.',
      'Admin broadcast messages to keep every committee up to date.',
      'Downloads section for shared documents and circulars.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs', 'Search & filters'],
    platforms: ['Android'],
    links: [{ label: 'Google Play', store: 'play', href: 'https://play.google.com/store/apps/details?id=com.yuvasangh.yuvasangh' }],
    icon: 'apps/yuva-icon.webp',
    accent: ['#3b6cf6', '#f7971e'],
  },
]

export const experience = [
  {
    period: 'Jun 2025 — Present',
    role: 'Software Engineer · Flutter',
    mode: 'Remote',
    focus: 'Government inspection apps · UAE',
    points: [
      'Flutter inspection workflows for three government departments (PHSD, Urban and Land / RERA): dynamic checklists, violations and evidence capture.',
      'Offline-first sync with Isar, ArcGIS patrolling, build flavors and Android / iOS releases.',
    ],
  },
  {
    period: 'Apr 2024 — Apr 2025',
    role: 'Flutter Developer',
    mode: 'Remote',
    focus: 'Utility & customer-service apps · International clients',
    points: [
      'Delivered Flutter features on Android and iOS for utility and customer-service applications.',
      'Integrated REST APIs, payment modules and Firebase; coordinated release builds and store deployments.',
    ],
  },
  {
    period: 'Jan 2023 — Jan 2024',
    role: 'Senior Flutter Developer',
    mode: 'On-site · Ahmedabad',
    focus: '7+ client apps',
    points: [
      'Delivered 7+ Flutter apps using reusable architecture, state management and API integrations.',
      'Added real-time features and resolved production defects across multiple apps.',
    ],
  },
  {
    period: 'Jan 2021 — Jan 2023',
    role: 'Software Engineer · Flutter',
    mode: 'Remote',
    focus: 'Custom business apps',
    points: [
      'Built Flutter apps with third-party APIs, role-based access and custom business workflows.',
      'Maintained and optimized existing apps while extending features.',
    ],
  },
]

export const skills = [
  {
    icon: 'layers',
    title: 'Architecture & state',
    desc: 'Scalable, testable app structure that stays clean as features grow.',
    items: ['Flutter', 'Dart', 'BLoC', 'GetX', 'Clean architecture', 'Build flavors'],
  },
  {
    icon: 'database',
    title: 'Offline-first data',
    desc: 'Apps that keep working in the field and sync when the network returns.',
    items: ['Isar', 'Hive', 'Firestore', 'Sync queues', 'Caching'],
  },
  {
    icon: 'map',
    title: 'Maps & realtime',
    desc: 'Location-aware workflows, live streaming and instant messaging.',
    items: ['ArcGIS', 'Google Maps', 'WebSockets', 'ZegoCloud', 'Live streaming'],
  },
  {
    icon: 'plug',
    title: 'Integrations',
    desc: 'Payments, notifications, auth and localization wired into real backends.',
    items: ['REST APIs', 'Firebase', 'Payment gateways', 'CCAvenue', 'Push notifications', 'Social login', 'Localization'],
  },
  {
    icon: 'rocket',
    title: 'Release & delivery',
    desc: 'From build to store listing — and the production fixes after launch.',
    items: ['Play Store', 'App Store Connect', 'Git', 'GitHub', 'Production support'],
  },
]

const gh = (repo) => `https://github.com/Parth-Code-Flutter/${repo}`

export const builds = [
  { name: 'invoice_generator', desc: 'Create and export invoices and business documents.', tags: ['PDF', 'Business'], href: gh('invoice_generator') },
  { name: 'doctors_clinic', desc: 'Appointment and clinic workflows for healthcare.', tags: ['Healthcare', 'UI'], href: gh('doctors_clinic') },
  { name: 'sip_reminder', desc: 'Reminders and tracking for investment plans.', tags: ['Finance', 'Reminders'], href: gh('sip_reminder') },
]
