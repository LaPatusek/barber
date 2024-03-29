import React from 'react';
import Masonry from 'react-masonry-css';
import temp1 from '../../../Assets/barber-interior.webp';
import temp2 from '../../../Assets/haircut-main-photo.webp';
import styles from './MasonryLayout.module.css';

type Image = {
  id: string;
  src: string;
};

const MasonryLayout: React.FC = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1,
  };

  const images: Image[] = [
    { id: '1', src: temp1 },
    { id: '2', src: temp2 },
    { id: '3', src: temp2 },
    { id: '4', src: temp1 },
    { id: '5', src: temp2 },
    { id: '6', src: temp1 },
    { id: '7', src: temp1 },
    { id: '8', src: temp2 },
  ];

  const renderedImages = images.map((image) => {
    return (
      <div id={image.id} key={image.id}>
        <img src={image.src} width='90%' alt={image.id} />
      </div>
    );
  });

  return (
    <div className={`${styles.gallery} grid`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['my-masonry-grid']}
        columnClassName={styles['my-masonry-grid_column']}
      >
        {renderedImages}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
