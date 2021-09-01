import React from 'react';
import { PostType } from '../../types/post';
import PostCardBox from './PostCardBox';

type IndexProps = {
  posts: PostType[];
};

export const FeaturedPostsBox = ({ posts }: IndexProps): JSX.Element => {
  return (
    <div className="mt-16">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Featured posts style 2
      </h2>
      <p className="mt-2 max-w-2xl text-gray-500 dark:text-gray-400 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante
        sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare
        neque commodo quis.
      </p>
      <div className="sm:grid sm:grid-cols-2 sm:gap-10">
        {posts.map((post) => (
          <PostCardBox
            key={post.slug}
            title={post.title}
            url={post.slug}
            text={post.description}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPostsBox;
