'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
    await queryInterface.addColumn('Niveis', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
    await queryInterface.addColumn('Turmas', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
    await queryInterface.addColumn('Matriculas', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pessoas', 'deletedAt');
    await queryInterface.removeColumn('Niveis', 'deletedAt');
    await queryInterface.removeColumn('Turmas', 'deletedAt');
    await queryInterface.removeColumn('Matriculas', 'deletedAt');
  }
};