import React, { Component } from 'react';
import css from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { getFetch } from '../../API/api';

export class App extends Component {
  state = {
    name: '',
    units: [],
    currentPage: 1,
    loader: false,
    error: false,
    buttonActive: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { name, currentPage, units } = this.state;
    if (prevState.name !== name || prevState.currentPage !== currentPage) {
      try {
        this.setState({
          loader: true,
          error: false,
        });

        const { hits, totalHits } = await getFetch(name, currentPage);
        this.setState({
          units: [...units, ...hits],
          buttonActive: true,
        });

        if (Math.ceil(totalHits / 12) === currentPage) {
          toast('That is all', {
            icon: '✅',
          });
          this.setState({
            buttonActive: false,
          });
        }
        if (hits.length === 0) {
          toast('Nothing was found', {
            icon: '🟨',
          });
          this.setState({
            buttonActive: false,
          });
        }
      } catch (error) {
        this.setState({ error: true });
        toast('Error, Please reload this page!', {
          icon: '🟥',
        });
      } finally {
        this.setState({ loader: false });
      }
    }
  };

  submitSearchbar = data => {
    this.setState({
      name: data,
      units: [],
      currentPage: 1,
    });
  };

  btnLoadClick = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { buttonActive, units, loader, error } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmitSearchbar={this.submitSearchbar} />
        <ImageGallery units={units} />
        {loader && <Loader />}
        {buttonActive && <Button onBtnLoadClick={this.btnLoadClick} />}
        {error && <div>Error, Please reload this page!</div>}
        <Toaster />
      </div>
    );
  }
}
