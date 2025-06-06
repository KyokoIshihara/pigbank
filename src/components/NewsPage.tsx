import React from 'react';
import { Calendar } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function NewsPage() {
  const { newsItems } = useCMS();
  const publishedNews = newsItems.filter(item => item.isPublished);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">News</h1>
        <p className="text-xl text-gray-700">
          最新のニュースをお届けします
        </p>
      </div>

      <div className="space-y-8">
        {publishedNews.map((news) => (
          <article
            key={news.id}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2 text-[#c22e13]" />
              <time dateTime={news.date}>
                {new Date(news.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            
            <h2 className="text-2xl font-bold text-[#c22e13] mb-4">
              {news.title}
            </h2>
            
            <div className="prose prose-lg text-gray-700 max-w-none">
              {news.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}