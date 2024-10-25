import type { Schema, Struct } from '@strapi/strapi';

export interface BrandCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_brand_company_infos';
  info: {
    description: '';
    displayName: 'CompanyInfo';
    icon: 'command';
  };
  attributes: {
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email;
    foundingDate: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'brand.logo', false>;
    phone: Schema.Attribute.String;
    socialMedia: Schema.Attribute.Component<'brand.social', true>;
    twitterHandle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'@twitter'>;
    url: Schema.Attribute.String;
  };
}

export interface BrandGlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_brand_global_seos';
  info: {
    displayName: 'GlobalSEO';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 3;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    jsonData: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
        minLength: 3;
      }>;
  };
}

export interface BrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_brand_logos';
  info: {
    displayName: 'Logo';
    icon: 'alien';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BrandSocial extends Struct.ComponentSchema {
  collectionName: 'components_brand_socials';
  info: {
    displayName: 'social';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'Linkedin', 'Github', 'Youtube']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Facebook'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutAbout extends Struct.ComponentSchema {
  collectionName: 'components_layout_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    about: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    subHeading: Schema.Attribute.RichText;
    subject: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[NEW FORM SUBMISSION]'>;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact'>;
    link: Schema.Attribute.Component<'ui.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    block: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'button text'>;
    size: Schema.Attribute.Enumeration<['md', 'lg', 'link']> &
      Schema.Attribute.DefaultTo<'lg'>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'plain', 'animated']
    >;
    type: Schema.Attribute.Enumeration<['submit', 'reset', 'button']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'button'>;
  };
}

export interface UiCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_ctas';
  info: {
    displayName: 'CTA';
    icon: 'quote';
  };
  attributes: {
    link: Schema.Attribute.Component<'ui.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact'>;
  };
}

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: 'components_ui_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    section: Schema.Attribute.Component<'ui.footer-section', true>;
  };
}

export interface UiFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_footer_sections';
  info: {
    description: '';
    displayName: 'FooterSection';
    icon: 'chartCircle';
  };
  attributes: {
    links: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    block: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link text'>;
    size: Schema.Attribute.Enumeration<['md', 'lg']> &
      Schema.Attribute.DefaultTo<'lg'>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'plain', 'animated']
    > &
      Schema.Attribute.DefaultTo<'plain'>;
  };
}

export interface UiNavBar extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_bars';
  info: {
    description: '';
    displayName: 'NavBar';
    icon: 'apps';
  };
  attributes: {
    ctaLink: Schema.Attribute.Component<'ui.link', false> &
      Schema.Attribute.Required;
    navItems: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.company-info': BrandCompanyInfo;
      'brand.global-seo': BrandGlobalSeo;
      'brand.logo': BrandLogo;
      'brand.social': BrandSocial;
      'layout.about': LayoutAbout;
      'layout.contact': LayoutContact;
      'layout.cta': LayoutCta;
      'ui.button': UiButton;
      'ui.cta': UiCta;
      'ui.footer': UiFooter;
      'ui.footer-section': UiFooterSection;
      'ui.link': UiLink;
      'ui.nav-bar': UiNavBar;
    }
  }
}
