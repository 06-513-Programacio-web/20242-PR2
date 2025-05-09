const config = {
    apiBaseUrl: 'https://api.themoviedb.org/3',
    apiImageUrl: 'https://image.tmdb.org/t/p/w500/',
    apiKey: 'TU API Key de TMDB',
};

const cities = [
    { name: 'Madrid', postalCode: "28001" },
    { name: 'Barcelona', postalCode: "08001" },
    { name: 'Valencia', postalCode: "46001" }
]


const genres = [
    { id: '28', name: 'Acción' },
    { id: '12', name: 'Aventura' },
    { id: '16', name: 'Animación' },
    { id: '35', name: 'Comedia' },
    { id: '80', name: 'Crimen' },
    { id: '99', name: 'Documental' },
    { id: '18', name: 'Drama' },
    { id: '10751', name: 'Familia' },
    { id: '14', name: 'Fantasía' },
    { id: '27', name: 'Terror' },
    { id: '10402', name: 'Música' },
    { id: '9648', name: 'Misterio' },
    { id: '10749', name: 'Romance' },
    { id: '878', name: 'Ciencia ficción' },
    { id: '10770', name: 'Película de TV' },
    { id: '53', name: 'Suspense' },
    { id: '10752', name: 'Bélica' },
    { id: '37', name: 'Western' }
]

const listNames = {
    favorite: "Favoritos",
    watched: "Peliculas Vistas",
    pending: "Pendientes"
};

