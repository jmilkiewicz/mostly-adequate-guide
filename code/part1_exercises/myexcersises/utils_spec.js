"use strict";
var _ = require('ramda');

var map = require('./utils');
var Maybe = require('./maybe');
var expect = require("chai").expect;

let safeHead = array => Maybe.of(array[0]);

describe("a generic map", function(){

    it("shall call map", function(){
        let result = map( a => a + 'result')(Maybe.of(3));

        expect(result).to.be.deep.equal(Maybe.of('3result'));
    });

    let safeStreet =  _.compose(
        map(_.prop('street')),
        safeHead,
        _.prop('adresses')
    );

    it("long ", function(){
        expect(safeStreet({adresses:[]})).to.be.deep.equal(Maybe.of(null));
    });

    it("long 2", function(){
        expect(safeStreet({adresses:[{street:'Binger'}]})).to.be.deep.equal(Maybe.of('Binger'));
    });
});
