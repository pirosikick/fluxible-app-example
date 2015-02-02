'use strict';

import express from 'express';
import React from 'react';
import app from './app';
import Html from './components/Html.jsx';
import setName from './actions/setName';

var server = express();
var HtmlComponent = React.createFactory(Html);

server.use('/assets', express.static(`${ __dirname }/../assets`));
server.use('/public', express.static(`${ __dirname }/../build`));

server.use(function (req, res, next) {
  var context = app.createContext();

  context
    .getActionContext()
    .executeAction(setName, 'pirosikick', function (err) {
      if (err) {
        next(err);
      }

      var AppComponent = app.getAppComponent();

      var html = React.renderToStaticMarkup(HtmlComponent({
        title: 'Hello! pirosikick',
        markup: React.renderToString(AppComponent({
          context: context.getComponentContext()
        }))
      }));

      res.write(html);
      res.end();
    })
});

server.listen(process.env.NODE_PORT || 8080);
