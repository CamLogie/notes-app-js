(function(exports) {

    function itChecksIfANoteCanBePassedWhenInitialized() {
        var note = new Note("This is a test")
        var singleNoteView = new SingleNoteView(note)

        if (!singleNoteView.note instanceof Note) {
            return `Expected singleNoteView.note to be a note`
        } else {
            return `Expected singleNoteView.note to be a note WORKING`
        }

    }

    function itReturnsTheFullTextOfNote() {
        var note = new Note("This is a test")
        var singleNoteView = new SingleNoteView(note)

        if (singleNoteView.displayNote() != "<div>This is a test</div>") {
            return `Expected singlenote.displaynote to display the full text of the note`
        } else {
            return `Expected singlenote.displaynote to display the full text of the note WORKING`
        }

    }

    exports.itChecksIfANoteCanBePassedWhenInitialized = itChecksIfANoteCanBePassedWhenInitialized
    exports.itReturnsTheFullTextOfNote = itReturnsTheFullTextOfNote
})(this);