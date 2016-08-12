
import Headers from './Headers';
import ColorPalette from './ColorPalette';
import Slabs from './Slabs';
import Tabs from './Tabs';

import ComponentContainer from '../../common/ComponentContainer';

import React from 'react'

class DesignPatterns extends React.Component {
  render () {
    return (
        <div>

            <ComponentContainer>
                <Headers />
            </ComponentContainer>

            <ComponentContainer>
                <ColorPalette />
            </ComponentContainer>

            <ComponentContainer>
                <Slabs />
            </ComponentContainer>

            <ComponentContainer>
                <Tabs />
            </ComponentContainer>

        </div>
    )
  }
};

export default DesignPatterns;
