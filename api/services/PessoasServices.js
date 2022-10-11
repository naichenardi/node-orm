const Services = require("../services/Services");

class PessoaService extends Services {
  constructor() {
    super("Pessoas");
  }

  async getPeopleActives(where = {}) {
    return this.db[this.nomeModelo].findAll({ where: { ...where } });
  }

  async getAllPeople(where = {}) {
    return this.db[this.nomeModelo]
      .scope("todos")
      .findAll({ where: { ...where } });
  }
}

module.exports = PessoaService;
