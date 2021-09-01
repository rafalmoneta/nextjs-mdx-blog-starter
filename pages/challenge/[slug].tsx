import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import {
  dayFilePaths,
  DAYS_PATH,
  postFilePaths,
  POSTS_PATH,
} from '../../utils/mdxUtils';
import { DayType } from '../../types/day';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: DayType;
};

const DayPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - #100daysOfCode`,
    // description: frontMatter.description,
    // image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <div className="pt-32 mb-16">
        <div className="flex justify-between items-center">
          <Link href={`/code/day${frontMatter.day - 1}`}>
            <a className=" text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded w-10 h-10 flex justify-center items-center">
              &#8592;
            </a>
          </Link>
          <div>
            <h1 className=" text-center font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
              Day <span>{frontMatter.day}</span>!
            </h1>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            </p>
          </div>
          <Link href={`/code/day${frontMatter.day + 1}`}>
            <a className="text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded w-10 h-10 flex justify-center items-center">
              &#8594;
            </a>
          </Link>
        </div>
      </div>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full ">
        <div className="prose dark:prose-dark w-full min-w-full">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daysFilePath = path.join(DAYS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(daysFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dayFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default DayPage;
