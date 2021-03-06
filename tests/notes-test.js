(function(exports) {

  function testNoteTakesInTextUponInitiation() {
  
    var note = new Note('Need to check if this test works');

    if (note.text != 'Need to check if this test works') {
      return `Expected ${note.text} to equal "Need to check if this test works"`
    } else {return  `Expected ${note.text} to equal "Need to check if this test works" WORKING`}
  }
  exports.testNoteTakesInTextUponInitiation = testNoteTakesInTextUponInitiation;
})(this);

(function(exports) {

  function noteClassHasMethodThatReturnsTextFromNote() {

    var note = new Note('Need to see if this can be returned by the method showText');

    if (note.showText() != 'Need to see if this can be returned by the method showText') {
     return `Expected ${note.showText()} to equal "Need to see if this can be returned by the method showText"`
    } else {return `Expected ${note.showText()} to equal "Need to see if this can be returned by the method showText" WORKING`}
  }
  exports.noteClassHasMethodThatReturnsTextFromNote = noteClassHasMethodThatReturnsTextFromNote;
})(this);

testsToRun.push(testNoteTakesInTextUponInitiation());
testsToRun.push(noteClassHasMethodThatReturnsTextFromNote());