'use strict';

module.exports = function ( a, b ) {
  var w, absa, absb, boa, aob;
  if( a==0 && b== 0 ) {
    return [0,0];
  } else if ((absa=Math.abs(a)) >= (absb=Math.abs(b))) {
    boa = b/a;
    w = Math.sqrt(absa) * Math.sqrt((1+Math.sqrt(1+boa*boa))*0.5);
  } else {
    aob = a/b;
    w = Math.sqrt(absb)*Math.sqrt(0.5*(Math.abs(aob) + Math.sqrt(1+aob*aob)));
  }

  if( w===0 ) {
    return [0,0];
  } else if (a > 0) {
    return [w, 0.5*b/w];
  } else if ( b >= 0 ) {
    return [0.5*absb/w, w];
  } else {
    return [0.5*absb/w, -w]
  }

};
