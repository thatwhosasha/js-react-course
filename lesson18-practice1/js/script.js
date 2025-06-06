'use strict';

// 1)

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// 2)

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//3

const answerAboutFilm = prompt('Один из последних просмотренных фильмов?');
const answerEstimation = prompt('На сколько оцените его?');

const movies = {
    movie: answerAboutFilm,
    estimation: answerEstimation,
};
