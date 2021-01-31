import { IAnuncio } from "../../domain/entities/IAnuncio";
import { IAnuncioDto } from "../../domain/dto/IAnuncioDto";

export default interface IRepository {
  getAllAnuncios(): Promise<IAnuncio[]>;
  getAnuncioById(id: number): Promise<IAnuncio>;
  addAnuncio(anuncioDto: IAnuncioDto): Promise<IAnuncio>;
}
