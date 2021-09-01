import Link from 'next/link';
import { DayType } from '../../types/day';

type DaysProps = {
  days: DayType[];
};

export default function ChallengeTimeline({ days }: DaysProps): JSX.Element {
  return (
    <div className="mt-16">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Timeline
      </h2>
      <h4 className="mt-2 text-gray-500 dark:text-gray-400 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante
        sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare
        neque commodo quis.
      </h4>
      <div className="flex flex-wrap ">
        {days.map((day, index) => (
          <Link href={`/code/${day.slug}`} passHref key={index}>
            <a>
              <div className="pointer flex items-center text-white justify-center border border-gray-200 dark:border-gray-800 rounded-xl w-10 h-10 mr-2 mb-2 text-center">
                <span className="text-gray-500 dark:text-gray-400">
                  {day.day || '0'}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
