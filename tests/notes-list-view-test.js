(function(exports) {

  function itChecksIfANotesListCanBePassedWhenInitialized() {

    var noteList = new NoteList()
    noteList.add('test')
    noteList.add('another example')

    var noteListView = new NoteListView(noteList)

    if(noteListView.noteList != noteList) {
      return `Expected ${noteListView.noteList} to be a note list`
    }



  }


})