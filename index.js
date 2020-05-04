// buat satu store
const { createStore } = require('redux')
 
// state
initialState = {
    choosenMentees : "Yasin",
    points: 0,
    mentee: []
}

// reducer (apa sih yang kita rubah)
const reducer = ( state = initialState, action ) => {
    if (action.type === 'CHOOSE_AJAY') {
            return {
                ...state,
                choosenMentees: action.mentee
            }
    }
    if (action.type === 'CHOOSE_BAGAS') {
        return {
            ...state,
            choosenMentees: action.mentee
        }
    }
}

//actions
// masing masing action bentuknya object
const chooseAjay = {type : 'CHOOSE_AJAY', mentee: 'Ajay'}
const chooseBagas = {type : 'CHOOSE_BAGAS', mentee: 'Bagas'}


// buat store, buat nyimpen segala perubahan
const store = createStore(reducer)

//setelah ada perubahan di konsol...
store.subscribe (() => {
    console.log(store.getState())
})


//nyampaikan actionnya ke reducernya...
store.dispatch(chooseAjay)
store.dispatch(chooseBagas)

// out-put
// { choosenMentees: 'Ajay', points: 0, mentee: [] }
// { choosenMentees: 'Bagas', points: 0, mentee: [] }