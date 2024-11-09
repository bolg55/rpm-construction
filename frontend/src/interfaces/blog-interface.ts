import type { CollectionEntry } from 'astro:content';

export interface BlogPage {
  data: CollectionEntry<'articles'>[];
  currentPage: number;
  lastPage: number;
  url: {
    prev?: string;
    next?: string;
  };
}

export interface Pagination {
  paginate: (
    collection: CollectionEntry<'articles'>[],
    options: { pageSize: number }
  ) => Promise<{
    data: CollectionEntry<'articles'>[];
    currentPage: number;
    lastPage: number;
    url: {
      prev?: string;
      next?: string;
    };
  }>;
}

export interface Post {
  title: string;
  description: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  publishedAt: string | Date;
  content: string;
  slug: string;
  image: {
    id: number;
    url?: string;
    alternativeText?: string;
  };
  author: {
    id: number;
    fullName: string;
    image?: {
      id: number;
      url?: string;
      alternativeText?: string;
    };
  };
}
