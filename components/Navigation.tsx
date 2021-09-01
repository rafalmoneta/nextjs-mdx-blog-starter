import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navigation = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <Link href="/">
          <a className="text-gray-900 dark:text-white pr-6 py-4 dark:hover:text-blue-700 hover:text-blue-700">
            Home
          </a>
        </Link>
      </div>
      <nav className="flex items-center ">
        <Link href="/#about">
          <a className="text-gray-900 dark:text-white px-6 py-4 dark:hover:text-blue-700 hover:text-blue-700">
            About
          </a>
        </Link>
        <Link href="/posts">
          <a className="text-gray-900 dark:text-white pr-6 py-4 dark:hover:text-blue-700 hover:text-blue-700">
            Blog
          </a>
        </Link>
        <Link href="/challenge">
          <a className="text-gray-900 dark:text-white pr-6 py-4 dark:hover:text-blue-700 hover:text-blue-700">
            #30DaysOfCode
          </a>
        </Link>
        <a
          href="https://github.com/rafalmoneta/nextjs-mdx-blog-starter"
          className="text-gray-900 dark:text-white pr-6 py-4 dark:hover:text-blue-700 hover:text-blue-700"
        >
          Github
        </a>
        <ThemeSwitch />
      </nav>
    </div>
  );
};

export default Navigation;
