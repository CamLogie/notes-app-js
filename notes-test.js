(function(exports) {

  function testNoteTakesInTextUponInitiation() {
  
    var note = new Note('Need to check if this test works');

    if (note.text != 'Need to check if this test works') {
      document.querySelector('h2').textContent = `Expected ${note.text} to equal "Need to check if this test works"`
    } else {document.querySelector('h2').textContent = 'testNoteTakesInTextUponInitiation'}
  }
  testNoteTakesInTextUponInitiation();
})(this);