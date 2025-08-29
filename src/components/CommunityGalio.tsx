import type { ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import TwitterIcon from '../../static/img/twitter.svg'
import GithubIcon from '../../static/img/github.svg'
import MessageIcon from '../../static/img/message.svg'
import { useTranslations } from '../hooks/useTranslations';

type FeatureItem = {
    title: string;
    description: ReactNode;
    icon: ReactNode;
    color: string; 
};

export default function CommunityGalio(): ReactNode {
    const { t } = useTranslations();

    const FeatureList: FeatureItem[] = [
        {
            title: t('community.twitter.title'),
            description: (
                <>
                    {t('community.twitter.description')}
                </>
            ),
            icon: <TwitterIcon className="h-9 w-9 text-white" />,
            color: 'bg-pink-500',
        },
        {
            title: t('community.github.title'),
            description: (
                <>
                    {t('community.github.description')}
                </>
            ),
            icon: <GithubIcon className="h-10 w-10 text-white" />,
            color: 'bg-pink-500',
        },
        {
            title: t('community.community.title'),
            description: (
                <>
                    {t('community.community.description')}
                </>
            ),
            icon: <MessageIcon className="h-10 w-10 text-white" />,
            color: 'bg-pink-500',
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
                <div className='flex justify-start md:justify-center p-10 text-gray-700 dark:text-white text-3xl md:text-5xl font-semibold'>
                    {t('community.title')}
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pt-5 pb-20'>
                <h1 className='text-3xl text-gray-700 dark:text-white font-semibold pb-8'>{t('community.contributors')}</h1>
                <a href="https://github.com/galio-org/galio/contributors">
                        <img src="https://opencollective.com/galio/contributors.svg?width=890&amp;button=false" />
                    </a>
            </div>
        </section>
    );
}
