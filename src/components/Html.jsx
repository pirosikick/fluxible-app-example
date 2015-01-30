'use strict';
import React from 'react';

var Html = React.createClass({
  render () {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <title>{ this.props.title }</title>
      </head>
      <body dangerouslySetInnerHTML={{ __html: this.props.markup }}>
      </body>
      <script src="/public/scripts/client.bundle.js"></script>
      </html>
    );
  }
});

export default Html;
