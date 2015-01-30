'use strict';

import express from 'express';
import React from 'react';
import app from './app';
import Html from './components/Html.jsx';

var server = express();
var HtmlComponent = React.createFactory(Html);

server.use('/assets', express.static(`${ __dirname }/../assets`));
server.use('/public', express.static(`${ __dirname }/../build`));

server.use(function (req, res, next) {
  var AppComponent = app.getAppComponent();

  var html = React.renderToStaticMarkup(HtmlComponent({
    title: 'Hello! pirosikick',
    name: 'pirosikick',
    markup: React.renderToString(AppComponent({}))
  }));

  res.write(html);
  res.end();
});

server.listen(process.env.NODE_PORT || 8080);
