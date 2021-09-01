import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Box } from '../Box';
import ProjectCard from './ProjectCard';

const ResponsiveGridLayout = WidthProvider(Responsive, true);

const layoutsm = [
  { i: '1', x: 0, y: 0, w: 1, h: 1.25 },
  { i: '2', x: 0, y: 1, w: 1, h: 1.25 },
  { i: '3', x: 0, y: 2, w: 1, h: 1.25 },
];

const layoutmd = [
  { i: '1', x: 0, y: 0, w: 1, h: 1.3 },
  { i: '2', x: 1, y: 0, w: 1, h: 1.3 },
  { i: '3', x: 0, y: 1, w: 1, h: 1.3 },
];

const layouts = {
  md: layoutmd,
  sm: layoutsm,
};

export default function Projects(): JSX.Element {
  return (
    <div className="mt-16">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Side projects
      </h2>
      <h4 className="mt-2 text-gray-500 dark:text-gray-400 mb-8">
        Put your projects here. I used react-grid-layout library for some
        interaction. Grab one 'project card' and see how it works.
      </h4>
      <div className="sm:w-full">
        <ResponsiveGridLayout
          layouts={layouts}
          breakpoints={{ md: 700, sm: 0 }}
          cols={{ md: 2, sm: 1 }}
          isResizable={false}
          autoSize={true}
          margin={[20, 20]}
          containerPadding={[0, 0]}
        >
          <div key="1" className="w-full">
            <ProjectCard
              type="internal" // means that your url will be inside your page - for example: /about /posts etc
              url="#"
              title="Project Example 1"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare neque commodo quis. Nullam sit amet laoreet eros."
              hashtag="project"
            />
          </div>
          <div key="2">
            <ProjectCard
              type="external" // means that your url will redirect to external website like: www.twitter.com etc
              url="#"
              title="Project Example 2"
              hashtag="project"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare neque commodo quis. Nullam sit amet laoreet eros."
            />
          </div>
          <div key="3">
            <ProjectCard
              type="internal" // means that your url will be inside your page - for example: /about /posts etc
              url="#"
              title="Project Example 3"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare neque commodo quis. Nullam sit amet laoreet eros."
              hashtag="other hashtag"
            />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}
