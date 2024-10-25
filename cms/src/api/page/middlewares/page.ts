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
        },
      },
      //   company: {
      //     populate: {
      //       logo: {
      //         populate: {
      //           image: {
      //             fields: ['url', 'alternativeText'],
      //           },
      //         },
      //       },
      //       socialMedia: true,
      //     },
      //   },
    };
    await next();
  };
};
