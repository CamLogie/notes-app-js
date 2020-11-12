class NoteListView {
  constructor(NoteList){
    this.noteList = NoteList;
  }

  returnHTMLString() {
    var openTag = "<ul>"
    var closingTag = "</ul>"

    var body = this.noteList
      .all()
      .map(text => "<li><div>" + text.showText() + "</div></li>")
      .join("")
      return openTag + body + closingTag;
  }
}
