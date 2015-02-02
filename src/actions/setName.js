'use strict';

export default function setName (context, name, done) {
  context.dispatch('SET_NAME', name);
  done();
};

