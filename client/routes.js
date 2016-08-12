import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/App';
import DesignPatterns from './components/page-specific/DesignPatterns/DesignPatterns';
import Headers from './components/page-specific/DesignPatterns/Headers';
import Slabs from './components/page-specific/DesignPatterns/Slabs';
import ExampleForm from './components/page-specific/DesignPatterns/ExampleForm';

export default (
  <Route path='/' component={App}>

    <IndexRoute component={DesignPatterns} /> // If no path defined load the full design pattern list

    <Route path="/designpatterns/Headers" component={Headers} />
    <Route path="/designpatterns/Slabs" component={Slabs} />
    <Route path="/designpatterns/Form" component={ExampleForm} />

  </Route>
)

// <Route path="/designpatterns/fonts" component={ColorPalette} />

// <Route path="/designpatterns/fonts" component={Tabs} />
// <Route path="/designpatterns/fonts" component={Inputs} />
// <Route path="/designpatterns/fonts" component={Shortcuts} />
// <Route path="/designpatterns/fonts" component={Images} />
// <Route path="/designpatterns/fonts" component={Buttons} />
// <Route path="/designpatterns/fonts" component={Modals} />
// <Route path="/designpatterns/fonts" component={Fonts} />
// <Route path="/designpatterns/fonts" component={ProgressBars} />
// <Route path="/designpatterns/fonts" component={Tables} />
