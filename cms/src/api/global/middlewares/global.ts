export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      company: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          socialMedia: true,
        },
      },
      navbar: {
        populate: {
          navItems: {
            fields: ['title', 'path'],
            populate: {
              children: {
                fields: ['title', 'path'],
              },
            },
          },
          ctaLink: true,
        },
      },
      footer: {
        populate: {
          section: {
            populate: {
              links: {
                fields: ['title', 'path'],
                populate: {
                  children: {
                    fields: ['title', 'path'],
                  },
                },
              },
            },
          },
        },
      },
    };
    await next();
  };
};

// http://localhost:1337/api/global?populate[0]=navbar.logo.image&populate[1]=navbar.navItems.children&populate[2]=navbar.ctaLink&populate[3]=footer.section.links.children&populate[4]=footer.socialMedia'
