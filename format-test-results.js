selectQueryToShowOnPage = (element, text) => {

  document.querySelector(element).textContent = text;

};

selectQueryToShowOnPage('#constructor_text', testNoteTakesInTextUponInitiation());
selectQueryToShowOnPage('#showText', noteClassHasMethodThatReturnsTextFromNote());
