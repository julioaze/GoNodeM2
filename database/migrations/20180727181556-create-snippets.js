module.exports = {
  up: (queryInterface, dataTypes) => {
    queryInterface.createTable('Snippets', {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      CategoryId: {
        type: dataTypes.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      title: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Snippets');
  },
};
