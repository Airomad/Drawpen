import React from 'react';
import style from './style.scss';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.IconComponent = null;
    this.iconWidth = 26;
    this.iconHeight = 26;
    this.state = {
      isHover: false
    }
  }

  setIconComponent(IconComponent) {
    this.IconComponent = IconComponent
  }

  setIconSize(width, height) {
    this.iconWidth = width;
    this.iconHeight = height;
  }

  toggleHover = () => {
    this.setState({
      isHover: !this.state.isHover
    });
  }

  renderTool() {
    const Icon = this.IconComponent;
    const iconColor = this.state.isHover ? '#3AF0AE' : '#646464';
    return (
      <div className={style.container} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <div className={style.icon} style={{width: this.iconWidth, height: this.iconHeight}}>
          <Icon color={iconColor} />
        </div>
      </div>
    );
  }
}
