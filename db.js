const {sequelize} = requiere ('sequelize');
const Product = requiere('./models/Product');
const Review = requiere ('./models/Review');
//Database connection 
const sequelize = new Sequelize ('ecommerce_api', 'root', 'root',{
    host: 'localhost',
    dialect: 'mariadb', 
    logging: false,
});
// Getting models
const models = [
    Product,
    Review,
  ];

  // Registering models into Sequelize
  for (let model of models) {
    model(sequelize);
  }

  //Configuring relations 
const {products, reviews, users, orders, } = sequelize.models;
// Relation one-to-one in reviews table 
reviews.belongsTo(products)

module.exports = sequelize;