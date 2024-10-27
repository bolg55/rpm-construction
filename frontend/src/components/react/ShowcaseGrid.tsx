import { getStrapiMedia } from '@/utils/strapi';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  images: {
    id: number;
    url: string;
    alternativeText: string;
  }[];
  openModal: (id: number) => void;
}

const ShowcaseGrid = ({ images, openModal }: Props) => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 9)); // Initial number of images
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(images.length > 9); // Check if there are more images to load
  const imagesPerLoad = 9; // Number of images to load each time

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        // Load more images
        const currentLength = visibleImages.length;
        const isMore = currentLength < images.length;
        const nextImages = isMore
          ? images.slice(currentLength, currentLength + imagesPerLoad)
          : [];
        setVisibleImages((prevImages) => [...prevImages, ...nextImages]);
        setHasMore(currentLength + imagesPerLoad < images.length);
      }
    },
    [hasMore, images, visibleImages.length]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);
  return (
    <div className='max-w-screen-md lg:mb-32 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8 mt-16'>
        {visibleImages.map(({ url, alternativeText: alt, id }, index) => (
          <div
            className='bg-white aspect-w-8 aspect-h-7 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow duration-300 motion-safe:opacity-0 motion-safe:animate-fadeInUp'
            key={id}
            onClick={() => openModal(index)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              className='object-cover rounded-lg'
              src={getStrapiMedia(url) ?? ''}
              alt={alt || 'RPM Construction'}
            />
          </div>
        ))}
      </div>
      {hasMore && (
        <div
          ref={loadMoreRef}
          className='h-10 flex justify-center items-center'
        >
          <p>Loading more images...</p>
        </div>
      )}
    </div>
  );
};

export default ShowcaseGrid;