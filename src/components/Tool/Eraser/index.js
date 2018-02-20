import Tool from 'components/Tool';

import Icon from './icon.js';

export default class EraserTool extends Tool {
  constructor(props) {
    super(props);
    this.setIconComponent(Icon);
    this.setIconSize(26, 26);
  }

  render() {
    return this.renderTool();
  }
}
