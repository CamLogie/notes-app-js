(function(exports) {

  function noteListClassHasEmptyArrayUponIntitiation() {

    var noteList = new NoteList();

    if (noteList.list.length != 0) {
      return `Expected noteList.list to be an empty array`
    } else { return 'NoteList creates an empty array upon initialization: WORKING'}
    
  }
exports.noteListClassHasEmptyArrayUponIntitiation = noteListClassHasEmptyArrayUponIntitiation;
})(this);