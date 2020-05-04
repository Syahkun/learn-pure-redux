// buat satu store
const { createStore } = require('redux')
 
// state
initialState = {
    choosenMentees : "Ajay",
    points: 0,
    mentee: [],
    status: "jomblo",
    suku: "Jawa",
    mantan: 0,
    favoriteFood: "nasi kerang",
    favoriteDrink: "teh",
    movie: {
        movie1: "XXX",
        movie2: "AOI movie"
    },
    music: {
        music1: "ditinggal rabi",
        music2: "ditinggal pacar"
    }
}

// reducer (apa sih yang kita rubah)
const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'CHOOSE_MENTEE':
        return {
            ...state,
            choosenMentees: action.payload
        }
        case 'ADD_POINT':
            return {
                ...state,
                points: state.points + action.points
                
            }
        case 'ADD_MENTEE':
            return {
                ...state,
                // mentee: state.mentee.concat([action.mentee])
                mentee: [...state.mentee, action.mentee]
            }

        case 'REMOVE_MENTEE':
            return {
                ...state,
                mentee: state.mentee.filter(mentee => mentee !== action.mentee),
            }

        case 'CHOOSE_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'CHOOSE_SUKU':
            return {
                ...state,
                suku: action.suku
            }
        case 'ADD_MANTAN':
            return {
                ...state,
                mantan: state.mantan + action.mantan
            }
        case 'CHOOSE_FAVORITEFOOD':
            return {
                ...state,
                favoriteFood: action.favoriteFood
            }
        case 'CHOOSE_FAVORITEDRINK':
            return {
                ...state,
                favoriteDrink: action.favoriteDrink
            }
        case 'CHOOSE_MOVIE':
            return {
                ...state, 
                // ...movie1,
                // movie1: action.movie1
                movie: {
                    movie1: action.movie1,
                    movie2: action.movie2
                }

            }
        case 'CHOOSE_MUSIC':
            return {
                ...state, 
                music: {
                    music1: action.music1,
                    music2: action.music2
                }

            }
    }
    
}


//action creator fungction
const choosenMentee = (payload) => ({type : 'CHOOSE_MENTEE', payload})
const addPoint = (points) => ({type: 'ADD_POINT', points }) 
const addMente = (mentee) => ({type: 'ADD_MENTEE', mentee }) 
const removeMentee = (mentee) => ({type: 'REMOVE_MENTEE', mentee }) 
const chooseStatus = (status) => ({type: 'CHOOSE_STATUS', status }) 
const chooseSuku = (suku) => ({type: 'CHOOSE_SUKU', suku }) 
const addMantan = (mantan) => ({type: 'ADD_MANTAN', mantan }) 
const chooseFavoriteFood = (favoriteDrink) => ({type: 'CHOOSE_FAVORITEDRINK', favoriteDrink }) 
const chooseFavoriteDrink = (favoriteFood) => ({type: 'CHOOSE_FAVORITEFOOD', favoriteFood }) 
const chooseMovie = (movie1, movie2) => ({type: 'CHOOSE_MOVIE', movie1, movie2 }) 
const chooseMusic = (music1, music2) => ({type: 'CHOOSE_MUSIC', music1, music2 })


// buat store, buat nyimpen segala perubahan
const store = createStore(reducer)

//setelah ada perubahan di konsol...
store.subscribe (() => {
    console.log(store.getState())
})


//nyampaikan actionnya ke reducernya...
store.dispatch(choosenMentee('Derby'))
store.dispatch(addPoint(2))
store.dispatch(addPoint(3))
store.dispatch(addMente('sholeh'))
store.dispatch(addMente('sholeh1'))
store.dispatch(removeMentee('sholeh'))
store.dispatch(chooseStatus("beristri 10"))
store.dispatch(chooseSuku("Surabaya"))
store.dispatch(addMantan(18))
store.dispatch(chooseFavoriteFood("hati"))
store.dispatch(chooseFavoriteDrink("tai teh"))
store.dispatch(chooseMovie("horror film", "asa film"))
store.dispatch(chooseMusic("ditinggal mantan", "sugeng dalu"))


// {
//     choosenMentees: 'Derby',
//     points: 5,
//     mentee: [ 'sholeh', 'sholeh1' ],
//     status: 'jomblo',
//     suku: 'Jawa',
//     mantan: 0,
//     favoriteFood: 'nasi kerang',
//     favoriteDrink: 'teh',
//     movie: { movie1: 'XXX', movie2: 'AOI sora movie' },
//     music: { music1: 'ditinggal rabi', music2: 'ditinggal pacar' }
//   }

