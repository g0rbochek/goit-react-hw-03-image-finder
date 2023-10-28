import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItemImage extends Component {
  state = {
    modalActiv: false,
    imgId: '',
  };

  imgClick = () => {
    const { unit } = this.props;
    this.setState({
      modalActiv: true,
      imgId: unit.largeImageURL,
    });
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.setState({
        modalActiv: false,
      });
    }
  };

  keyCloseModal = () => {
    this.setState({
      modalActiv: false,
    });
  };

  render() {
    const { unit } = this.props;
    const { modalActiv } = this.state;

    return (
      <>
        <img
          id={unit.id}
          src={unit.webformatURL}
          alt={unit.tags}
          className={css.imageGalleryItemImage}
          onClick={this.imgClick}
        />
        {modalActiv && (
          <Modal
            img={this.state.imgId}
            alt={unit.tags}
            overlayClick={this.closeModal}
            keyClose={this.keyCloseModal}
          />
        )}
      </>
    );
  }
}
