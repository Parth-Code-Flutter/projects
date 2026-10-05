import {
  Bell,
  CalendarCheck,
  Check,
  CreditCard,
  Droplets,
  Eye,
  FileText,
  Heart,
  House,
  MapPin,
  MessageCircle,
  Search,
  Send,
  ShoppingBag,
  Tractor,
  User,
  Users,
  Wallet,
  WifiOff,
} from 'lucide-react'

const I = (Icon) => <Icon size="1em" strokeWidth={2} />

function Tabs({ icons }) {
  return (
    <div className="ph-tabs">
      {icons.map((Icon, i) => (
        <span key={i} className={i === 0 ? 'is-on' : undefined}>
          {I(Icon)}
        </span>
      ))}
    </div>
  )
}

function WaterScreen() {
  return (
    <>
      <div className="ph-top">
        <span className="ph-brand">{I(Droplets)} Nama Water</span>
        {I(Bell)}
      </div>
      <div className="ph-card ph-card--accent">
        <small>Amount due</small>
        <strong>OMR 12.450</strong>
        <span className="ph-btn">Pay now</span>
      </div>
      <p className="ph-label">My accounts</p>
      {[
        ['Home', '#10234', 'Paid'],
        ['Office', '#88412', 'Due'],
        ['Farm', '#55107', 'Paid'],
      ].map(([name, no, status]) => (
        <div className="ph-row" key={no}>
          <span className="ph-ico">{I(Droplets)}</span>
          <span className="ph-txt">
            {name}
            <i>{no}</i>
          </span>
          <span className={`ph-pill ${status === 'Due' ? 'ph-pill--warn' : ''}`}>{status}</span>
        </div>
      ))}
      <Tabs icons={[House, FileText, CreditCard, User]} />
    </>
  )
}

function InspectScreen() {
  return (
    <>
      <div className="ph-top">
        <span className="ph-brand">Inspection #2041</span>
        <span className="ph-pill ph-pill--warn">{I(WifiOff)} Offline</span>
      </div>
      <div className="ph-map">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="18,12 70,8 86,38 52,52 14,40" />
        </svg>
        <span className="ph-pin">{I(MapPin)}</span>
      </div>
      <p className="ph-label">Checklist · Food safety</p>
      {[
        ['Fire exits clear', true],
        ['Trade license displayed', true],
        ['Storage temperature', false],
        ['Photo evidence (3)', true],
      ].map(([item, done]) => (
        <div className="ph-check" key={item}>
          <span className={`ph-box ${done ? 'is-done' : ''}`}>{done && I(Check)}</span>
          {item}
        </div>
      ))}
      <span className="ph-btn ph-btn--block">Queue submission</span>
      <small className="ph-foot">3 records waiting to sync</small>
    </>
  )
}

function LiveScreen() {
  return (
    <div className="ph-video">
      <div className="ph-top ph-top--overlay">
        <span className="ph-live">LIVE</span>
        <span className="ph-viewers">
          {I(Eye)} 1.2K
        </span>
      </div>
      <div className="ph-avatar" />
      <div className="ph-hearts" aria-hidden="true">
        {I(Heart)}
        {I(Heart)}
        {I(Heart)}
      </div>
      <div className="ph-chat">
        <p>
          <b>aarav</b> this is amazing
        </p>
        <p>
          <b>mira</b> hello from Dubai!
        </p>
        <p>
          <b>kabir</b> sent a gift
        </p>
      </div>
      <div className="ph-input">
        Say something… <span>{I(Send)}</span>
      </div>
    </div>
  )
}

function ShopScreen() {
  return (
    <>
      <div className="ph-search">
        {I(Search)} Search products
      </div>
      <div className="ph-card ph-card--accent ph-card--row">
        <span>
          <small>Group deal</small>
          <strong>Buy 3, save 40%</strong>
        </span>
        {I(ShoppingBag)}
      </div>
      <div className="ph-grid">
        {['₹499', '₹1,299', '₹799', '₹349'].map((price, i) => (
          <div className="ph-product" key={price}>
            <span className="ph-thumb" style={{ '--h': i * 70 }} />
            <i />
            <b>{price}</b>
          </div>
        ))}
      </div>
      <div className="ph-row ph-row--wallet">
        <span className="ph-ico">{I(Wallet)}</span>
        <span className="ph-txt">
          Wallet<i>Available balance</i>
        </span>
        <b>₹1,250</b>
      </div>
      <Tabs icons={[House, Search, ShoppingBag, User]} />
    </>
  )
}

function TractorScreen() {
  return (
    <>
      <div className="ph-top">
        <span className="ph-brand">{I(Tractor)} Tractor Seva</span>
        <span className="ph-langs">
          <b>मरा</b>
          <b className="is-on">हिं</b>
          <b>EN</b>
        </span>
      </div>
      <div className="ph-card ph-card--accent">
        <small>Next service</small>
        <strong>Mahindra 575 DI</strong>
        <span className="ph-btn">Book service</span>
      </div>
      <p className="ph-label">Services</p>
      {[
        ['Oil change', '₹499'],
        ['Full service', '₹1,999'],
        ['Tyre repair', '₹299'],
      ].map(([name, price]) => (
        <div className="ph-row" key={name}>
          <span className="ph-ico">{I(Tractor)}</span>
          <span className="ph-txt">
            {name}
            <i>Nearby workshop</i>
          </span>
          <b>{price}</b>
        </div>
      ))}
      <span className="ph-btn ph-btn--block">Pay with CCAvenue</span>
    </>
  )
}

function OrgScreen() {
  return (
    <>
      <div className="ph-top">
        <span className="ph-brand">{I(Users)} Team space</span>
        {I(Bell)}
      </div>
      <div className="ph-card ph-card--accent ph-card--row">
        <span>
          <small>Today · 4:30 PM</small>
          <strong>Sprint review</strong>
        </span>
        {I(CalendarCheck)}
      </div>
      <div className="ph-chips">
        <span className="ph-pill">Leave approved</span>
        <span className="ph-pill ph-pill--warn">2 goals due</span>
      </div>
      <p className="ph-label">{I(MessageCircle)} Design team</p>
      <div className="ph-bubbles">
        <p className="in">Can we move the review to 5?</p>
        <p className="out">Sure, updated the meeting</p>
        <p className="in">Thanks! Sharing the deck</p>
        <p className="in ph-file">{I(FileText)} roadmap-q3.pdf</p>
      </div>
      <div className="ph-input">
        Message… <span>{I(Send)}</span>
      </div>
    </>
  )
}

const screens = {
  water: WaterScreen,
  inspect: InspectScreen,
  live: LiveScreen,
  shop: ShopScreen,
  tractor: TractorScreen,
  org: OrgScreen,
}

export default function Phone({ screen, accent, className = '', style }) {
  const Screen = screens[screen] ?? WaterScreen
  return (
    <div
      className={`phone ${className}`}
      style={{ '--a1': accent[0], '--a2': accent[1], ...style }}
      aria-hidden="true"
    >
      <div className="phone-island" />
      <div className="phone-screen">
        <div className="ph-status">
          <span>9:41</span>
          <span className="ph-signal">
            <i />
            <i />
            <i />
          </span>
        </div>
        <Screen />
      </div>
    </div>
  )
}
