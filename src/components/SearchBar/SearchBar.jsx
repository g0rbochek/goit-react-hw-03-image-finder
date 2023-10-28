import { Component } from 'react';
import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handlChange = input => {
    this.setState({
      [input.name]: input.value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      this.setState({
        name: '',
      });
      toast('You enter empty query', {
        icon: '🟨',
      });
    }
    this.props.onSubmitSearchbar(this.state.name);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}></span>
          </button>

          <input
            name="name"
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={e => this.handlChange(e.target)}
          />
        </form>
      </header>
    );
  }
}
