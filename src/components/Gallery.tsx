import React from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Gallery({ isOpen, onClose }: GalleryProps) {
  if (!isOpen) return null;

  const galleryImages = [
    'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200',
    'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1200',
    'https://imgs.search.brave.com/Z3DaTQfHi7_jVnMO8l3GRnVDn4sKoO28TPKxsooXQgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLm1vdG9y/LmVzL2ltYWdlL20v/NDE2dy9mb3Rvcy1m/aWNoYS9sYW1ib3Jn/aGluaS9sYW1ib3Jn/aGluaS1hdmVudGFk/b3ItbHAtNzAwLTQt/NzM2MF8xLmpwZw?auto=format&fit=crop&w=1200',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-white hover:text-gray-300"
      >
        <X size={32} />
      </button>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[16/9] overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Luxury car ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
