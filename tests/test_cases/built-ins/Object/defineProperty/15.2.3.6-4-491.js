// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-491
description: >
    ES5 Attributes - fail to update [[Enumerable]] attribute of
    accessor property ([[Get]] is undefined, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: setFunc,
            enumerable: false,
            configurable: false
        });

        var result1 = false;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        for (var p1 in obj) {
            if (p1 === "prop") {
                result1 = true;
            }
        }

        try {
            Object.defineProperty(obj, "prop", {
                enumerable: true
            });

            return false;
        } catch (e) {
            var result2 = false;
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            for (var p2 in obj) {
                if (p2 === "prop") {
                    result2 = true;
                }
            }

            return !result1 && !result2 && desc1.enumerable === false && desc2.enumerable === false && e instanceof TypeError;
        }
    }
runTestCase(testcase);
