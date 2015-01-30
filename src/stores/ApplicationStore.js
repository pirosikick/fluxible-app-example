'use strict';
import createStore from "fluxible/utils/createStore";

var ApplicationStore = createStore({
  storeName: 'ApplicationStore',
  handlers: {
  },
  initialize () {
    this.title = 'Hello! pirosikick!';
  },
  getState () {
    return {
      title: this.title
    };
  },
  dehydrate () {
    return this.getState();
  },
  rehydrate (state) {
    this.title = state.title;
  }
});

export default ApplicationStore;
