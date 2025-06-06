import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function DiscographyPage() {
  const { discography } = useCMS();
  const activeDiscography = discography.filter(item => item.isActive);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">Discography</h1>
        <p className="text-xl text-gray-700">
          Pig Bankの音源をお楽しみください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeDiscography.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square">
              <img
                src={item.coverUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#c22e13] mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {item.description}
              </p>
              
              <p className="text-sm text-gray-500 mb-4">
                Release: {new Date(item.releaseDate).toLocaleDateString('ja-JP')}
              </p>
              
              <a
                href={item.listenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 w-full justify-center"
              >
                <Play className="h-4 w-4 mr-2" />
                試聴する
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}