import Tool from 'components/Tool';

import Icon from './icon.js';

export default class PenTool extends Tool {
  constructor(props) {
    super(props);
    this.setIconComponent(Icon);
    this.setIconSize(26, 26);
    this.setToolId('PEN_TOOL');
  }

  render() {
    return this.renderTool();
  }
}
