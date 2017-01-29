
// document.designMode = 'on';
// This document.designMode is the other alternative

const editor = document.querySelector('.editSpace');
editor.contentEditable = true;

// editor.focus();

function command(name) {
  let success;
  try {
    success = document.execCommand(name, false, null);
  }
  catch(error) {
     alert(error);
  }

  if(!success) {
    const supported = isSupported(name);
    const msg = supported ? 'Unknown error. Is anything selected?' : 'Command is not supported by your browser.';
    alert(msg);
  }
}


function isSupported(name) {
  return document.queryCommandSupported(name);
}

// create an observer instance
var observer = new MutationObserver(observer);

function observer(mutations) {
  mutations.forEach(checkMutation);
}

function checkMutation(mutation) {
  console.log('Content:', getAttribute(mutation));
  console.log('New Text:', mutation.target.data);
}

// configuration of the observer:
var config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};

// pass in the target node, as well as the observer options
observer.observe(editor, config);

function getAttribute(mutation) {
  return mutation.target.parentElement && mutation.target.parentElement.attributes[0] && mutation.target.parentElement.attributes[0].value;
}
