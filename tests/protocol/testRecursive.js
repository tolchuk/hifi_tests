// This is an automatically generated file, created by auto-tester
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var nitpick = createNitpick(Script.resolvePath("."));

var testsRootPath = nitpick.getTestsRootPath();

if (typeof Test !== 'undefined') {
    Test.wait(10000);
};

nitpick.enableRecursive();
nitpick.enableAuto();

Script.include(testsRootPath + "protocol/zone/test.js");
Script.include(testsRootPath + "protocol/polyline/test.js");
Script.include(testsRootPath + "protocol/particleEffect/test.js");
Script.include(testsRootPath + "protocol/material/test.js");
Script.include(testsRootPath + "protocol/line/test.js");
Script.include(testsRootPath + "protocol/light/test.js");
Script.include(testsRootPath + "protocol/box/test.js");

nitpick.runRecursive();
