var user = "highfidelity/";
var repository = "hifi_tests/";
var branch = "master/";
var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Point light", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest();
    spectatorCameraConfig.position = { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z - 0.2 };

    // Test material matrix
    Script.include("../matrix.js?raw=true")

    // List here all the entries of the Material Matrix tested in this test
    var TEST_CASES = [
        {name:"hifi_emissiveV_albedoV_ao",  a:0, b:0, c:-0.5},
        {name:"hifi_emissiveM_albedoV_ao",  a:0, b:0, c:0.5},  
    ];

    var createdEntities = [];
    autoTester.addStep("Set up test case", function () {
        createdEntities = addCases(TEST_CASES, true, true)
    });
    
    autoTester.addStepSnapshot("Show effects of emmisive materials");
    
    autoTester.addStep("Clean up after test", function () {
        for (var i = 0; i < createdEntities.length; i++) {
            Entities.deleteEntity(createdEntities[i]);
        }
    });
    
    var result = autoTester.runTest(testType);
});
