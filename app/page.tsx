import HeaderSection from './components/header'
import HeroSection from './components/hero'
import GridWithImageSection  from './components/grid-with-image'
import GridWithIconSection from './components/grid-with-icon'
import Stats from './components/stats'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Footer from './components/footer'

const products = [
  {
    id: 1,
    name: 'Kangkung',
    href: '#',
    price: 'Rp. 4.800',
    imageSrc: 'img/kangkung.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Selada Air',
    href: '#',
    price: 'Rp. 3.500',
    imageSrc: 'img/leaf.webp',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Pakcoy',
    href: '#',
    price: 'Rp. 6.500',
    imageSrc: 'img/pakcoy.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Baby Tomato',
    href: '#',
    price: 'Rp. 8.900',
    imageSrc: 'img/strawberry.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  // More products...
]

const features = [
  {
    name: 'Segar dan Sehat',
    description:
      'Tanaman hidroponik tidak terpapar pestisida dan bahan kimia lainnya sehingga dapat lebih segar dan sehat',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Ramah Lingkungan',
    description:
      'Hidroponik menggunakan lebih sedikit air dan nutrisi dibandingkan dengan metode bercocok tanam tradisional.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tahan Lama',
    description:
      'Kadar air dalam tanaman hidroponik lebih terjaga, sehingga lebih segar dan tahan lama dalam penyimpanan.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Kualitas Tinggi',
    description:
      'Nutrisi yang terkontrol dalam hidroponik menghasilkan tanaman dengan rasa yang lebih optimal dan kaya rasa.',
    icon: FingerPrintIcon,
  },
]

const stats = [
  { id: 1, name: 'Transaksi Bulan Rata rata', value: '500 Juta' },
  { id: 2, name: 'Pelanggan Bulanan', value: '> 3.000' },
  { id: 3, name: 'Pertumbuhan Penjualan', value: '10%' },
]

const benefits = [
  {
    name: 'Berkualitas Tinggi',
    description:
      'Semua produk kami dipilih dengan cermat dan melalui proses kontrol kualitas yang ketat untuk memastikan keandalan dan keamanannya.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Harga Terjangkau',
    description:
      'Kami menawarkan produk hidroponik dengan harga yang kompetitif tanpa mengorbankan kualitas.',
    icon: LockClosedIcon,
  },
  {
    name: 'Ramah dan Berpengalaman',
    description:
      'Terdiri dari staf yang ramah, berpengetahuan, dan berpengalaman untuk membantu Anda dalam memilih produk yang tepat.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Kemudahan Belanja',
    description:
      'Menawarkan berbagai pilihan pembayaran yang mudah dan aman dengan layanan pengiriman yang cepat dan terpercaya.',
    icon: FingerPrintIcon,
  },
]

const teams = [
  {
    id: 1,
    name: 'Co-Founder / CEO',
    href: '#',
    price: 'Jane Doe',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&auto=format&fit=facearea&facepad=2&w=400&h=400&&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Co-Founder / CTO',
    href: '#',
    price: 'Tim Cook',
    imageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'COO',
    href: '#',
    price: 'Andrew Ramsdale',
    imageSrc: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&auto=format&fit=facearea&facepad=2&w=400&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'CFO',
    href: '#',
    price: 'Liana Webster',
    imageSrc: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&auto=format&fit=facearea&facepad=2&w=400&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  // More products...
]


export default function LandingPage() {
  return (
    <div className="bg-white">
      <HeaderSection />
      <HeroSection />
      <GridWithImageSection items={products} />
      <GridWithIconSection items={features} />
      <Stats stats={stats} />
      <GridWithIconSection items={benefits} />
      <GridWithImageSection items={teams} />
      <Footer />
    </div>
  )
}




