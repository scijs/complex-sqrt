# complex-sqrt

[![Build Status](https://travis-ci.org/scijs/complex-sqrt.svg?branch=master)](https://travis-ci.org/scijs/complex-sqrt) [![npm version](https://badge.fury.io/js/complex-sqrt.svg)](http://badge.fury.io/js/complex-sqrt)  [![Dependency Status](https://david-dm.org/scijs/complex-sqrt.svg)](https://david-dm.org/scijs/complex-sqrt)

Floating point complex square root

## Intro

Calculating the complex square root requires some care. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results. A simple remedy is[1]:

![Complex w](docs/images/w.png)

Then using w,

![Complex sqrt](docs/images/sqrt.png)

## Usage

##### `require('complex-sqrt')( a, b )`

Calculates sqrt(a + ib) and returns a two-element JS array with the real and imaginary components of the answer.

## Example

```javascript
var sqrt = require('complex-sqrt');

var result = sqrt( 1, 2 );

// result = [ 1.272019649514069, 0.7861513777574233 ]
```

## References

[1] Press, William H. *[Numerical Recipes 3rd Edition: The Art of Scientific Computing](https://books.google.com/books?id=1aAOdzK3FegC&pg=PA226&lpg=PA226&dq=complex+division+underflow&source=bl&ots=3jPhF9Irii&sig=JwEAckqmfBNd8dIQTrUD-Pk9dzE&hl=en&sa=X&ei=-VZQVYDpJImRyATAoYCwBg&ved=0CDwQ6AEwBA#v=onepage&q=complex%20division%20underflow&f=false)*. Cambridge University Press, 2007.

## Credits
(c) 2015 Ricky Reusser. MIT License
