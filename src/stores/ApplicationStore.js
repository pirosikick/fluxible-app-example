'use strict';
import createStore from "fluxible/utils/createStore";

export default createStore({
  storeName: 'ApplicationStore',
  handlers: {
    'SET_NAME': 'handleSetName'
  },
  initialize () {
    this.name = '';
  },
  getState () {
    return {
      name: this.name
    };
  },
  handleSetName: function (name) {
    this.name = name;
    this.emitChange();
  },
  dehydrate () {
    return this.getState();
  },
  rehydrate (state) {
    this.title = state.title;
  }
});
