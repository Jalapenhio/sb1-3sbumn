import React, { useState } from 'react';
import { CarCard } from './components/CarCard';
import { Gallery } from './components/Gallery';
import { Camera } from 'lucide-react';

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const luxuryCars = [
    {
      name: 'Rolls-Royce Phantom',
      brand: 'Rolls-Royce',
      price: '$460,000',
      image:
        'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200',
      description:
        'The pinnacle of luxury motoring, featuring handcrafted excellence and unparalleled comfort.',
    },
    {
      name: 'Bugatti Chiron',
      brand: 'Bugatti',
      price: '$3,000,000',
      image:
        'https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=1200',
      description:
        'Engineering masterpiece combining extreme performance with ultimate luxury.',
    },
    {
      name: 'Lamborghini Aventador',
      brand: 'Lamborghini',
      price: '$500,000',
      image:
        'https://imgs.search.brave.com/Z3DaTQfHi7_jVnMO8l3GRnVDn4sKoO28TPKxsooXQgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLm1vdG9y/LmVzL2ltYWdlL20v/NDE2dy9mb3Rvcy1m/aWNoYS9sYW1ib3Jn/aGluaS9sYW1ib3Jn/aGluaS1hdmVudGFk/b3ItbHAtNzAwLTQt/NzM2MF8xLmpwZw?auto=format&fit=crop&w=1200',
      description:
        'Iconic supercar representing the perfect blend of Italian design and raw power.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-center text-5xl font-bold text-white">
          Los Coches Más Lujosos del Mundo
        </h1>
        <p className="mt-4 text-center text-xl text-gray-300">
          Descubre la excelencia automotriz en su máxima expresión
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {luxuryCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>

        <button
          onClick={() => setIsGalleryOpen(true)}
          className="group mx-auto mt-16 flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100"
        >
          <Camera className="transition-transform group-hover:scale-110" />
          Ver Galería Completa
        </button>
      </main>

      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
}

export default App;
