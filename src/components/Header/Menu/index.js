import React from 'react';
import DropdownMenu from 'react-dd-menu';

import style from './style.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        menuOpenItemId: null
    };
    this.items = [
      'File',
      'Edit'
    ];
  }
 
  toggle = (item) => {
    // let menuOpenItemId = null;
    // if (this.state.menuOpenItemId === item)
    this.setState({ menuOpenItemId: this.state.menuOpenItemId === item ? null : item });
  }
 
  close = () => {
    this.setState({ menuOpenItemId: null });
  }
 
  click = () => {
    console.log('You clicked an item');
  }

  renderItems() {
    const dropdowns = [];
    this.items.forEach((item) => {
      const options = {
        isOpen: this.state.menuOpenItemId === item,
        close: this.close,
        toggle: (
          <li className={`${style.item} ${this.state.menuOpenItemId === item ? style.active : ''}`} onClick={() => this.toggle(item)}>
            <div className={style.label}>{item}</div>
          </li>
        ),
        align: 'left',
        animate: true,
        className: style.itemContainer
      };
      dropdowns.push(
        <DropdownMenu {...options}>
          <div className={style.dropdown}>
            <a href="#">Item inside</a>
          </div>
        </DropdownMenu>
      );
    });
    return dropdowns;
  }

  render() {
    return (
      <ul className={style.menu}>
        {this.renderItems()}
      </ul>
    );
  }
}
