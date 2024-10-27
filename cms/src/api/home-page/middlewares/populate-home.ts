export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      hero: {
        populate: {
          heroImg: {
            fields: ['url', 'alternativeText'],
          },
          cta: true,
        },
      },
      about: {
        populate: {
          image: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
      services: {
        populate: {
          services: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
      cta: {
        populate: {
          link: true,
        },
      },
    };
    await next();
  };
};
