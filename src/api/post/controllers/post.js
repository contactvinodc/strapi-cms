'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) =>  ({

    async findUid(ctx) {
      const { slug } = ctx.params;
      const { query } = ctx;
      console.log(slug);
      const response= await strapi.db.query('api::post.post').findOne({
        where: {
          slug:slug,
        },
      });
    
      return response;
    }
  }));
