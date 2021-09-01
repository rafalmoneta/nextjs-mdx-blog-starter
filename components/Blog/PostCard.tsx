import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function PostCard({
  title,
  text,
  url,
  date,
}: // image,
{
  title: string;
  text: string;
  url: string;
  date: string;
  // image: string;
}): JSX.Element {
  // const [width, height] = [1280, 720];
  return (
    <div className="mt-4 mb-8">
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        {format(parseISO(date), 'MMMM dd, yyyy')}
      </p>
      <Link as={`/posts/${url}`} href={`/posts/[slug]`}>
        <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
          <h3 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-500 text-left line-clamp-2">{text}</p>
        </a>
      </Link>
      <Link as={`/posts/${url}`} href={`/posts/[slug]`}>
        <a className="font-bold dark:text-blue-500 text-blue-500 underline dark:underline dark:hover:text-blue-700 hover:text-blue-700">
          Read More
        </a>
      </Link>
    </div>
  );
}
