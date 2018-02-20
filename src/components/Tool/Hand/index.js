import Tool from 'components/Tool';

import Icon from './icon.js';

export default class HandTool extends Tool {
  constructor(props) {
    super(props);
    this.setIconComponent(Icon);
    this.setIconSize(20, 31);
  }

  render() {
    return this.renderTool();
  }
}
