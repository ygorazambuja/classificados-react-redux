import { createStore, Reducer, } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, Store } from "redux";
import { anunciosReducers as anuncios } from "./anuncio/reducers";
import { IAnuncioState } from "./anuncio/types";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


export interface ApplicationState {
    readonly anuncios: IAnuncioState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    anuncios
})


export function configureStore(): Store<ApplicationState> {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
    return store;
}

export type RootState = ReturnType<typeof rootReducer> 