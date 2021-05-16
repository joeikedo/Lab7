// router.js

export const router = {};


/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
//Note: entryNumber parameter is only used for single-entry display, the historyCheck parameter is there because for back/forward
//arrow calls to router.setState(), we don't want to push to history 
router.setState = function(pageType, entryNumber, historyCheck, item) {
  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   * 
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   * 
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState() 
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   *    4. For each <journal-entry> element, you can grab the JSON version of its info with .entry (e.g. someJournalEntryElement.entry)
   *       a. This is useful when viewing a single entry. You may notice an <entry-page> element in the HTML, this is the element that is displayed when the
   *          .single-entry class is applied to the body. You can populate this element by using .entry similarly. So if I wanted to grab a specific <journal-entry>
   *          and populate it's info into the <entry-page>, I would simply use an assignment of entryPageElement.entry = journalEntryElement.entry
   *       b. Clearing the <entry-page> element of its previous data can be a bit tricky, it might be useful to just delete it and insert a new blank one 
   *          in the same spot each time. Just a thought.
   *
   * - Answers to some questions you may have:
   *    1. You may add as many helper functions in this file as you like
   *    2. You may modify the parameters of setState() as much as you like
   */

  let body = document.querySelector('body'); 
  let header = document.querySelector('h1'); 


  if(pageType == "settings"){
    //Changing the page appearance
    body.className = ""; //Need to reset so that going to settings from a single entry makes the page empty
    body.classList.add("settings");
    header.innerHTML = "Settings"; //Changing header

    const state = { 'page_id': 1 }
    const title = ''
    const url = '#settings'

    if(historyCheck != 'false'){
      history.pushState(state, title, url)
    }

  }
  else if(pageType == "home"){
    body.className = ""; //(Remove class from <body> element to reset to default home page style)
    header.innerHTML = "Journal Entries"

    const state = { 'page_id': 2 }
    const title = ''
    const url = ' '
    
    if(historyCheck != 'false'){
      history.pushState(state, title, url)
    }
  }
  else if(pageType == "single-entry"){
    body.className = "";
    body.classList.add("single-entry");
    header.innerHTML = "Entry " + entryNumber;

    const state = { 'page_id': entryNumber + 2 }
    const title = ''
    const url = '#entry' + entryNumber

    if(historyCheck != 'false'){
      history.pushState(state, title, url)
    }

  }

}


let settingsCog = document.querySelector('img');
let header = document.querySelector('h1');

//This is the event handler for the settings cog button being clicked. 
settingsCog.addEventListener('click', () => {
  router.setState("settings");

});


header.addEventListener('click', () => {
  router.setState("home");
});



//This event handles using the back/ forward arrow
var defaultURL = window.location.href;
window.addEventListener('popstate', (event) => {
  
  let myLocation = window.location.href;
  //console.log(defaultURL);
  
  //console.log(myLocation);
  let body = document.querySelector('body'); 
  let header = document.querySelector('h1'); 
  //console.log(event.state);




  if(myLocation.includes("settings")){
   router.setState("settings", "null", "false") //I think the issue was that you arent' supposed to push to history for back arrow things
  }
  else if(myLocation.includes('entry1') && myLocation.slice(-1) == '0'){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[9]

    //console.log('help me');

    router.setState('single-entry', 10, "false");
  }
  else if(myLocation.includes('entry2')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[1]

    router.setState('single-entry', 2, "false")
  }
  else if(myLocation.includes('entry3')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[2]

    router.setState('single-entry', 3, "false")
  }
  else if(myLocation.includes('entry4')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[3]

    router.setState('single-entry', 4, "false")
  }
  else if(myLocation.includes('entry5')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[4]


    router.setState('single-entry', 5, "false")
  }
  else if(myLocation.includes('entry6')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[5]

    router.setState('single-entry', 6, "false")
  }
  else if(myLocation.includes('entry7')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[6]

    router.setState('single-entry', 7, "false")
  }
  else if(myLocation.includes('entry8')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[7]

    router.setState('single-entry', 8, "false")
  }
  else if(myLocation.includes('entry9')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[8]

    router.setState('single-entry', 9, "false")
  }
  else if(myLocation.includes('entry1')){
    let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
    entryPageElement.remove();
    let newEntryPageElement = document.createElement('entry-page');
    document.querySelector('body').appendChild(newEntryPageElement);
    newEntryPageElement.entry = numArray[0]

    router.setState('single-entry', 1, "false")
  }
  else{
    router.setState('home', 'null', 'false');
  }
  

});



let numArray = [];
//This code loads the entries from the website url into the DOM, and also has the event listener for clicking journal entries
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        //let newPost = document.createElement('journal-entry');
        //newPost.entry = entry;
        //document.querySelector('main').appendChild(newPost);
        

        numArray.push(entry); //Put all the entries in an array so that we have them in order by index so we can use this to get their number later on below
      });
    });
  });