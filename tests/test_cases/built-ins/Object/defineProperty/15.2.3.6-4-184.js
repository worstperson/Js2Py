// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-184
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is boundary value 2^32 - 1 (15.4.5.1 step
    4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, 4294967295, {
            value: 100
        });

        return arrObj.hasOwnProperty("4294967295") && arrObj.length === 0 && arrObj[4294967295] === 100; ;
    }
runTestCase(testcase);
