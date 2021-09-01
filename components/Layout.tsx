import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="bg-white dark:bg-black mt-0 fixed w-full z-10 top-0">
        <div className="max-w-4xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        <div className="max-w-3xl py-4 mx-auto w-full">{children}</div>
      </main>
      <footer className="py-8 ">
        <div className="max-w-4xl px-8 mx-auto ">
          <div className="flex items-center justify-between w-full border-gray-200 pt-8 dark:border-gray-400 border-t text-gray-800 dark:text-gray-400">
            <div>
              Created by{' '}
              <a
                href="https://github.com/rafalmoneta/nextjs-mdx-blog-starter"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-gray-800 dark:text-gray-400 dark:hover:text-blue-700 hover:text-blue-700"
              >
                @rafalmoneta
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rafalmoneta/nextjs-mdx-blog-starter"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-gray-800 dark:text-gray-400 dark:hover:text-blue-700 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
