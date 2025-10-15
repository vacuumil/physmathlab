// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  PhysMathLab
                </h3>
                <p className="text-gray-400 text-sm">интерактивная лаборатория</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Современная образовательная платформа с интерактивными симуляциями по физике и математике для школьников и преподавателей.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Разделы</h4>
            <ul className="space-y-3">
              {[
                { href: '/physics', label: 'Физика', emoji: '⚡' },
                { href: '/math', label: 'Математика', emoji: '📊' },
                { href: '/teachers', label: 'Для репетиторов', emoji: '👨‍🏫' },
                { href: '/blog', label: 'Блог', emoji: '📝' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link.emoji}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Поддержка</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@physmathlab.ru" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>📧</span>
                  <span>support@physmathlab.ru</span>
                </a>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span>ℹ️</span>
                  <span>О проекте</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Политика конфиденциальности</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Соцсети</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { name: 'VK', emoji: '👥', href: '#' },
                { name: 'Telegram', emoji: '📢', href: '#' },
                { name: 'YouTube', emoji: '🎥', href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  title={social.name}
                >
                  <span className="text-lg">{social.emoji}</span>
                </a>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">Следите за обновлениями</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PhysMathLab. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Сделано с ❤️ для образования</span>
          </div>
        </div>
      </div>
    </footer>
  );
}