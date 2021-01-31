import IRepository from "../../../infra/abstract/IRepository";
import { IAnuncioDto } from "../../dto/IAnuncioDto";

class AddAnuncioUsecase {
  constructor(
    private readonly repository: IRepository,
    private readonly anuncioDto: IAnuncioDto
  ) { }

  async exec() {
    return await this.repository.addAnuncio(this.anuncioDto);
  }
}
export default AddAnuncioUsecase;
