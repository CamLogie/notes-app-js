(function(exports) {

  function itChecksIfANotesListCanBePassedWhenInitialized() {

    var noteList = new NoteList()
    noteList.add('test')
    noteList.add('another example')

    var noteListView = new NoteListView(noteList)

    if(noteListView.noteList != noteList) {
      return `Expected noteListView.noteList to be a note list`
    } else {
      return `Expected noteListView.noteList to be a note list WORKING`
    }
  }

  function itReturnsHTMLString() {

    var noteList = new NoteList()
    noteList.add('test')
    noteList.add('another example')

    var noteListView = new NoteListView(noteList)

    if (noteListView.returnHTMLString() != '<ul><li><div>test</div></li><li><div>another example</div></li></ul>'){
      return `Expected string ${noteListView.returnHTMLString()} equal <ul><li><div>test</div></li><li><div>another example</div></li></ul>`
    }else {
      return 'Expected string ${noteListView.returnHTMLString} equal <ul><li><div>test</div></li><li><div>another example</div></li></ul> WORKING'
    }

  }
exports.itReturnsHTMLString = itReturnsHTMLString
exports.itChecksIfANotesListCanBePassedWhenInitialized = itChecksIfANotesListCanBePassedWhenInitialized
})(this);
