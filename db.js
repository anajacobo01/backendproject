const {sequelize} = requiere ('sequelize');
const Product = requiere('./models/Product');
const Review = requiere ('./models/Review');
const Orders = requiere('./models/Orders');
const Users = requiere ('./models/Users');
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
    Orders,
    Users
  ];

  // Registering models into Sequelize
  for (let model of models) {
    model(sequelize);
  }

  //Configuring relations 
const {products, reviews, Users, Orders, } = sequelize.models;
// Relation one-to-one in reviews table 
reviews.belongsTo(products)

module.exports = sequelize;