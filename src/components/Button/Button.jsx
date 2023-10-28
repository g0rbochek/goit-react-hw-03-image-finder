import css from './Button.module.css';

export const Button = ({ onBtnLoadClick }) => {
  return (
    <button className={css.button} onClick={onBtnLoadClick}>
      Load more
    </button>
  );
};
