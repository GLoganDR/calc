'use strict';

//Chyld's code//
//
//function Calc(){}
//Calc.add = function(x,y){
//return x + y;
//};

function Calc(){}

Calc.add = function(x, y){
  return x + y;
};

Calc.sub = function(s, t){
  return s - t;
};

Calc.distance = function(p1, p2){
  var x = Math.pow((p2.x - p1.x), 2);
  var y = Math.pow((p2.y - p1.y), 2);
  
  return Math.sqrt(x + y);
};

Calc.line = function(p1, p2){
  var slope = (p1.y - p2.y) / (p1.x - p2.x);
  var yInt = p1.y-(slope * p1.x);
  
  if (yInt >= 0) {
    return ('y = ' + parseFloat(slope).toFixed(1) + 'x + ' + parseFloat(yInt).toFixed(1));
  }else{
    return ('y = ' + parseFloat(slope).toFixed(1) + 'x - ' + parseFloat(-yInt).toFixed(1));
  }
};
//Chyld's code for slope//
//Calc.line = function(p1,p2){
//var x = p2.x - p1.x;
//var y = p.2y - p1.y;
//var m = y/x;
//var b = p1.y - (m*p1.x);
//
//var sign = b < 0 ? '-' : '+';
//b = Math.abs(b);
//
//return m.toFixed(1) + 'x' + sign + b.toFixed(1);
//};

Calc.trip = function(stops){
  var sum = 0;

  for (var i = 0; i < (stops.length-1); i++){
    sum += Calc.distance(stops[i],stops[i+1]);
  }

  return sum;
};

Calc.mean = function(numbs){
  var sum = 0; 
  
  for(var i = 0; i< numbs.length; i++){
    sum += numbs[i];
  }
  sum /= numbs.length;
  return sum;
};

Calc.stdev = function(numbs){
  var sum = 0;
  var means = [];

  sum = Calc.mean(numbs);

  for (var i = 0; i < numbs.length; i++){
    var x = Math.pow (numbs[i]-sum, 2);
    means.push(x);
  }

  sum = Calc.mean(means);

  sum = Math.sqrt(sum);
  
  return sum;
};

module.exports = Calc;
