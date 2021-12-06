const getImageConfig = require("../src/action/_snapshotViewer.js");
const testData = require("./testData");

test('Check image configuration extraction', () => {
  var extracted = getImageConfig(testData.queryString);
  var model = testData.expectedResult;
  expect(extracted.payload).toEqual(model.payload);
  expect(extracted.width).toEqual(model.width);
  expect(extracted.height).toEqual(model.height);
});