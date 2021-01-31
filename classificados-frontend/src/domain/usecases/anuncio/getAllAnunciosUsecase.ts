import IRepository from "../../../infra/abstract/IRepository";

class GetAllAnuncios {
  constructor(private readonly repository: IRepository) {}
  async exec() {
    return await this.repository.getAllAnuncios();
  }
}

export default GetAllAnuncios;
