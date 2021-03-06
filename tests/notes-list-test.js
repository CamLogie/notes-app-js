(function(exports) {



  function noteListClassHasEmptyArrayUponIntitiation() {

    var noteList = new NoteList();

    if (noteList.list.length != 0) {
      return `Expected noteList.list to be an empty array`
    } else { return 'Expected noteList.list to be an empty array WORKING'}
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

    noteList.add('test');

    if (noteList.all()[0].text != 'test') {
      return `Expected ${noteList.all()[0].text} to contain 'test'`
    } else {
      return `Expected ${noteList.all()[0].text} to contain 'test': WORKING`
    }
  }
exports.itreturnsAllNotesFromList = itreturnsAllNotesFromList
exports.noteListClassHasEmptyArrayUponIntitiation = noteListClassHasEmptyArrayUponIntitiation;
exports.itAddNoteToList = itAddNoteToList;
})(this);

testsToRun.push(noteListClassHasEmptyArrayUponIntitiation());
testsToRun.push(itAddNoteToList());
testsToRun.push(itreturnsAllNotesFromList());
