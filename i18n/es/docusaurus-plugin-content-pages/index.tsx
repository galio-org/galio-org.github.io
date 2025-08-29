import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from '../../../src/pages/index.module.css';
import LandingHero from '../../../src/components/LandingHero';
import IntroGalio from '../../../src/components/IntroGalio';
import Features from '../../../src/components/Feaures';
import GalioFeatures from '../../../src/components/IntroGalio2';
import FrameworkBuild from '../../../src/components/FrameworkBuild';
import GalioInterfaces from '../../../src/components/GalioInterfaces';
import Categories from '../../../src/components/Categories';
import TryPromo from '../../../src/components/TryPromo';
import CommunityGalio from '../../../src/components/CommunityGalio';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    >
      <main
        className='flex flex-col justify-center gap-16'
      >
        <LandingHero/>
        <IntroGalio/>
        <Features />
        <GalioFeatures/>
        <FrameworkBuild/>
        <GalioInterfaces/>
        <Categories/>
        <TryPromo/>
        <CommunityGalio/>
      </main>
    </Layout>
  );
} 