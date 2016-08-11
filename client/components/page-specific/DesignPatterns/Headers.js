
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';

import React from 'react'

class Headers extends React.Component {
  render () {
    return (
        <div>
            <HeaderSmall
                text = "Heading Small Example"
            />
            <HeaderLarge
                primaryText = "Mitie Header"
                additionalText = {["This is actually a pattern right here. Its the ",<code>.header-large</code>, " pattern. The header above is a design pattern too, which contains some others, like dropdown menus. Also, all the patterns below are in a ",<code>.module</code>]}
            />
            <LightHeader
                text = "Heading Small Example"
            />
        </div>
    )
  }
};

export default Headers;
