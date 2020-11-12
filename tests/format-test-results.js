selectQueryToShowOnPage = (element, text) => {

    document.querySelector(element).textContent = text;

};

selectQueryToShowOnPage('#constructor_text', testNoteTakesInTextUponInitiation());
selectQueryToShowOnPage('#showText', noteClassHasMethodThatReturnsTextFromNote());
selectQueryToShowOnPage('#emptyArray', noteListClassHasEmptyArrayUponIntitiation());
selectQueryToShowOnPage('#notemptyArray', itAddNoteToList());
selectQueryToShowOnPage('#containsTestNote', itreturnsAllNotesFromList());
selectQueryToShowOnPage('#constructorListView', itChecksIfANotesListCanBePassedWhenInitialized());
selectQueryToShowOnPage('#HTMLString', itReturnsHTMLString());
selectQueryToShowOnPage('#innerHTML', noteControllerInnerHTML());
selectQueryToShowOnPage('#singleNoteView', itChecksIfANoteCanBePassedWhenInitialized());
selectQueryToShowOnPage('#singleNoteViewshowfullnote', itReturnsTheFullTextOfNote());