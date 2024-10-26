export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      dynamicPageSection: {
        on: {
          'layout.about': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.cta': {
            populate: {
              link: true,
            },
          },
          'layout.contact': {
            populate: {
              button: true,
            },
          },
          'layout.testimonial': {
            populate: {
              testimonial: true,
            },
          },
          'layout.showcase': {
            populate: {
              images: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'ui.link': true,
        },
      },
    };
    await next();
  };
};
