const { Model } = require('sequelize');
const { TABLES, STATUSES } = require('../../consts');

class Channel extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        yt_channel_id: {
          type: DataTypes.STRING,
          unique: true,
        },
        yt_uploads_id: {
          type: DataTypes.STRING,
          unique: true,
        },
        bb_space_id: {
          type: DataTypes.INTEGER,
          unique: true,
        },
        bb_room_id: {
          type: DataTypes.INTEGER,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
          type: DataTypes.TEXT,
        },
        photo: {
          type: DataTypes.TEXT,
        },
        published_at: {
          type: DataTypes.DATE,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: STATUSES.NEW,
        },
        twitter_link: {
          type: DataTypes.STRING,
        },
        facebook_link: {
          type: DataTypes.STRING,
        },
        twitch_link: {
          type: DataTypes.STRING,
        },
        instagram_link: {
          type: DataTypes.STRING,
        },
        view_count: {
          type: DataTypes.INTEGER,
        },
        subscriber_count: {
          type: DataTypes.INTEGER,
        },
        video_count: {
          type: DataTypes.INTEGER,
        },
        crawled_at: {
          type: DataTypes.DATE,
        },
        comments_crawled_at: {
          type: DataTypes.DATE,
        },
        created_at: {
          type: DataTypes.DATE,
        },
        updated_at: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: TABLES.CHANNEL,
        sequelize,
      },
    );
  }

  static associate(models) {
    this.videos = this.hasMany(models.Video, { as: 'videos', foreignKey: 'channel_id' });
    this.stats = this.hasOne(models.ChannelStats, { as: 'stats', foreignKey: 'channel_id' });
  }
}

module.exports = Channel;
