import React from 'react';
import { Play } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function MoviePage() {
  const { movies } = useCMS();
  const activeMovies = movies.filter(movie => movie.isActive);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">Movie</h1>
        <p className="text-xl">
          ミュージックビデオ・ライブ映像
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activeMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video">
              <iframe
                src={movie.youtubeUrl}
                title={movie.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#c22e13] mb-3">
                {movie.title}
              </h3>
              
              <p className="text-gray-700">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}