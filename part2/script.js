var httpRequest = new XMLHttpRequest();

function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var text = JSON.parse(httpRequest.responseText);
        saveLocalStorage("<a href=\""+text[0].url+"\"> 1." + text[0].description + "</a>");
        displayLocalStorage();
      } else {
        alert('There was a problem with the request.');
      }
    }
}

function getGistList() {
    
    if(!httpRequest){
        throw 'Unable to create httpRequest';
    }
    
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://api.github.com/gists/public', true);
    httpRequest.send(null);
}

window.onload = function() {
    document.getElementById('id1').innerHTML = "Optional, enter number of pages of results and pick filters";
    document.getElementById('id2').innerHTML = "Click Search!";
    //getGistList();
}

function displayLocalStorage() {
    document.getElementById('id1').textContent = localStorage.getItem('storage1');
    document.getElementById('id2').innerHTML = localStorage.getItem('storage1');
}

function saveLocalStorage(item) {
    localStorage.setItem('storage1', item);
}

function clearLocalStorage() {
    localStorage.clear();
}

function searchTheThings(){
    //grab the number of pages they want
    var sc = parseInt(document.getElementsByName('searchcount')[0].value, 10);
    //throw away anything that isn't a number from 1 to 5
    if (isNaN(sc) || (sc > 5) || (sc < 1)) {
        sc = 1;
    }
    console.log(sc);//debug
    saveLocalStorage(sc);
    displayLocalStorage();
}