import {IAnuncioDto} from "../../domain/dto/IAnuncioDto";
import {IAddedAnuncioAction, IAddingAnuncioAction, IGettingAnunciosAction, IGotAnunciosAction} from "./types";
import {ActionCreator, Dispatch, ThunkAction} from "@reduxjs/toolkit";
import {IAnuncio} from "../../domain/entities/IAnuncio";
import GetAllAnuncios from "../../domain/usecases/anuncio/getAllAnunciosUsecase";
import Repository from "../../infra/implementation/repository";
import {api} from "../../services/api";
import AddAnuncioUsecase from "../../domain/usecases/anuncio/addAnuncioUsecase";

export const addAnuncioCreator: ActionCreator<ThunkAction<Promise<IAddedAnuncioAction>,
    IAnuncio,
    null,
    IAddedAnuncioAction>> = (anuncioDto: IAnuncioDto) => {
    return async (dispatch: Dispatch) => {
        const addingAnunciosAction: IAddingAnuncioAction = {
            type: "ADDING_ANUNCIO",
            titulo: anuncioDto.titulo,
            descricao: anuncioDto.descricao
        }
        dispatch(addingAnunciosAction)
        const data = await new AddAnuncioUsecase(new Repository(api), anuncioDto)
            .exec();
        const addedAnunciosAction: IAddedAnuncioAction = {
            type: 'ADDED_ANUNCIO',
            anuncio: data
        }
        return dispatch(addedAnunciosAction);
    }

}

export const getAnunciosActionCreator: ActionCreator<ThunkAction<Promise<IGotAnunciosAction>,
    IAnuncio[],
    null,
    IGotAnunciosAction>> = () => {
    return async (dispatch: Dispatch) => {
        const gettingAnuncionsAction: IGettingAnunciosAction = {
            type: 'GETTING_ANUNCIOS',
        };
        dispatch(gettingAnuncionsAction)
        const anuncios = await new GetAllAnuncios(new Repository(api)).exec();
        const gotAnuncios: IGotAnunciosAction = {
            anuncios,
            type: 'GOT_ANUNCIOS'
        }
        return dispatch(gotAnuncios)
    }
}