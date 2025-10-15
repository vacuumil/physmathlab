// app/(home)/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Интерактивная лаборатория по <span className="text-blue-600">физике</span> и <span className="text-green-600">математике</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Визуализируй сложные концепции, готовься к ЕГЭ и ОГЭ через интерактивные симуляции и эксперименты.
          </p>
          <div className="space-x-4">
            <Link href="/physics" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition inline-block">
              Начать бесплатно
            </Link>
            <Link href="/teachers" className="border border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block">
              Я репетитор
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему PhysMathLab?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Интерактивные симуляции</h3>
              <p className="text-gray-600">Меняй параметры в реальном времени и наблюдай за результатами</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Подготовка к экзаменам</h3>
              <p className="text-gray-600">Специальные материалы для подготовки к ОГЭ и ЕГЭ</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Для репетиторов</h3>
              <p className="text-gray-600">Готовые инструменты для визуализации уроков</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl text-gray-600 mb-8">Присоединяйтесь к тысячам студентов и преподавателей</p>
          <Link href="/physics" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition inline-block">
            Исследовать симуляции
          </Link>
        </div>
      </section>
    </div>
  );
}