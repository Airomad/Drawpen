import React from 'react';

import Header from 'components/Header';
import Toolbar from 'components/Toolbar';
import LayersBar from 'components/LayersBar';

import style from './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Toolbar />
        <LayersBar />
        <Header />
      </div>
    );
  }
}
