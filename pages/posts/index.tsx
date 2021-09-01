import React from 'react';
import { PostType } from '../../types/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/api';
import Layout from '../../components/Layout';
import PostCardBox from '../../components/Blog/PostCardBox';
import PostCard from '../../components/Blog/PostCard';

type IndexProps = {
  posts: PostType[];
};

export const PostsIndexPage = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className="mt-2 pt-32">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          All posts
        </h2>
        <p className="mt-2 max-w-2xl text-gray-500 dark:text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante
          sed arcu porta ultrices. Duis tincidunt venenatis lectus, non ornare
          neque commodo quis.
        </p>
        {/* <div className="sm:grid sm:grid-cols-2 sm:gap-10">
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
        </div> */}
        <div className="flex flex-col">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              url={post.slug}
              text={post.description}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'image']);

  return {
    props: { posts },
  };
};

export default PostsIndexPage;
