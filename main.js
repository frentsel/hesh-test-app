var content = document.getElementById('content');

window.onhashchange = function() {
  var xhr = new XMLHttpRequest();
  var pageName = location.hash.slice(1);
  xhr.open('get', `pages/${pageName}.html`);
  xhr.send();
  xhr.onload = function(){
    content.innerHTML = this.responseText;
  }
};

location.hash = '#home';