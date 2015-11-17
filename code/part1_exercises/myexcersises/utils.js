"use strict";
const _ = require('ramda');

module.exports = _.curry(function(func, functor){
    return functor.map(func);
});
