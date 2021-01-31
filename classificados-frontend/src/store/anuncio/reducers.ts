import { AnuncioActionTypes, IAnuncioState } from "./types";


const initalState: IAnuncioState = {
    loading: false,
    anuncios: []
}


export function anunciosReducers(state: IAnuncioState = initalState, action: AnuncioActionTypes): IAnuncioState {
    switch (action.type) {
        case 'ADDED_ANUNCIO':
            return { ...state, loading: false, anuncios: state.anuncios.concat(action.anuncio) };
        case 'ADDING_ANUNCIO':
            return state;
        case "GETTING_ANUNCIOS":
            return { ...state, loading: true };
        case 'GOT_ANUNCIOS':
            return { ...state, loading: false, anuncios: action.anuncios };
        default:
            neverReached(action)
    }
    return state;
}

function neverReached(_never: never) { }