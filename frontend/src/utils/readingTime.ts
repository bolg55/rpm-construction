import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const remarkReadingTime = () => {
  return (tree: unknown, { data }: any) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime will give us minutes read as a friendly string,
    // e.g. "1 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};
