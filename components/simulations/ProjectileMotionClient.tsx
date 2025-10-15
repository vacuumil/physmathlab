// components/simulations/ProjectileMotionClient.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

interface SimulationResults {
  distance: number;
  time: number;
  height: number;
}

// Типы для глобальных функций
declare global {
  interface Window {
    startProjectileSimulation: () => void;
    resetProjectileSimulation: () => void;
  }
}

export default function ProjectileMotionClient() {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  
  // Параметры симуляции
  const [velocity, setVelocity] = useState(15);
  const [angle, setAngle] = useState(45);
  const [gravity, setGravity] = useState(9.81);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<SimulationResults>({ distance: 0, time: 0, height: 0 });

  useEffect(() => {
    if (!sketchRef.current) return;

    const sketch = (p: p5) => {
      let time = 0;
      let trajectory: { x: number; y: number }[] = [];

      p.setup = () => {
        const canvas = p.createCanvas(600, 400);
        canvas.parent(sketchRef.current!);
        p.frameRate(60);
        resetSimulation();
      };

      p.draw = () => {
        p.background(240);
        
        // Рисуем землю
        p.fill(139, 69, 19);
        p.rect(0, 350, p.width, 50);
        
        // Рисуем сетку
        drawGrid(p);
        
        if (isRunning) {
          // Расчет позиции
          const radians = p.radians(angle);
          const v0x = velocity * p.cos(radians);
          const v0y = velocity * p.sin(radians);
          
          const x = v0x * time;
          const y = 350 - (v0y * time - 0.5 * gravity * time * time);
          
          // Сохраняем траекторию
          trajectory.push({ x: x + 50, y });
          
          // Рисуем траекторию
          p.stroke(59, 130, 246, 150);
          p.strokeWeight(2);
          p.noFill();
          p.beginShape();
          trajectory.forEach(point => {
            p.vertex(point.x, point.y);
          });
          p.endShape();
          
          // Рисуем тело
          p.fill(239, 68, 68);
          p.stroke(0);
          p.strokeWeight(1);
          p.ellipse(x + 50, y, 20, 20);
          
          // Расчет результатов
          const totalTime = (2 * velocity * p.sin(radians)) / gravity;
          const maxHeight = 350 - (v0y * v0y) / (2 * gravity);
          const maxDistance = (velocity * velocity * p.sin(2 * radians)) / gravity;
          
          setResults({
            distance: Number(maxDistance.toFixed(1)),
            time: Number(totalTime.toFixed(1)),
            height: Number((350 - maxHeight).toFixed(1))
          });
          
          // Останавливаем анимацию когда тело падает
          if (y > 350 || time > totalTime) {
            setIsRunning(false);
          }
          
          time += 0.05;
        } else {
          // Показываем начальную позицию
          p.fill(239, 68, 68);
          p.stroke(0);
          p.strokeWeight(1);
          p.ellipse(50, 350, 20, 20);
          
          // Показываем вектор начальной скорости
          const radians = p.radians(angle);
          p.stroke(59, 130, 246);
          p.strokeWeight(3);
          p.line(50, 350, 50 + velocity * p.cos(radians), 350 - velocity * p.sin(radians));
          p.fill(59, 130, 246);
          p.triangle(
            50 + velocity * p.cos(radians), 
            350 - velocity * p.sin(radians),
            45 + velocity * p.cos(radians), 
            345 - velocity * p.sin(radians),
            45 + velocity * p.cos(radians), 
            355 - velocity * p.sin(radians)
          );
        }
      };

      const drawGrid = (p: p5) => {
        p.stroke(200);
        p.strokeWeight(1);
        
        // Вертикальные линии
        for (let x = 0; x <= p.width; x += 50) {
          p.line(x, 0, x, 350);
        }
        
        // Горизонтальные линии
        for (let y = 0; y <= 350; y += 50) {
          p.line(0, y, p.width, y);
        }
        
        // Подписи осей
        p.fill(0);
        p.textSize(12);
        p.text('x (м)', p.width - 30, 340);
        p.text('y (м)', 10, 15);
      };

      const resetSimulation = () => {
        time = 0;
        trajectory = [];
        setResults({ distance: 0, time: 0, height: 0 });
      };

      // Сохраняем функции для кнопок
      window.startProjectileSimulation = () => {
        resetSimulation();
        setIsRunning(true);
      };

      window.resetProjectileSimulation = () => {
        resetSimulation();
        setIsRunning(false);
      };
    };

    p5Instance.current = new p5(sketch);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [velocity, angle, gravity, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResults({ distance: 0, time: 0, height: 0 });
    if (typeof window !== 'undefined' && window.resetProjectileSimulation) {
      window.resetProjectileSimulation();
    }
  };

    return (
    <div className="card p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Панель управления */}
        <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-3">🎯 Параметры запуска</h3>
            
            <div className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Начальная скорость: <span className="text-blue-600 font-semibold">{velocity} м/с</span>
                </label>
                <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={velocity}
                    onChange={(e) => setVelocity(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    disabled={isRunning}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 м/с</span>
                    <span>30 м/с</span>
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Угол броска: <span className="text-green-600 font-semibold">{angle}°</span>
                </label>
                <input
                    type="range"
                    min="10"
                    max="80"
                    step="5"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                    disabled={isRunning}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10°</span>
                    <span>80°</span>
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Гравитация: <span className="text-purple-600 font-semibold">{gravity} м/с²</span>
                </label>
                <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={gravity}
                    onChange={(e) => setGravity(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    disabled={isRunning}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 м/с²</span>
                    <span>20 м/с²</span>
                </div>
                </div>
            </div>
            </div>

            {/* Кнопки управления */}
            <div className="flex space-x-3">
            <button
                onClick={handleStart}
                disabled={isRunning}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isRunning ? '🔄 Запущено...' : '🚀 Запуск'}
            </button>
            <button
                onClick={handleReset}
                className="btn-outline flex-1"
            >
                🔄 Сброс
            </button>
            </div>

            {/* Результаты */}
            <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">📊 Результаты</h3>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                <span className="text-gray-600">Дальность полета:</span>
                <span className="font-semibold text-blue-600">{results.distance} м</span>
                </div>
                <div className="flex justify-between">
                <span className="text-gray-600">Время полета:</span>
                <span className="font-semibold text-green-600">{results.time} с</span>
                </div>
                <div className="flex justify-between">
                <span className="text-gray-600">Макс. высота:</span>
                <span className="font-semibold text-purple-600">{results.height} м</span>
                </div>
            </div>
            </div>
        </div>

        {/* Канвас с симуляцией */}
        <div className="lg:col-span-2">
            <div ref={sketchRef} className="border border-gray-200 rounded-lg overflow-hidden bg-white" />
            
            {/* Легенда */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Тело</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-4 h-1 bg-blue-500"></div>
                <span className="text-gray-600">Вектор скорости</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-4 h-1 bg-blue-400 opacity-60"></div>
                <span className="text-gray-600">Траектория</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brown-500"></div>
                <span className="text-gray-600">Поверхность</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}