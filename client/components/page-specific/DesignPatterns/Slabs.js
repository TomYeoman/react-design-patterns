
import HeaderSmall from '../../common/HeaderSmall';
import Slab from '../../common/Slab';
import React from 'react'

class Slabs extends React.Component {
  render () {
    return (
        <div>
            <HeaderSmall text = "Slabs" />

            <Slab
                type= "primary1"
                title = "primary-1"
                body = {[
                    <p>Lorem ipsum dolor sit amet, elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>,
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                    </ul>
                ]}
            />

            <Slab
                type= "primary2"
                title = "primary-2"
                body = {[
                    <p>Lorem ipsum dolor sit amet, elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>,
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                    </ul>
                ]}
            />

            <Slab
                type= "primary3"
                title = "primary-3"
                body = {[
                    <p>Lorem ipsum dolor sit amet, elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>,
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                    </ul>
                ]}
            />

            <Slab
                type= "grey"
                title = "Grey"
                body = {[
                    <p>Lorem ipsum dolor sit amet, elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>,
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                    </ul>
                ]}
            />

            <Slab
                type= "lightgrey"
                title = "Light Grey"
                body = {[
                    <p>Lorem ipsum dolor sit amet, elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>,
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                    </ul>
                ]}
            />

        </div>
    )
  }
};

export default Slabs;
