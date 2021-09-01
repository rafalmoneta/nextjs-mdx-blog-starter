import Link from 'next/link';
import { Box } from '../Box';

export default function ProjectCard({
  url,
  type,
  title,
  desc,
  hashtag,
}: {
  url: string;
  type: string;
  title: string;
  desc: string;
  hashtag: string;
}): JSX.Element {
  return (
    <div className="cursor-grab  bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl h-full">
      <div className="h-full flex flex-col justify-between text-black dark:text-white p-4">
        <div>
          <h3 className="text-lg font-bold group-hover:text-sky-500">
            {title}
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3">
            {desc}
          </p>
        </div>
        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mt-2">
          <p className="m-0">#{hashtag}</p>
          <div>
            {type == 'external' && (
              <a
                className="pointer z-50 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-xl w-10 h-10 flex justify-center items-center"
                href={url}
              >
                <span>&#8599;</span>
              </a>
            )}
            {type == 'internal' && (
              <Link href={url} passHref>
                <a className="pointer z-50 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-xl w-10 h-10 flex justify-center items-center">
                  <span>&#8599;</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
