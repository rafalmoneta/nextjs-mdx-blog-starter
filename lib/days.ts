import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { DAYS_PATH } from '../utils/mdxUtils';

export function getDaysSlugs(): string[] {
  return fs.readdirSync(DAYS_PATH);
}

type DaysItems = {
  [key: string]: string;
};

export function getDaysBySlug(slug: string, fields: string[] = []): DaysItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(DAYS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: DaysItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllDays(fields: string[] = []): DaysItems[] {
  const slugs = getDaysSlugs();
  const days = slugs
    .map((slug) => getDaysBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((day1, day2) => (day2.date > day1.date ? -1 : 1));
  return days;
}
