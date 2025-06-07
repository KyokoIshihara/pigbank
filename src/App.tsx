import React, { useState } from 'react';
import { CMSProvider, useCMS } from './contexts/CMSContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { DiscographyPage } from './components/DiscographyPage';
import { LivePage } from './components/LivePage';
import { NewsPage } from './components/NewsPage';
import { MoviePage } from './components/MoviePage';
import { GoodsPage } from './components/GoodsPage';
import { ContactPage } from './components/ContactPage';
import { AdminPanel } from './components/AdminPanel';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { menuItems } = useCMS();

  const renderPage = () => {
    if (isAdminMode) {
      return <AdminPanel />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'discography':
        return <DiscographyPage />;
      case 'live':
        return <LivePage />;
      case 'news':
        return <NewsPage />;
      case 'movie':
        return <MoviePage />;
      case 'goods':
        return <GoodsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // Dynamic page content from CMS
        const menuItem = menuItems.find(item => item.slug === currentPage);
        if (menuItem) {
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#c22e13] mb-4">{menuItem.name}</h1>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="prose prose-lg text-[#c22e13] max-w-none">
                  {menuItem.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onAdminToggle={() => setIsAdminMode(!isAdminMode)}
        isAdminMode={isAdminMode}
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <img 
              src="/ChatGPT Image 2025年6月7日 16_30_56.png" 
              alt="Pig Bank" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-[#c22e13]">
            © 2024 Pig Bank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
}

export default App;