module.exports = {
  name: "modern-wiki",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/modern-wiki/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
