import type { ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import  CopyIcon  from '../../static/img/copy.svg';
import RocketIcon from '../../static/img/rocket.svg'
import Palette from '../../static/img/palette.svg'
import { useTranslations } from '../hooks/useTranslations';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  color: string;
};

export default function GalioFeatures(): ReactNode {
  const { t } = useTranslations();

  const FeatureList: FeatureItem[] = [
    {
      title: t('galioFeatures.freeOpenSource.title'),
      description: (
        <>
          {t('galioFeatures.freeOpenSource.description')}
        </>
      ),
      icon: <CopyIcon className="h-8 w-8 text-white" />,
      color: 'bg-blue-500',
    },
    {
      title: t('galioFeatures.beautifullyDesigned.title'),
      description: (
        <>
          {t('galioFeatures.beautifullyDesigned.description')}
        </>
      ),
      icon: <Palette className="h-8 w-8 text-white" />,
      color: 'bg-pink-500',
    },
    {
      title: t('galioFeatures.firstClassDocumentation.title'),
      description: (
        <>
          {t('galioFeatures.firstClassDocumentation.description')}
        </>
      ),
      icon: <RocketIcon className="h-8 w-8 text-white" />,
      color: 'bg-red-500',
    },
  ];

  function Feature({ title, description, icon, color }: FeatureItem) {
    return (
      <div className={clsx('col col-3')}>
        <div className="text-center flex items-center justify-center p-4">
          <div
            className={clsx(
              'flex items-center justify-center rounded-full text-white h-16 w-16 shadow-md',
              color
            )}
          >
            {icon}
          </div>
        </div>
        <div className="text-center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container">
        <div className='flex md:justify-start justify-center md:p-10 text-2xl md:text-5xl font-semibold'>
            {t('galioFeatures.title')}
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
