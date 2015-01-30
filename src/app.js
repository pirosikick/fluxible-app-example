'use strict';
import React from 'react';
import FluxibleApp from 'fluxible';

import AppComponent from './components/Application.jsx';
import AppStore from './stores/ApplicationStore';

var app = new FluxibleApp({ appComponent: React.createFactory(AppComponent) });

app.registerStore(AppStore);

export default app;
