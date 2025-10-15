// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          PhysMathLab
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/physics" className="text-gray-700 hover:text-blue-600">Физика</Link></li>
            <li><Link href="/math" className="text-gray-700 hover:text-blue-600">Математика</Link></li>
            <li><Link href="/teachers" className="text-gray-700 hover:text-blue-600">Для репетиторов</Link></li>
            <li><Link href="/blog" className="text-gray-700 hover:text-blue-600">Блог</Link></li>
          </ul>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Войти
        </button>
      </div>
    </header>
  );
}