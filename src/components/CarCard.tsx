import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CarCardProps {
  name: string;
  brand: string;
  price: string;
  image: string;
  description: string;
}

export function CarCard({ name, brand, price, image, description }: CarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:scale-[1.02]">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-600">{brand}</p>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <p className="mt-4 text-xl font-bold text-emerald-600">{price}</p>
      </div>
    </div>
  );
}