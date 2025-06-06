export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  content: string;
  isActive: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  isPublished: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isActive: boolean;
}

export interface LiveEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  description: string;
  ticketUrl: string;
  flyerUrl: string;
  isActive: boolean;
}

export interface Discography {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  listenUrl: string;
  releaseDate: string;
  isActive: boolean;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  isActive: boolean;
}