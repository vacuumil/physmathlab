// components/simulations/ProjectileMotionWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// Динамический импорт с отключением SSR
const ProjectileMotionClient = dynamic(
  () => import('./ProjectileMotionClient'),
  { 
    ssr: false,
    loading: () => (
      <div className="card p-6 max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка симуляции...</p>
        </div>
      </div>
    )
  }
);

export default function ProjectileMotionWrapper() {
  return <ProjectileMotionClient />;
}