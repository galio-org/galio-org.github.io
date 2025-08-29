import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useTranslations } from '../hooks/useTranslations';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: string;
  codeSection: ReactNode;
  link: string;
  linkText: string;
};

export default function Features(): ReactNode {
  const { t } = useTranslations();

  const FeatureList: FeatureItem[] = [
    {
      title: t('features.installation.title'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: t('features.installation.description'),
      codeSection: (
        <div>
          <p>
          <pre className="text-sm leading-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md overflow-x-auto">
          <code>
              <span className="text-pink-500">{t('features.installation.npmCommand')}</span>
              <br />
              {t('features.installation.or')}
              <br />
              <span className="text-pink-500">{t('features.installation.yarnCommand')}</span>
          </code>
          </pre>
        </p>
        </div>
      ),
      link: "/docs/intro",
      linkText: t('features.installation.readInstallation')
    },
    {
      title: t('features.usage.title'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: t('features.usage.description'),
      codeSection: (
        <p>
          <pre className="text-sm leading-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 rounded-md overflow-x-auto">
          <code>
              <span className="text-pink-500">{t('features.usage.importText')}</span>
              <br />
              {t('features.usage.renderText')}
              <br />
              {`  ${t('features.usage.viewText')}`}
              <br />
              {`    ${t('features.usage.textComponent')}`}
              <br />
              {`      ${t('features.usage.hiText')}`}
              <br />
              {`    ${t('features.usage.closeText')}`}
              <br />
              {`  ${t('features.usage.closeView')}`}
              <br />
              {`${t('features.usage.closeRender')}`}
          </code>
          </pre>
        </p>
      ),
      link: "/docs/intro",
      linkText: t('features.usage.exploreDocumentation')
    },
    {
      title: t('features.builtWithGalio.title'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: t('features.builtWithGalio.description'),
      codeSection: <img src="/img/build.png" alt="Galio examples" className='h-55 w-120'/>,
      link: "/examples",
      linkText: t('features.builtWithGalio.seeExamples')
    },
  ];

  function Feature({ icon, title, description, codeSection, link, linkText }: FeatureItem) {
    return (
      <div className={clsx('col col-3 w-full my-5')}>
        <div className="padding-horiz--md border-gray-500 border-b h-90">
          <div className='flex flex-col flex-none'>
              <div className='flex gap-2 mb-4'>
              <div>{icon}</div>
              <Heading as="h3">{title}</Heading>
              </div>
              <p className='min-h-[60px]'>{description}</p>
          </div>
          <div className="mb-4">
            {codeSection}
          </div>
        </div>
        <div className="mt-4">
          <a href={link}
            className='!no-underline py-2 px-3 bg-indigo-500 text-white rounded-md'
          >
            {linkText}
          </a>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}