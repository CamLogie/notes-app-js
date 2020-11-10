class NoteList {

  constructor() {

    this.list = []
  }

  add(note) {
    return this.list.push(new Note(note));
  }

  all() {

    return this.list;

  }
}
