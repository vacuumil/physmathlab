// app/physics/mechanics/page.tsx
import Link from 'next/link';

export default function MechanicsPage() {
  return (
    <div className="min-h-screen gradient-bg science-pattern py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-blue-600">Главная</Link> / 
              <Link href="/physics" className="hover:text-blue-600"> Физика</Link> / 
              <span className="text-gray-900"> Механика</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Механика</h1>
            <p className="text-xl text-gray-600">
              Изучайте движение тел и взаимодействие между ними через интерактивные симуляции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/physics/mechanics/projectile-motion" 
              className="card p-6 hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Движение под углом к горизонту
                </h3>
                <p className="text-gray-600">
                  Исследуйте баллистическую траекторию тела
                </p>
              </div>
            </Link>

            <div className="card p-6 opacity-50">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Скоро появятся
                </h3>
                <p className="text-gray-600">
                  Новые симуляции в разработке
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}