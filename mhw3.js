'use strict';

const api_key = 'd78d423f56d4447b1dde96e58bf54216';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

