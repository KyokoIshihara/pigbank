import React, { useState } from 'react';
import { Settings, Menu, X, Instagram, Youtube } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onAdminToggle: () => void;
  isAdminMode: boolean;
}

export function Header({ currentPage, onPageChange, onAdminToggle, isAdminMode }: HeaderProps) {
  const { menuItems } = useCMS();
  const activeMenuItems = menuItems.filter(item => item.isActive);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/ChatGPT Image 2025年6月4日 12_38_06.png" 
              alt="Pig Bank" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {activeMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.slug)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.slug
                    ? 'bg-red-100 text-[#c22e13]'
                    : 'text-[#c22e13] hover:bg-red-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* SNS Links & Admin Button */}
          <div className="flex items-center space-x-4">
            {/* SNS Links */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#c22e13] hover:bg-red-50 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#c22e13] hover:bg-red-50 rounded-full transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Admin Button */}
            <button
              onClick={onAdminToggle}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isAdminMode
                  ? 'bg-red-100 text-[#c22e13] hover:bg-red-200'
                  : 'bg-gray-100 text-[#c22e13] hover:bg-gray-200'
              }`}
              title={isAdminMode ? '管理モードを終了' : '管理モードに入る'}
            >
              <Settings className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#c22e13] hover:bg-red-50 rounded-md"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
              {activeMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.slug);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 text-left ${
                    currentPage === item.slug
                      ? 'bg-red-100 text-[#c22e13]'
                      : 'text-[#c22e13] hover:bg-red-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile SNS Links */}
              <div className="flex items-center space-x-4 px-4 py-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#c22e13] hover:bg-red-50 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#c22e13] hover:bg-red-50 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}