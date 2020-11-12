class SingleNoteView {
    constructor(note = new Note) {
        this.note = note;
    }

    displayNote() {

        return "<div>" + this.note.showText() + "</div>"
    }
}