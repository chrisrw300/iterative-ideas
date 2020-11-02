const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create post model
class Post extends Model {
  static addlike(body, models) {
  return models.Like.create({
    user_id: body.user_id,
    post_id: body.post_id
  }).then(() => {
    return Post.findOne({
      where: {
        id: body.post_id
      },
        attributes: [
          'id',
          'post_body',
          'title',
           'created_at'
        ]
      
    });
  });
  }
}
// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);
module.exports = Post;