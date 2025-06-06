import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function GoodsPage() {
  const { products } = useCMS();
  const activeProducts = products.filter(product => product.isActive);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">Goods</h1>
        <p className="text-xl">
          Pig Bank オリジナルグッズ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#c22e13] mb-2">
                {product.name}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#c22e13]">
                  ¥{product.price.toLocaleString()}
                </span>
                
                <button className="inline-flex items-center px-4 py-2 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  購入
                  <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}