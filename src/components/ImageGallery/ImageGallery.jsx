import { ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ units }) => {
  return (
    <ul className={css.imageGallery}>
      {units &&
        units.map(unit => {
          return (
            <li key={unit.id} className={css.imageGalleryItem}>
              <ImageGalleryItemImage unit={unit} />
            </li>
          );
        })}
    </ul>
  );
};
