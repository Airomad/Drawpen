import React from 'react';
import { connect } from 'react-redux'

import PenTool from 'components/Tool/Pen';
import HandTool from 'components/Tool/Hand';
import BucketTool from 'components/Tool/Bucket';
import EraserTool from 'components/Tool/Eraser';

import style from './style.scss';

function mapStateToProps(state) {
  return {
    selectedToolId: state.toolbar.selectedToolId
  }
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.tools}>
          <HandTool selectedToolId={this.props.selectedToolId} />
          <PenTool selectedToolId={this.props.selectedToolId} />
          <BucketTool selectedToolId={this.props.selectedToolId} />
          <EraserTool selectedToolId={this.props.selectedToolId} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Toolbar);
