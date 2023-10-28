import css from './Loader.module.css';
import { Radio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <div>Loading...</div>
      <Radio
        visible={true}
        height="80"
        width="80"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass="radio-wrapper"
        colors={['#3b3d3f', '#3b3d3f']}
      />
      ;
    </div>
  );
};
