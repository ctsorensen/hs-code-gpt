// import fetch from 'node-fetch';
async function getSuggestion(description){
var url = 'http://localhost:8080/suggest?';

//call /suggest url from app.js
try {
    const response = await fetch(url + description);
    const text = await response.text();
    console.log('responseText: '+ text);
    return text;
} catch (e){
    console.log(e);
}

}

window.getSuggestion = getSuggestion;