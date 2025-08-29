import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Ratings from './Ratings';
import { CodeBracketIcon, StarIcon } from '@heroicons/react/16/solid';
import { useTranslations } from '../hooks/useTranslations';

type FeatureItem = {
    title: string;
    pic: string;
    description: ReactNode;
    linkText1: string;
    linkText2: string;
    linkText3: string;
};

export default function GalioExamples(): ReactNode {
    const { t } = useTranslations();

    const FeatureList: FeatureItem[] = [
        {
            title: t('galioExamples.materialKit.title'),
            pic: '/img/material-kit.jpg',
            description: (
                <div>
                    {t('galioExamples.materialKit.description')}
                </div>
            ),
            linkText1: "https://github.com/creativetimofficial/material-kit-react-native",
            linkText2: 'https://www.creative-tim.com/product/material-kit-react-native?ref=galioapppage',
            linkText3: 'https://github.com/creativetimofficial/material-kit-react-native',
        },
        {
            title: t('galioExamples.galioExamples.title'),
            pic: '/img/galio.jpg',
            description: (
                <div>
                    {t('galioExamples.galioExamples.description')}
                </div>
            ),
            linkText1: "https://github.com/galio-org/galio-starter-kit",
            linkText2: '',
            linkText3: 'https://github.com/galio-org/galio/tree/examples',
        },
        {
            title: t('galioExamples.socialApp.title'),
            pic: '/img/profile.jpg',
            description: (
                <div>
                    {t('galioExamples.socialApp.description')}
                </div>
            ),
            linkText1: "https://github.com/SintionVlad/social-App",
            linkText2: '',
            linkText3: 'https://github.com/SintionVlad/social-App'
        },
        {
            title: t('galioExamples.argon.title'),
            pic: '/img/argon.jpg',
            description: (
                <div>
                    {t('galioExamples.argon.description')}
                </div>
            ),
            linkText1: "https://github.com/SintionVlad/social-App",
            linkText2: 'https://www.creative-tim.com/product/argon-react-native?ref=galioapppage',
            linkText3: 'https://github.com/creativetimofficial/argon-react-native'
        },
    ];

    function Feature({ title, pic, description, linkText1, linkText2, linkText3 }: FeatureItem) {
        return (
            <div className={clsx('col col--6 w-full my-5')}>
                <a href={linkText3} className="border-gray-200 rounded-md shadow-2xl dark:bg-gray-800 overflow-hidden block h-full flex flex-col !no-underline text-gray-700 dark:text-white font-light">
                    <div className="w-full h-75 md:h-84 lg:h-80 flex-shrink-0">
                        <img
                            src={pic}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 padding-horiz--md py-4 flex flex-col">
                        <Heading as="h3">{title}</Heading>
                        <p className="flex-1 mb-4">{description}</p>
                        <div className="flex gap-2 mt-auto">
                            <a href={linkText1} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                                {t('galioExamples.github')}
                            </a>
                            {linkText2 && (
                                <a href={linkText2} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                                    {t('galioExamples.viewApp')}
                                </a>
                            )}
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    return (
        <section className='sm:md-5 md:15 lg:mx-30'>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className='p-10 flex items-center justify-center'>
                <a href={"hello@galio.io"} className="!no-underline py-3 px-6 text-indigo-500 border border-indigo-600 font-semibold rounded-xl">
                    {t('galioExamples.sendProject')}
                </a>
            </div>
        </section>
    );
}