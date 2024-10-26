export interface Logo {
  href: string;
  image: {
    url: string | null;
    alternativeText: string;
  };
}

export interface Testimonial {
  id: number;
  review: string;
  name: string;
  isFeatured: boolean;
}
