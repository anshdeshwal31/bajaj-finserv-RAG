import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import fs from 'fs';
import path from 'path';

const FeaturesPage = ({ featuresContent }: { featuresContent: string }) => {
  return (
    <div>
      <Head>
        <title>QueryForge Features</title>
        <meta name="description" content="QueryForge features page" />
      </Head>
      <h1>QueryForge Features</h1>
      <div dangerouslySetInnerHTML={{ __html: featuresContent }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const readmePath = path.join(process.cwd(), 'README.md');
  const featuresContent = fs.readFileSync(readmePath, 'utf8');
  const startIndex = featuresContent.indexOf('## Features');
  const endIndex = featuresContent.indexOf('##', startIndex + 1);
  const featuresSection = featuresContent.substring(startIndex, endIndex);
  return {
    props: {
      featuresContent: featuresSection,
    },
  };
};

export default FeaturesPage;