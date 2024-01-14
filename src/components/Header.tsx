import logoImg from '@/assets/logo-cards-white.png'
import Image from 'next/image'
import Link from 'next/link'


export function Header() {
  return (
    <header className="flex h-16 items-center justify-between gap-2 bg-zinc-900 px-4">
      <Image src={logoImg} alt='Imagem de dados' width={100} />

      <nav>
        <ul className='flex items-center gap-2 text-zinc-50'>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/game">Game</Link></li>
        </ul>
      </nav>
    </header>
  )
}