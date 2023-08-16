/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright LeraNeroznak 2023 All rights reserved
 * @author LeraNeroznak <neroznaklera4@gmail.com>
 */

'use strict';

const api_key = "1dd36eb0dc06d32eca42596aaae85b70";

/**
 * 
 * @param {string} URL  API url
 * @param {function} callback callback
 */
export const fetchData = function (URL, callback) {
   fetch(`${URL}&appid=${api_key}`)
   .then(res => res.json())
   .then(data => callback(data));
}
const urlParams = new URLSearchParams(window.location.search);
const lat = urlParams.get('lat');
const lon = urlParams.get('lon');
export const url = {
   currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&`
   },
   forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
   },
   airPollution(lat, lon) {
      return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
   },
   reverseGeo(lat, lon) {
      return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
   },
   /**
    * @param {string} query 
    */
   geo(query) {
      return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
   }
}
