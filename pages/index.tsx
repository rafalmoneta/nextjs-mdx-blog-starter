import { GetStaticProps } from 'next';
import React from 'react';
import About from '../components/About';
import FeaturedPosts from '../components/Blog/FeaturedPosts';
import FeaturedPostsBox from '../components/Blog/FeaturedPostsBox';
import Layout from '../components/Layout';
import Projects from '../components/Projecs/Projects';
import { getAllFeaturedPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div id="about" className="pt-32 mb-24">
        <About />
      </div>
      <div id="projects" className="mb-24">
        <Projects />
      </div>
      <div id="featured-posts" className="mb-24">
        <FeaturedPosts posts={posts} />
      </div>
      <div id="featured-posts-box" className="mb-24">
        <FeaturedPostsBox posts={posts} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFeaturedPosts([
    'date',
    'description',
    'slug',
    'title',
    'image',
    'featured',
  ]);
  return {
    props: { posts },
  };
};

export default Index;
