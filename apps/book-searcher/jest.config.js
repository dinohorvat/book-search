module.exports = {
  name: 'book-searcher',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/book-searcher',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
