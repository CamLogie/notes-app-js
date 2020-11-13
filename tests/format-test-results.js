var testsToRun = []

function print(arg) {

  console.log(arg)

}

 function callBack(print, testsToRun) {

  print(testsToRun)  
  
};

  function createTestHTMLString(testsToRun) {
    body = testsToRun.map(test => '<li><div>' + test + '</div></li>').join("")
    return "<ul>" + body + "</ul>"
  }

  function insertTestHTMLString(createTestHTMLString) {

    document.querySelector('#tests').innerHTML = createTestHTMLString

  }

  insertTestHTMLString(createTestHTMLString(testsToRun));



// callBack(print, testsToRun)


// selectQueryToShowOnPage = (element, text) => {

//     document.querySelector(element).textContent = text;

// };

// selectQueryToShowOnPage('#constructor_text', testNoteTakesInTextUponInitiation());
// selectQueryToShowOnPage('#showText', noteClassHasMethodThatReturnsTextFromNote());
// selectQueryToShowOnPage('#emptyArray', noteListClassHasEmptyArrayUponIntitiation());
// selectQueryToShowOnPage('#notemptyArray', itAddNoteToList());
// selectQueryToShowOnPage('#containsTestNote', itreturnsAllNotesFromList());
// selectQueryToShowOnPage('#constructorListView', itChecksIfANotesListCanBePassedWhenInitialized());
// selectQueryToShowOnPage('#HTMLString', itReturnsHTMLString());
// selectQueryToShowOnPage('#innerHTML', noteControllerInnerHTML());
// selectQueryToShowOnPage('#singleNoteView', itChecksIfANoteCanBePassedWhenInitialized());
// selectQueryToShowOnPage('#singleNoteViewshowfullnote', itReturnsTheFullTextOfNote());