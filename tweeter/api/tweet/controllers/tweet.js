// @ts-nocheck
const { default: strapi } = require('strapi');
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async comment(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.like.create(data, { files });
		} else {
			ctx.request.body.author, ctx.request.body.like;
      entity = await strapi.services.like.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.like});
  },
};
