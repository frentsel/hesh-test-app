var content = document.getElementById('content');

window.onhashchange = function() {
content.innerHTML = document.getElementById(location.hash.slice(1))
  .innerHTML;
};

location.hash = '#home';