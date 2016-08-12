
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';

import React from 'react'



var Tabs = React.createClass({

    getInitialState: function() {
        return {styles: {}};
    },

    componentDidMount: function() {

        /*------------------------------------------------------------------
        [1. Tabs - barebones examples of page tabbing]
        */

        let _setupTabContainers = () => {
            console.log("")
            // Create a matching text body container for each tab + Populate with the fields required by page
            $('#innerPageTabs li').each(function (index) {
                console.log("TTTESSST");
                $('#innerTabContainer').append('<div class="col-xs-12 innerTabContent" data-tabcontent-number="' + index + '"></div>');
            });
        }

        let _setupTabListeners = () => {

            // handle user clicking on the tabs
            $('#innerPageTabs li').click(function () {

                // Remove active from all other tabs
                $('#innerPageTabs li').each(function () {
                    $(this).removeClass("active");
                });

                // Select the tab thats just been clicked
                $(this).addClass("active");

                // Hide all tab contents
                $('.innerTabContent').each(function () {
                    $(this).removeClass("tabPanelActive");
                    $(this).hide();

                });

                // Display correct one
                $('.innerTabContent[data-tabcontent-number="' + $(this).attr("data-tab-number") + '"]').addClass("tabPanelActive").show("");

            });

            $('#innerPageTabs li').first().trigger("click");// Load the 1st tab

        }

        _setupTabContainers();
        _setupTabListeners();
    },

    render () {
        return (
            <div>

            <HeaderSmall
                text = "Tabs"
            />

            <div id="innerTabContainer">
                <ul id="innerPageTabs" className="nav nav-tabs">

                    <li data-tab-number="0" role="presentation" className="active">
                        <a href="#/">General</a>
                    </li>

                    <li data-tab-number="1" role="presentation">
                        <a href="#/">General Pt.2</a>
                    </li>

                    <li data-tab-number="2" role="presentation">
                        <a href="#/">More Info</a>
                    </li>

                    <li data-tab-number="3" role="presentation">
                        <a href="#/">And more</a>
                    </li>

                    <li data-tab-number="4" role="presentation">
                        <a href="#/">Tabs..</a>
                    </li>

                </ul>
            </div>

            </div>
        )
    }
});

export default Tabs;
