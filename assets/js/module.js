/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
   "Неділя",
   "Понеділок",
   "Вівторок",
   "середа",
   "четвер",
   "п'ятниця",
   "субота"
];

export const monthNames = [
   "Січень",
   "Лютий",
   "Березень",
   "Квітень",
   "Травень",
   "Червень",
   "Липень",
   "Серпень",
   "Вересень",
   "Жовтень",
   "Листопад",
   "Грудень"
];

/**
 * @param {number} dateUnix 
 * @param {number} timezone 
 * @returns {string}
 */
export const getDate = function (dateUnix, timezone) {
   const date = new Date((dateUnix + timezone) * 1000);
   const weekDayName = weekDayNames[date.getUTCDay()];
   const monthName = monthNames[date.getUTCMonth()];

   return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */
export const getTime = function(timeUnix, timezone) {
   const date = new Date((timeUnix + timezone) * 1000);
   const hours = date.getUTCHours();
   const minutes = date.getUTCMinutes();
   const period = hours >= 12 ? "PM" : "AM";

   return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */
 export const getHours = function(timeUnix, timezone) {
   const date = new Date((timeUnix + timezone) * 1000);
   const hours = date.getUTCHours();
   const period = hours >= 12 ? "PM" : "AM";

   return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps 
 * @returns {number}
 */
export const mps_to_kmh = mps => {
   const mph = mps * 3600;
   return mph / 1000;
}

export const aqiText = {
   1: {
      level: "Добре",
      message: "Якість повітря вважається задовільною, а забруднення повітря становить незначний ризик або взагалі відсутнє"
   },
   2: {
      level: "Ясно",
      message: "Якість повітря є прийнятною, однак для деяких забруднювачів може виникнути помірне занепокоєння щодо здоров'я дуже невеликої кількості людей, які є надзвичайно чутливими до забруднення повітря."
   },
   3: {
      level: "Помірно",
      message: "Члени вразливих груп можуть відчути вплив на здоров'я. Широка громадськість, ймовірно, не зазнає впливу"
   },
   4: {
      level: "Погано",
      message: "Кожен може почати відчувати наслідки для здоров'я; члени вразливих груп можуть відчувати більш серйозні наслідки для здоров'я"
   },
   5: {
      level: "Дуже погано",
      message: "Медичні попередження про надзвичайні ситуації. Все населення з більшою ймовірністю може постраждати"
   }
}