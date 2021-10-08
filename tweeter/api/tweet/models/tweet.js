// @ts-nocheck
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {

  async like (ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.like.create(data, { files });
		} else {
			ctx.request.body.author = ctx.state.id
			ctx.request.body.article = ctx.params.id
      entity = await strapi.services.comment.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};
