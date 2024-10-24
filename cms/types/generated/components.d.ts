import type { Schema, Struct } from '@strapi/strapi';

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
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    company: Schema.Attribute.String;
    section: Schema.Attribute.Component<'ui.footer-section', true>;
    socialMedia: Schema.Attribute.Component<'brand.social', true>;
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
    ctaLink: Schema.Attribute.Component<'ui.link', false>;
    logo: Schema.Attribute.Component<'brand.logo', false>;
    navItems: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.logo': BrandLogo;
      'brand.social': BrandSocial;
      'ui.button': UiButton;
      'ui.cta': UiCta;
      'ui.footer': UiFooter;
      'ui.footer-section': UiFooterSection;
      'ui.link': UiLink;
      'ui.nav-bar': UiNavBar;
    }
  }
}
