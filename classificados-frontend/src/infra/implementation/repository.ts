import { AxiosInstance } from "axios";
import { IAnuncioDto } from "../../domain/dto/IAnuncioDto";
import { IAnuncio } from "../../domain/entities/IAnuncio";
import IRepository from "../abstract/IRepository";

class Repository implements IRepository {
  constructor(private api: AxiosInstance) { }

  async getAllAnuncios(): Promise<IAnuncio[]> {
    const { data } = await this.api.get("/anuncio");
    return data;
  }
  async getAnuncioById(id: number): Promise<IAnuncio> {
    const { data } = await this.api.get(`/anuncio/${id}`);
    return data;
  }
  async addAnuncio(anuncioDto: IAnuncioDto): Promise<IAnuncio> {
    const { data } = await this.api.post("/anuncio", { ...anuncioDto });
    return data;
  }
}

export default Repository;
