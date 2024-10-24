import type { Post } from '@/interfaces/blog-interface';

const res = await fetch('http://localhost:1337/api/seo');
const { data } = await res.json();

const jsonLDGenerator = ({
  type,
  post,
  url,
}: {
  type: string;
  post: Post;
  url: string;
}) => {
  if (type === 'post') {
    const { title, description, publishedDate, image, author } = post;
    return `<script type="application/ld+json">
          {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "${url}"
                  },
                  "headline": "${title}",
                  "description": "${description}",
                  "image": "${image.src}",
                  "author": {
                      "@type": "Person",
                      "name": "${author}"
                  },

                  "datePublished": "${publishedDate}"

              }
              </script>`;
  }
  return `<script type="application/ld+json">
          ${JSON.stringify(data.jsonData, null, 2)}
          </script>`;
};

export default jsonLDGenerator;
