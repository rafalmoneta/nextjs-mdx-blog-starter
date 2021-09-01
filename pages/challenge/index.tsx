import { GetStaticProps } from 'next';
import React from 'react';
import ChallengeHeader from '../../components/Challenge/ChallengeHeader';
import ChallengeTimeline from '../../components/Challenge/ChallengeTimeline';
import Layout from '../../components/Layout';
import { getAllDays } from '../../lib/days';
import { DayType } from '../../types/day';

type IndexProps = {
  days: DayType[];
};

export const CodeIndexPage = ({ days }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className="mt-2 pt-32">
        <ChallengeHeader />
        <ChallengeTimeline days={days} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const days = getAllDays(['date', 'day', 'slug', 'title', 'featured']);

  return {
    props: { days },
  };
};

export default CodeIndexPage;
