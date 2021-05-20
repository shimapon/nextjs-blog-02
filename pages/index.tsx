import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { getSortedPostsData } from '@/lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>aaa</title>
      </Head>
      <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
          </ul>

      </>

  );
}