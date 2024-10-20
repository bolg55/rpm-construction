import type { CollectionEntry } from 'astro:content';

export interface BlogPage {
  data: CollectionEntry<'blog'>[];
  currentPage: number;
  lastPage: number;
  url: {
    prev?: string;
    next?: string;
  };
}

export interface Pagination {
  paginate: (
    collection: CollectionEntry<'blog'>[],
    options: { pageSize: number }
  ) => Promise<{
    data: CollectionEntry<'blog'>[];
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
  publishedDate?: string | Date;
  image: {
    src?: string;
    alt?: string;
  };
  author: string;
  isDraft?: boolean;
  tags?: string[];
}
