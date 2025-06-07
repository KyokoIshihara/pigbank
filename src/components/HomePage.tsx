import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function HomePage() {
  const { liveEvents } = useCMS();
  const upcomingEvents = liveEvents.filter(event => event.isActive && new Date(event.date) >= new Date());

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <img 
            src="/ChatGPT Image 2025年6月4日 12_38_06.png" 
            alt="Pig Bank" 
            className="md:w-6/12 w-full h-64 md:h-96 object-cover mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#c22e13] mb-6">
          Welcome to Pig Bank
        </h1>
      </div>

      {/* Live Promotion Section */}
      {upcomingEvents.length > 0 && (
        <div className="bg-gradient-to-r from-[#c22e13] to-red-600 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-xl md:text-xl font-bold mb-6">
              韓国ライブ決定！ 
            </h2>
            {upcomingEvents.map((event) => (
              <div key={event.id} className="mb-6">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 mr-3" />
                    <span className="text-xl font-medium">
                      {new Date(event.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-3" />
                    <span className="text-xl font-medium">{event.venue}</span>
                  </div>
                </div>
                <p className="text-lg mb-6 opacity-90">
                  {event.description}
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-white text-[#c22e13] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
                  buy ticket
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#c22e13]">
          <h3 className="text-2xl font-bold text-[#c22e13] mb-4">Latest Music</h3>
          <p className="mb-6 text-[#c22e13]">
            最新の音源をチェック
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
            Discography
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#c22e13]">
          <h3 className="text-2xl font-bold text-[#c22e13] mb-4">Live Videos</h3>
          <p className="mb-6 text-[#c22e13]">
            ライブ映像・MV
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
            Movie
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#c22e13]">
          <h3 className="text-2xl font-bold text-[#c22e13] mb-4">Official Goods</h3>
          <p className="mb-6 text-[#c22e13]">
            オリジナルグッズ
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
            Goods
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}