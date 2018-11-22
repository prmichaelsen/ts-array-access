"use strict";
{
    var response = function () { return []; };
    var test = response();
    // expected [ts] error
    var result = test[0];
}
{
    var test = [];
    // expected [ts] error
    var result = test[0];
}
