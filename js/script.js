"use strict";

let numberOfFilms;

function start() {

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}
start();

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}


function rememberMyFilms() {

   for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("на сколько оцените его?", "");


      if (a !== "" && b !== "" && b !== null && a !== null && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log("DONE");
      } else {
         console.log("ERROR")
         i--;
      }
   }
}

rememberMyFilms();



function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка")
   }

}
detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genre;
   }
}
writeYourGenres();
