
import React from 'react'

var Slabs = React.createClass({

    getInitialState: function() {
        return {styles: {}};
    },

    componentDidMount: function() {
        console.log(this.props);

        // Default
        let styles = {
            section : {
                backgroundColor : "white",
                color: '#fff',
                padding: '1em 2%',
                marginBottom:'10px'
            }
        }

        // Otherwise set the color as passed in by props
        switch (this.props.type){
            case 'grey':
                styles.section.backgroundColor = "rgb(86,90,92)";
                break;
            case 'primary1':
                styles.section.backgroundColor = "#5B1F69";
                break;
            case 'primary2':
                styles.section.backgroundColor = "rgb(238,175,0)";
                break;
            case 'primary3':
                styles.section.backgroundColor = "#FB4F14";
                break;

        }


        this.setState({styles: styles})
            console.log(this.state.styles.section);

    },

    render () {
        return (
            <div>
                <section style={this.state.styles.section}>
                    <h3 className="text-whisper">{this.props.title}</h3>
                    <div>
                        {this.props.body}
                    </div>
                </section>
            </div>
        )
    }
});

export default Slabs;
