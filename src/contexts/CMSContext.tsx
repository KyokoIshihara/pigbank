import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { MenuItem, NewsItem, Product, LiveEvent, Discography, Movie } from '../types';

interface CMSContextType {
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[] | ((prev: MenuItem[]) => MenuItem[])) => void;
  newsItems: NewsItem[];
  setNewsItems: (items: NewsItem[] | ((prev: NewsItem[]) => NewsItem[])) => void;
  products: Product[];
  setProducts: (items: Product[] | ((prev: Product[]) => Product[])) => void;
  liveEvents: LiveEvent[];
  setLiveEvents: (items: LiveEvent[] | ((prev: LiveEvent[]) => LiveEvent[])) => void;
  discography: Discography[];
  setDiscography: (items: Discography[] | ((prev: Discography[]) => Discography[])) => void;
  movies: Movie[];
  setMovies: (items: Movie[] | ((prev: Movie[]) => Movie[])) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const defaultMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Home',
    slug: 'home',
    content: 'Pig Bankのホームページ',
    isActive: true,
  },
  {
    id: '2',
    name: 'Discography',
    slug: 'discography',
    content: '音源情報',
    isActive: true,
  },
  {
    id: '3',
    name: 'Live/Event',
    slug: 'live',
    content: 'ライブ・イベント情報',
    isActive: true,
  },
  {
    id: '4',
    name: 'News',
    slug: 'news',
    content: '最新ニュース',
    isActive: true,
  },
  {
    id: '5',
    name: 'Movie',
    slug: 'movie',
    content: '動画',
    isActive: true,
  },
  {
    id: '6',
    name: 'Goods',
    slug: 'goods',
    content: 'グッズ',
    isActive: true,
  },
  {
    id: '7',
    name: 'Contact',
    slug: 'contact',
    content: 'お問い合わせ',
    isActive: true,
  },
];

const defaultNewsItems: NewsItem[] = [
  {
    id: '1',
    title: '9月 韓国ライブ決定！',
    content: '2025年9月に韓国でのライブが決定いたしました！詳細は後日発表予定です。お楽しみに！',
    date: '2024-01-15',
    isPublished: true,
  },
];

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Pig Bank オリジナルTシャツ',
    description: '高品質なコットン100%のオリジナルTシャツです。',
    price: 3500,
    imageUrl: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: true,
  },
  {
    id: '2',
    name: 'Pig Bank タオル',
    description: 'ライブ会場でも使える高品質なタオルです。',
    price: 2000,
    imageUrl: 'https://images.pexels.com/photos/6045043/pexels-photo-6045043.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: true,
  },
];

const defaultLiveEvents: LiveEvent[] = [
  {
    id: '1',
    title: 'Pig Bank 韓国ライブ 2025',
    date: '2025-09-15',
    venue: '공중캠프 | 空中キャンプ | kuchu-camp',
    location: '韓国 ソウル',
    description: '待望の韓国初ライブ！詳細は後日発表予定です。',
    ticketUrl: '#',
    flyerUrl: 'https://www.instagram.com/kuchucamp_/',
    isActive: true,
  },
];

const defaultDiscography: Discography[] = [
  {
    id: '1',
    title: 'First Wave',
    description: 'Pig Bankのデビューシングル。波のような音楽をお楽しみください。',
    coverUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
    listenUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    releaseDate: '2024-01-01',
    isActive: true,
  },
];

const defaultMovies: Movie[] = [
  {
    id: '1',
    title: 'Pig Bank - First Wave MV',
    description: 'デビューシングル「First Wave」のミュージックビデオ',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: true,
  },
];

export function CMSProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useLocalStorage<MenuItem[]>('pig-bank-menu-items', defaultMenuItems);
  const [newsItems, setNewsItems] = useLocalStorage<NewsItem[]>('pig-bank-news-items', defaultNewsItems);
  const [products, setProducts] = useLocalStorage<Product[]>('pig-bank-products', defaultProducts);
  const [liveEvents, setLiveEvents] = useLocalStorage<LiveEvent[]>('pig-bank-live-events', defaultLiveEvents);
  const [discography, setDiscography] = useLocalStorage<Discography[]>('pig-bank-discography', defaultDiscography);
  const [movies, setMovies] = useLocalStorage<Movie[]>('pig-bank-movies', defaultMovies);

  return (
    <CMSContext.Provider
      value={{
        menuItems,
        setMenuItems,
        newsItems,
        setNewsItems,
        products,
        setProducts,
        liveEvents,
        setLiveEvents,
        discography,
        setDiscography,
        movies,
        setMovies,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}