// app/(home)/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="gradient-bg science-pattern min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🚀</span>
              <span>Старт проекта состоялся!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Изучай{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                физику
              </span>{' '}
              и{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                математику
              </span>{' '}
              по-новому
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Интерактивные симуляции, визуализация сложных концептов и подготовка к экзаменам 
              через практические эксперименты
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/physics" className="btn-primary text-lg px-8 py-4">
                🎮 Начать экспериментировать
              </Link>
              <Link href="/teachers" className="btn-secondary text-lg px-8 py-4">
                👨‍🏫 Я репетитор
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 text-sm">симуляций</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600 text-sm">бесплатно</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">7-11</div>
                <div className="text-gray-600 text-sm">классы</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">ЕГЭ/ОГЭ</div>
                <div className="text-gray-600 text-sm">подготовка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают <span className="text-blue-600">PhysMathLab</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современный подход к обучению, основанный на визуализации и интерактивности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔬',
                title: 'Интерактивные симуляции',
                description: 'Меняй параметры в реальном времени и наблюдай за результатами экспериментов',
                color: 'blue'
              },
              {
                icon: '🎯',
                title: 'Подготовка к экзаменам',
                description: 'Специальные материалы и симуляции для эффективной подготовки к ОГЭ и ЕГЭ',
                color: 'green'
              },
              {
                icon: '👨‍🏫',
                title: 'Инструменты для репетиторов',
                description: 'Готовые embed-коды и материалы для интеграции в учебный процесс',
                color: 'purple'
              }
            ].map((feature, index) => (
              <div key={index} className="card p-8 text-center group hover:border-blue-200 transition-all duration-300">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы изменить подход к обучению?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к сообществу студентов и преподавателей, которые уже используют интерактивные технологии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/physics" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                🚀 Начать бесплатно
              </Link>
              <Link href="/teachers" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                👨‍🏫 Для преподавателей
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}