import { IAnuncioDto } from "../../domain/dto/IAnuncioDto";
import { IAnuncio } from '../../domain/entities/IAnuncio';

import { Action } from '@reduxjs/toolkit'


export interface IAnuncioState {
    readonly anuncios: IAnuncio[],
    readonly loading: boolean
}

export const ADD_ANUNCIO = 'ADD_ANUNCIO'


export interface AddAnuncioAction {
    type: typeof ADD_ANUNCIO,
    payload: IAnuncioDto
}

export interface IAddingAnuncioAction extends Action<"ADDING_ANUNCIO"> {
    titulo: string;
    descricao: string;
}

export interface IAddedAnuncioAction extends Action<"ADDED_ANUNCIO"> {
    anuncio: IAnuncio
}

export interface IGettingAnunciosAction extends Action<'GETTING_ANUNCIOS'> {
}
export interface IGotAnunciosAction extends Action<'GOT_ANUNCIOS'> {
    anuncios: IAnuncio[]
}

export type AnuncioActionTypes = IAddedAnuncioAction | IAddingAnuncioAction | IGettingAnunciosAction | IGotAnunciosAction