var httpRequest = new XMLHttpRequest();

function paginate(pages_requested) {
    var page = 1;
    var overall = 0;

    function alertContents() {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            var text = JSON.parse(httpRequest.responseText);
            var results = [];
            var space = "";
            for (var i = 0; i < text.length; i++){
                if (i < 10){
                    space="  ";
                } else if (i < 100) {
                    space = " ";
                } else {
                    space = "";
                }
                results.push("<a href=\"" + text[0].url + "\"> gist" + space + (overall+i) + "-->" + text[i].description + "</a><br>");
                }
            } else {
            alert('There was a problem with the request.');
            }
            saveLocalStorage(results);
            displayLocalStorage('id'+page);
        }
    }

    function getGistList() {
        if(!httpRequest){
            throw 'Unable to create httpRequest';
        }
        
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://api.github.com/gists/public?page='+ page + '&per_page=30', false);
        httpRequest.send(null);
    }

    while (page <= pages_requested){
        getGistList();
        page += 1;
        overall += 30;
    }
}

window.onload = function() {
    document.getElementById('id1').innerHTML = "Optional, enter number of pages of results and pick filters";
    document.getElementById('id2').innerHTML = "Click Search!";
    //getGistList();
}

function displayLocalStorage(id) {
    var storedList = JSON.parse(localStorage.getItem('storage1'));
    var htmlstring = "";
    for (var i = 0; i < storedList.length; i++){
        htmlstring += storedList[i];
    }
    document.getElementById(id).innerHTML = htmlstring;
}

function saveLocalStorage(items) {
    localStorage.setItem('storage1', JSON.stringify(items));
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
    paginate(sc);
    console.log(sc);//debug

}