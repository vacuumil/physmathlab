// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-green-700 transition-all">
                PhysMathLab
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">интерактивная лаборатория</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/physics" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Физика
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/math" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
            >
              Математика
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/teachers" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
            >
              Для репетиторов
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
            >
              Блог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link 
  href="/physics/mechanics/projectile-motion" 
  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
>
  🚀 Демо-симуляция
</Link>
          </nav>

          {/* Auth Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-outline text-sm">
              Войти
            </button>
            <button className="btn-primary text-sm">
              Регистрация
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/physics" className="text-gray-700 hover:text-blue-600 font-medium py-2">Физика</Link>
              <Link href="/math" className="text-gray-700 hover:text-green-600 font-medium py-2">Математика</Link>
              <Link href="/teachers" className="text-gray-700 hover:text-purple-600 font-medium py-2">Для репетиторов</Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium py-2">Блог</Link>
              <div className="flex space-x-2 pt-2">
                <button className="btn-outline text-sm flex-1">Войти</button>
                <button className="btn-primary text-sm flex-1">Регистрация</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}