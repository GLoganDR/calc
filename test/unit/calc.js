/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });
  
  describe('.sub', function(){
    it('should subtract two numbers', function(){
      var diff = Calc.sub(7,3);
      expect(diff).to.equal(4);
    });
  });
  
  describe('.distance', function(){
    it('should calculate distance between two points', function(){
      var distance = Calc.distance({x:5,y:3}, {x:8,y:7});
      expect(distance).to.equal(5);
    });
  });
  
  describe('.line', function(){
    it('should calculate the slope of a line', function(){
      var line = Calc.line({x:8,y:7}, {x:6,y:3});
      expect(line).to.equal('y = 2.0x - 9.0');
      //Chyld's Test for slope//
      //describe('.line', function(){
      //it('should find the equation of a line', function(){
      //expect(Calc.line({x:3,y:4}, {x:7,y:12})).to.be.equal('2.0x-2.0');
      //expect(Calc.line({x:3,y:14}, {x:7,y:12})).to.be.equal('-5x+-15.5');
      //});
      //});
    });
  });
  
  describe('.trip', function(){
    it('should calculate the overall trip distance with multiple stops', function(){
      var trip = Calc.trip([{x:5,y:5},{x:8,y:9},{x:11,y:13},{x:14,y:17},{x:17,y:21}]);
      expect(trip).to.equal(20);
    });
  });

  describe('.mean', function(){
    it('should find the average of the array of numbers', function(){
      var mean = Calc.mean([1,3,5,7,9]);
      expect(mean).to.equal(5);
    });
  });

});



