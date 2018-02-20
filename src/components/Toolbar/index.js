import React from 'react';

import PenTool from 'components/Tool/Pen';
import HandTool from 'components/Tool/Hand';
import BucketTool from 'components/Tool/Bucket';
import EraserTool from 'components/Tool/Eraser';

import style from './style.scss';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.tools}>
          <HandTool />
          <PenTool />
          <BucketTool />
          <EraserTool />
        </div>
      </div>
    );
  }
}
