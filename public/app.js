"use strict";

/* global WebsyDesigns include localStorage */

/* global WebsyDesigns */
var el = document.getElementById('all-phones');
var apiService = new WebsyDesigns.APIService('https://my-json-server.typicode.com/gmunro90/wd-1/');
apiService.get('phones').then(function (phones) {
  var html = phones.map(function (phone) {
    return "\n    <div class=\"card\">\n    <img src=".concat(phone.image_url, " width=\"200px class=\"card--image\">\n    <div class=\"card--stats\">\n        <span class=\"card--star\">").concat(phone.rating, "</span>\n    </div>\n    <p class=\"card--title\">").concat(phone.name, "</p>\n    <p class=\"card--price\"><span class=\"bold\">").concat(phone.price, "</span></p>\n    </div>\n    ");
  }).join('');
  el.innerHTML = html;
}); // router initialisation

var options = {
  defaultView: 'home'
};
var router = new WebsyDesigns.Router(options);
router.init();
var switchTest = new WebsyDesigns.Switch('dark-mode', {
  label: '☀️/🌚',
  onToggle: function onToggle(a, b, c) {}
});
var darkMode = localStorage.getItem('darkMode');

var enableDarkMode = function enableDarkMode() {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
};

var disableDarkMode = function disableDarkMode() {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
};

var darkModeToggle = document.querySelector('#dark-mode');
darkModeToggle.addEventListener('click', function () {
  if (darkMode !== 'enabled') {
    enableDarkMode();
  }
});
