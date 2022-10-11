const database = require("../models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
    this.db = database;
  }

  async getAllDatas() {
    return this.db[this.nomeModelo].findAll();
  }

  async getOne(id) {
    // return database[this.nomeModelo].findAll()
  }

  async createData(data) {}

  async updateData(data, id, trans = {}) {
    return this.db[this.nomeModelo].update(data, { where: { id: id } }, trans);
  }

  async updateDatas(data, id, trans = {}) {
    return this.db[this.nomeModelo].update(
      data,
      { where: { ...where } },
      trans
    );
  }

  async deleteData(id) {}
}

module.exports = Services;
