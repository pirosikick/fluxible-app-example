'use strict';

import React from 'react';
import app from './app';

var context = app.createContext();

React.render(app.getAppComponent()({}), document.body);
