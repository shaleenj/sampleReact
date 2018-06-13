export function appReducer( state = {}, action) {
    switch(action.type) {
        case 'CHANGE_VIEW' :
            return { ...state, currentView: action.payload }
        default :
            return state;
    }
}