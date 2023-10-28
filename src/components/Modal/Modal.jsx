import css from './Modal.module.css';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hanleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hanleKeyDown);
  }

  hanleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.keyClose();
      console.log('Escape');
    }
  };

  render() {
    const { img, alt, overlayClick } = this.props;
    return (
      <div className={css.overlay} onClick={overlayClick}>
        <div className={css.modal}>
          <img src={img} alt={alt} />
        </div>
      </div>
    );
  }
}
