// document.querySelector('#app').textContent = 'howdy'

class NoteController {

    constructor(noteList = new NoteList()) {

        this.noteList = noteList
        this.noteList.add('Favourite drink: seltzer');
        this.view = new NoteListView(this.noteList)

    }

    insertHTMLString() {

        //  document.querySelector('#app').innerHTML = this.view.returnHTMLString()
        // document.querySelector('#app').textContent = this.view.returnHTMLString()
        document.getElementById('app').innerHTML = this.view.returnHTMLString()
            // document.getElementById('app').textContent = this.view.returnHTMLString()

    }

}

var noteController = new NoteController;
noteController.insertHTMLString();