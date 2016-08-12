
import React from 'react'
import LightHeader from '../../common/LightHeader';
import TextBlock from '../../common/TextBlock';
import HeaderSmall from '../../common/HeaderSmall';

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
        backgroundColor: 'rgba(91,31,105,0.5)'
    },

    pcolor2 : {
        backgroundColor: 'rgb(238,175,0)'
    },

    pcolor2Tint : {
        backgroundColor: 'rgba(238,175,0,0.5)'
    },

    pcolor3 : {
        backgroundColor: '#FB4F14'
    },

    pcolor3Tint : {
        backgroundColor: 'rgba(251,79,20,0.5)'
    },

    pcolor4 : {
        backgroundColor: '#A90061'
    },

    pcolor4Tint : {
        backgroundColor: 'rgba(169,0,97,0.5)'
    },

    scolor1 : {
        backgroundColor:'rgb(86,90,92)'
    },

    scolor1Tint : {
        backgroundColor:'rgb(86,90,92)', /* Legacy Fallback */
        backgroundColor:'rgba(86,90,9,0.5)'
    },

    scolor2 : {
        backgroundColor:'rgb(139,141,142)'
    },

    scolor2Tint : {
        backgroundColor:'rgb(139,141,142)', /* Legacy Fallback */
        backgroundColor:'rgba(139,141,142,0.5)'

    },

    scolor3 : {
        backgroundColor:'rgb(224,225,221)'
    },

    scolor3Tint : {
        backgroundColor:'rgb(224,225,221)', /* Legacy Fallback */
        backgroundColor:'rgba(224,225,221,0.5)'
    }

}

class ColorPalette extends React.Component{
    render () {
        return (
            <div>
                <HeaderSmall
                    text = "Colors"
                />
                <TextBlock
                    text = "We use WHITE to reflect the clean nature of our business"
                    classNames = "quote"
                />
                <TextBlock
                    text = "The Mitie colour palette provides a range of bright and bold colours to use. Along with white the bright purple is a common choice, Although used more sparingly. All colours can be used with 50% tint"
                    classNames = "quote"
                />
                <LightHeader
                    text = "Primary Colours"
                />

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p> MITIE Purple ( #5B1F69 )</p>
                    <div style={Object.assign({}, styles.circle,  styles.pcolor1)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.pcolor1Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p> MITIE Yellow ( #EEAF00 )</p>
                    <div style={Object.assign({}, styles.circle,  styles.pcolor2)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.pcolor2Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>MITIE Orange ( #FB4F14 )</p>
                    <div style={Object.assign({}, styles.circle,  styles.pcolor3)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.pcolor3Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>MITIE Pink ( #5B1F69 )</p>
                    <div style={Object.assign({}, styles.circle,  styles.pcolor4)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.pcolor4Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <LightHeader
                    text = "Secondary Colours"
                />

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>Dark Grey ( #565A5C )</p>
                    <div style={Object.assign({}, styles.circle,  styles.scolor1)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.scolor1Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>Lighter Grey ( #8B8D8E )</p>
                    <div style={Object.assign({}, styles.circle,  styles.scolor2)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.scolor2Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>Lightest Grey ( #E0E1DD )</p>
                    <div style={Object.assign({}, styles.circle,  styles.scolor3)} class="pcolor-1 circle"></div>
                    <div style={Object.assign({}, styles.circleOffset, styles.scolor3Tint)} class="pcolor-1-tint circle-offset"></div>
                </div>

                <hr/>
            </div>

        )
    }
};

export default ColorPalette;
