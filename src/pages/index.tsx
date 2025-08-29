import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import LandingHero from '../components/LandingHero';
import IntroGalio from '../components/IntroGalio';
import Features from '../components/Feaures';
import GalioFeatures from '../components/IntroGalio2';
import FrameworkBuild from '../components/FrameworkBuild';
import GalioInterfaces from '../components/GalioInterfaces';
import Categories from '../components/Categories';
import TryPromo from '../components/TryPromo';
import CommunityGalio from '../components/CommunityGalio';

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
