(function(exports) {



  function noteListClassHasEmptyArrayUponIntitiation() {

    var noteList = new NoteList();

    if (noteList.list.length != 0) {
      return `Expected noteList.list to be an empty array`
    } else { return 'NoteList creates an empty array upon initialization: WORKING'}
  }

  function itAddNoteToList() {

    var noteList = new NoteList();

    var note = new Note("test")

    noteList.add(note);

    if (noteList.list.length != 1) {
      return `noteList.list doesnt have a test note`
    } else {
      return "Expected noteList.list to have test note: WORKING "
    }
  }

  function itreturnsAllNotesFromList() {

    var noteList = new NoteList();

    var note = new Note("test")

    noteList.add(note);


    if (noteList.all == []) {
      return `noteList.list doesnt have a test note`
    } else {
      return "Expected noteList.list to have test note: WORKING "
    }
  }

exports.noteListClassHasEmptyArrayUponIntitiation = noteListClassHasEmptyArrayUponIntitiation;
exports.itAddNoteToList = itAddNoteToList;
})(this);
