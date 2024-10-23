import type { Post } from '@/interfaces/blog-interface';

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
          {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RPM Construction LTD.",
              "url": "${import.meta.env.SITE}",
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "22 Second St",
                  "addressLocality": "Elmira",
                  "addressRegion": "ON",
                  "postalCode": "N3B 1H2",
                  "addressCountry": "CA"
                  },
                  "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 43.59412,
                      "longitude": -80.56442
                      },
                      "openingHoursSpecification": {
                          "@type": "OpeningHoursSpecification",
                          "dayOfWeek": [
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday"
                              ],
                              "opens": "07:30",
                              "closes": "17:00"
                              },
                              "openingHoursSpecification": {
                                  "@type": "OpeningHoursSpecification",
                                  "dayOfWeek": "Friday",
                                  "opens": "07:30",
                                  "closes": "16:00"
                                  },
              "logo": "/rpm_raw.jpg",
              "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "${import.meta.env.PUBLIC_PHONE_NUMBER}",
                  "contactType": "Customer service"
              },
              "sameAs": [
                  "${import.meta.env.PUBLIC_FACEBOOK_URL}",
                  "${import.meta.env.PUBLIC_TWITTER_URL}",
                  "${import.meta.env.PUBLIC_INSTAGRAM_URL}"
                ],
                "description": "RPM Construction LTD. is a construction company that specializes in residential and commercial projects. We offer a wide range of services, including new construction, renovations, and repairs. Our team of experienced professionals is committed to providing high-quality workmanship and exceptional customer service. Contact us today to learn more about our services and how we can help you with your next project.",
                "foundingDate": "1991"

  }
          </script>`;
};

export default jsonLDGenerator;
