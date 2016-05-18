// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-6-3
description: >
    Array.prototype.lastIndexOf returns -1 when 'fromIndex' is length
    of array - 1
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3].lastIndexOf(3, 1) === -1;
    }
runTestCase(testcase);