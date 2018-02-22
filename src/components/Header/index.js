import React from 'react';

import Menu from './Menu';
import style from './style.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Menu />
      </div>
    );
  }
}
