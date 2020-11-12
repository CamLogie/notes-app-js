(function(exports) {

  function noteControllerInnerHTML() {

    let noteController = new NoteController()
    noteController.insertHTMLString()
    let expectedOutput = '<ul><li><div>Favourite drink: seltzer</div></li></ul>'

    if (document.querySelector('#app').innerHTML != expectedOutput ) {
      return `Expected ${document.querySelector('#app').innerHTML} to equal ${expectedOutput}`
    } else { return `Expected ${document.querySelector('#app').innerHTML} to equal ${expectedOutput}: WORKING`}

  }

  exports.noteControllerInnerHTML = noteControllerInnerHTML;
})(this);