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

export default function GalioPremium(): ReactNode {
    const { t } = useTranslations();

    const FeatureList: FeatureItem[] = [
        {
            title: t('galioExamples.materialKit.title'),
            pic: '/img/premium-material.jpg',
            description: (
                <div>
                    {t('galioExamples.materialKit.description')}
                </div>
            ),
            linkText1: "",
            linkText2: 'https://www.creative-tim.com/product/material-kit-pro-react-native?ref=galioapppage',
            linkText3: 'https://www.creative-tim.com/product/material-kit-pro-react-native?ref=galioapppage',
        },
        {
            title: t('galioExamples.galioExamples.title'),
            pic: '/img/premium-argon.jpg',
            description: (
                <div>
                    {t('galioExamples.galioExamples.description')}
                </div>
            ),
            linkText1: "",
            linkText2: 'https://www.creative-tim.com/product/argon-pro-react-native?ref=galioapppage',
            linkText3: 'https://www.creative-tim.com/product/argon-pro-react-native?ref=galioapppage',
        },
        {
            title: t('galioExamples.nowUiPro.title'),
            pic: '/img/premium-now.jpg',
            description: (
                <div>
                    {t('galioExamples.nowUiPro.description')}
                </div>
            ),
            linkText1: "",
            linkText2: 'https://www.creative-tim.com/product/now-ui-pro-react-native?ref=galioapppage',
            linkText3: 'https://www.creative-tim.com/product/now-ui-pro-react-native?ref=galioapppage'
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
                        <div className='flex justify-between'><Heading as="h3">{title}</Heading> <span className='font-semibold text-xl'>$149</span></div>
                        <p className="flex-1 mb-4">{description}</p>
                        <div className="flex gap-2 mt-auto">
                            {linkText1 && (
                                <a href={linkText1} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                                    {t('galioExamples.github')}
                                </a>
                            )}
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