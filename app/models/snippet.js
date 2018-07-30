module.exports = (sequelize, dataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: dataTypes.STRING,
    content: dataTypes.TEXT,
  });

  /**
   * Associação
   */
  Snippet.associate = (models) => {
    Snippet.belongsTo(models.Category);
  };

  return Snippet;
};
