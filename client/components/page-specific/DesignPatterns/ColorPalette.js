
import React from 'react'


let styles = {

    circle : {
    	position: 'relative',
    	display: 'inline-block',
    	width: '200px',
    	height: '200px',
    	borderRadius: '100px'
    },
    circleOffset : {
    	position: 'absolute',
    	display: 'inline-block',
    	width: '200px',
    	height: '200px',
    	borderRadius: '100px',
    	left:'100px'
    },
    pcolor1 : {
    	backgroundColor: '#5B1F69'
    },

    pcolor1Tint : {
    	backgroundColor: 'rgba(91,31,105,0.5);'
    },

    pcolor2 : {
    	backgroundColor: 'rgb(238,175,0);'
    },

    pcolor2Tint : {
    	backgroundColor: 'rgba(238,175,0,0.5);'
    },

    pcolor3 : {
    	backgroundColor: '#FB4F14;'
    },

    pcolor3Tint : {
    	backgroundColor: 'rgba(251,79,20,0.5);'
    },

    pcolor4 : {
    	backgroundColor: '#A90061;'
    },

    pcolor4Tint : {
    	backgroundColor: 'rgba(169,0,97,0.5);'
    },

    scolor1 : {
    	backgroundColor:'rgb(86,90,92);'
    },

    scolor1Tint : {
    	backgroundColor:'rgb(86,90,92);', /* Legacy Fallback */
    	backgroundColor:'rgba(86,90,9,0.5);'
    },

    scolor2 : {
    	backgroundColor:'rgb(139,141,142);'
    },

    scolor2Tint : {
    	backgroundColor:'rgb(139,141,142);', /* Legacy Fallback */
    	backgroundColor:'rgba(139,141,142,0.5);'

    },

    scolor3 : {
    	backgroundColor:'rgb(224,225,221);'
    },

    scolor3Tint : {
    	backgroundColor:'rgb(224,225,221)', /* Legacy Fallback */
    	backgroundColor:'rgba(224,225,221,0.5)'
    }

}

class ColorPalette extends React.Component{
  render () {
    return (
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
			<p> MITIE Purple ( #5B1F69 )</p>
			<div style={Object.assign({}, styles.circle,  styles.pcolor1)} class="pcolor-1 circle"></div>
			<div class="pcolor-1-tint circle-offset"></div>
		</div>
    )
  }
};

export default ColorPalette;
