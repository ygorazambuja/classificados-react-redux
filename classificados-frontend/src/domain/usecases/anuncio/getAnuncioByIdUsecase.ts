import IRepository from "../../../infra/abstract/IRepository";

class GetAnuncioById {
  constructor(private repository: IRepository, private id: number) {}

  async exec() {
    return await this.repository.getAnuncioById(this.id);
  }
}

export default GetAnuncioById;
