import React from 'react';
import DropdownMenu from 'react-dd-menu';

import style from './style.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        menuOpenItemId: null
    };
    this.items = new Map();
    this.items.set('File', [
      'Create new',
      'Save image'
    ]);
    this.items.set('Edit', [
      'Undo',
      'Redo'
    ]);
    this.items.set('Help', [
      'Shortcuts',
      'About'
    ]);
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

  renderDropdownElements(elements) {
    const list = [];
    elements.forEach(element => {
      list.push(
        <div key={element} className={style.dropdownElement}>
          {element}
        </div>
      );
    });
    return list;
  }

  renderItems() {
    const dropdowns = [];
    for (const [item, elements] of this.items) {
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
            {this.renderDropdownElements(elements)}
          </div>
        </DropdownMenu>
      );
    }
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
