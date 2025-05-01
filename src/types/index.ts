export interface Link {
  name?: string;
  url: string;
  target?: string;
}
export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  size?: number;
  type?: string;
  caption?: string;
}

export type Size = 'sm' | 'md' | 'lg';
export type Alignment = 'left' | 'center' | 'right';

//=============================
// Components
//=============================
export interface AttachedButtons {
  link: Link;
  rotate?: boolean;
  scale?: number;
  translateX?: string;
  size?: Size;
}

export interface SectionHeader {
  title?: string;
  description?: string;
  tag?: string;
  alignment?: Alignment;
  link?: Link;
  tagElement?: string;
  titleTag?: string;
  animation?: boolean;
  containerSize?: Size;
  titleSize?: string;
}

export interface Card {
  image: Image;
  title: string;
  tags?: string[];
  description?: string;
  link?: Link;
}

//API responses
export interface ProjectsResponse {
  projects: Project[];
}

export interface Response<T> {
  success: boolean;
  data?: T | null;
  message?: string | null;
  total?: number | null;
}

export enum ProjectTypes {
  Development = 'Development'
}

export enum Tags {
  UMBRACO_CMS = 'Umbraco',
  GRAPHQL = 'GraphQL',
  C_SHARP = 'C#',
  DOT_NET = '.NET',
  NET_MVC = '.MVC',
  NET_CORE = '.NET Core',
  ENTITY_FRAMEWORK = 'Entity Framework',
  AZURE = 'Azure',
  ALGOLIA = 'Algolia',
  NUXT3 = 'Nuxt',
  VUE = 'Vue',
  REACT = 'React',
  ANGULAR_JS = 'AngularJS',
  JAVASCRIPT_JQUERY = 'Javascript/jQuery',
  TYPESCRIPT = 'Typescript',
  BOOTSTRAP = 'Bootstrap',
  SCSS_CSS = 'SCSS/CSS',
  HTML5 = 'HTML5',
  GRAPHIC_DESIGN = 'Graphic Design',
  ADOBE_SUITE = 'Adobe CC',
  AFFINITY_SUITE = 'Affinity Suite'
}

export interface Project {
  id: number;
  metaData?: MetaData;
  slug: string;
  title: string;
  type: ProjectTypes;
  summary?: string;
  tileImage?: Image;
  image?: Image;
  tags?: string[];
  // components?: ContentBlock[];
}
export interface MetaData {
  title?: string;
  description?: string;
}
