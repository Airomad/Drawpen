import Tool from 'components/Tool';

import Icon from './icon.js';

export default class BucketTool extends Tool {
  constructor(props) {
    super(props);
    this.setIconComponent(Icon);
    this.setIconSize(27, 27);
  }

  render() {
    return this.renderTool();
  }
}
