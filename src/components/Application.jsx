import React, { PropTypes as PT } from 'react';
import { StoreMixin } from 'fluxible';
import AppStore from '../stores/ApplicationStore';

export default React.createClass({
  displayName: 'Application',
  mixins: [StoreMixin],
  statics: {
    storeListeners: [AppStore]
  },

  getInitialState () {
    return this.getStore(AppStore).getState();
  },

  onChnage () {
    var state = this.getStore(AppStore).getState();
    this.setState(state);
  },

  render () {
    return (
      <h1>Hello! { this.state.name }</h1>
    );
  }
});
