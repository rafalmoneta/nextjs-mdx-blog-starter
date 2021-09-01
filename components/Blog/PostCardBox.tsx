import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function PostCardBox({
  title,
  text,
  url,
  image,
  date,
}: {
  title: string;
  text: string;
  url: string;
  image: string;
  date: string;
}): JSX.Element {
  const [width, height] = [1280, 720];
  return (
    <div>
      <Link href={`/posts/${url}`}>
        <a className=" group block text-gray-900 dark:text-white dark:hover:text-blue-700 hover:text-blue-700">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(date), 'MMMM dd, yyyy')}
          </p>
          {image ? (
            <div className="border-2 dark:border-gray-400 dark:border-2 relative mb-4 overflow-hidden rounded-lg text-[0px]">
              <Image src={image} width={width} height={height} />
            </div>
          ) : null}
          <h2 className="text-lg font-bold group-hover:text-sky-500">
            {title}
          </h2>
          <p className="text-gray-800 dark:text-gray-400 line-clamp-2">
            {text}
          </p>
          <Link as={`/posts/${url}`} href={`/posts/[slug]`}>
            <a className="font-bold dark:text-blue-500 text-blue-500 underline dark:underline dark:hover:text-blue-700 hover:text-blue-700">
              Read More
            </a>
          </Link>
        </a>
      </Link>
    </div>
  );
}
