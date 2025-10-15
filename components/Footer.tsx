// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhysMathLab</h3>
            <p className="text-gray-400">
              Интерактивная лаборатория по физике и математике для школьников и репетиторов.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li><Link href="/physics" className="text-gray-400 hover:text-white">Физика</Link></li>
              <li><Link href="/math" className="text-gray-400 hover:text-white">Математика</Link></li>
              <li><Link href="/teachers" className="text-gray-400 hover:text-white">Для репетиторов</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@physmathlab.ru" className="text-gray-400 hover:text-white">support@physmathlab.ru</a></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">О проекте</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Соцсети</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">VK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 PhysMathLab. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}