// app/physics/mechanics/projectile-motion/page.tsx
import Link from 'next/link';
import ProjectileMotion from '../../../../components/simulations/ProjectileMotion';

export default function ProjectileMotionPage() {
  return (
    <div className="min-h-screen gradient-bg science-pattern py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-blue-600">Главная</Link> / 
              <Link href="/physics" className="hover:text-blue-600"> Физика</Link> / 
              <Link href="/physics/mechanics" className="hover:text-blue-600"> Механика</Link> / 
              <span className="text-gray-900"> Движение под углом</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Движение тела под углом к горизонту
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Исследуйте баллистическую траекторию, изменяя начальную скорость, угол броска и гравитацию. 
              Наблюдайте за изменением дальности полета и максимальной высоты.
            </p>
          </div>

          <ProjectileMotion />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">🎯 Цель эксперимента</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Понять зависимость траектории от начальных параметров</li>
                <li>• Наблюдать оптимальный угол для максимальной дальности (45°)</li>
                <li>• Изучить влияние гравитации на движение тела</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">💡 Советы для исследования</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Попробуйте угол 45° для максимальной дальности</li>
                <li>• Сравните траектории при высокой и низкой гравитации</li>
                <li>• Наблюдайте за изменением времени полета</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}