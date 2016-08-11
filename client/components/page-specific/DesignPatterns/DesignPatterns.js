
import Headers from './Headers';
import ColorPalette from './ColorPalette';
import Slabs from './Slabs';

import React from 'react'

class DesignPatterns extends React.Component {
  render () {
    return (
        <div>
            <Headers />
            <ColorPalette />
            <Slabs />
        </div>
    )
  }
};

export default DesignPatterns;
