class NoteList {

  constructor() {

    this.list = []
  }

  add(note) {
    return this.list.push(note);
  }

  all() {

    return this.list;

  }
}
