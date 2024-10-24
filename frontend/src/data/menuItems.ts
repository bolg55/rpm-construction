const menuItems = [
  {
    title: 'About Us',
    path: '/about',
    children: [],
  },
  {
    title: 'Showcase',
    path: '/showcase',
    children: [],
  },
  {
    title: 'Testimonials',
    path: '/testimonials',
    children: [],
  },
  {
    title: 'Testimonials',
    path: '/testimonials',
    children: [
      {
        title: 'TestimonialsChild',
        path: '/testimonials-child',
      },
    ],
  },
];

export default menuItems;
