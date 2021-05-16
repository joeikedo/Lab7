// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

let numArray = [];

// Make sure you register your service worker here too

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}








//This code loads the entries from the website url into the DOM, and also has the event listener for clicking journal entries
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
        

        numArray.push(newPost); //Put all the entries in an array so that we have them in order by index so we can use this to get their number later on below
      });




      //Event handler for clicking on the journal entries
      document.querySelectorAll('journal-entry').forEach(item => {
        item.addEventListener('click', event => {
          //console.log(item.entry); 

          let entryNumber = numArray.indexOf(item) + 1;

          router.setState("single-entry", entryNumber); //Call router to change page appearance
          
          let entryPageElement = document.querySelector('entry-page');  //Need to delete/create a new entry-page element as per tip 4 of part 1a. (because otherwise the images stay in the entry-page element)
          entryPageElement.remove();

          let newEntryPageElement = document.createElement('entry-page');
          document.querySelector('body').appendChild(newEntryPageElement);
          newEntryPageElement.entry = item.entry
  
          

        })
      })




    });
});

