// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
// import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export const SITE_TITLE = 'Detikcom Project.';
export const SITE_DESCRIPTION = 'Welcome to Detikcom Project!';
export const BASE_URL = import.meta.env.BASE_URL;
export const navList = [
    {
        name: 'HOME',
        url: `${BASE_URL}`
    },
    {
        name: 'MOVIE',
        url: `${BASE_URL}movie.html`,
        submenu: [
            { name: "Movie News", url: `${BASE_URL}indeks-subkanal.html`},
            { name: "Movie Review", url: `${BASE_URL}indeks-review-movie.html`},
            { name: "Series Update", url: `#`},
            { name: "Behind The Scene", url: `#`},
            { name: "Cinema Talk", url: `#`},
        ]
    },
    {
        name: 'MUSIC',
        url: `${BASE_URL}music.html`,
        submenu: [
            { name: "What's New", url: `#`},
            { name: "Music of The Week", url: `#`},
            { name: "Main Stage", url: `#`},
            { name: "Music Library", url: `#`},
        ]
    },
    {
        name: 'KOREAN WAVE',
        url: `${BASE_URL}indeks-korean-wave.html`,
        submenu: [
            { name: "K-Pop", url: `#`},
            { name: "K-Drama", url: `#`},
            { name: "K-Talk", url: `#`},
        ]
    },
    {
        name: 'CULTURE',
        url: `${BASE_URL}culture.html`,
        submenu: [
            { name: "Anime", url: `#`},
            { name: "Comic", url: `${BASE_URL}indeks-comic.html`},
            { name: "Book", url: `#`},
            { name: "Art", url: `#`},
            { name: "Spotlight", url: `#`},
        ]
    },
    {
        name: 'AWARDS',
        url: `${BASE_URL}awards.html`
    },
    {
        name: 'FOTO',
        url: `${BASE_URL}indeks-foto.html`
    },
    {
        name: 'VIDEO',
        url: `${BASE_URL}indeks-video.html`
    },
    {
        name: 'INFOGRAFIS',
        url: `${BASE_URL}indeks-infografis.html`
    },  
    {
        name: 'INDEKS',
        url: `${BASE_URL}indeks.html`
    },    
]

export const secondNavList = [
    {
        name: 'Festival Budaya Indonesia 2023',
        url: '#'
    },
    {
        name: 'Penghargaan Manga Nusantara',
        url: '#',
        tag: 'NEW'
    },
    {
        name: 'Festival Lampion Sejabodetabek',
        url: '#'
    },    
]

