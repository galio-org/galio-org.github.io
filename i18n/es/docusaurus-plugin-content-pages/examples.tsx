import Layout from "@theme/Layout";
import { JSX } from "react";
import Ratings from "../../../src/components/Ratings";
import { ChatBubbleBottomCenterTextIcon, CodeBracketIcon, HeartIcon, StarIcon } from "@heroicons/react/16/solid";
import GalioExamples from "../../../src/components/GalioExamples";
import { useTranslations } from "../../../src/hooks/useTranslations";

export default function Examples(): JSX.Element {
    const { t } = useTranslations();
    
    return (
        <Layout>
            <main className="flex flex-col items-center justify-center">
                <div className="lg:w-[53%] pt-15">
                    <div className="flex flex-col items-center ustify-center">
                        <h1 className="text-3xl md:text-4xl">{t('examples.title')}</h1>
                        <p className="text-xl md:text-2xl">{t('examples.subtitle')}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-8 p-8 dark:from-gray-800 dark:to-gray-900 rounded-3xl">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff1270] to-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <img 
                                src="/img/logo.png" 
                                alt="galio framework" 
                                className="relative w-28 h-28 object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[t('examples.github'), t('examples.documentation'), t('examples.releases')].map((item) => (
                                <button 
                                    key={item}
                                    className="px-6 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-[#ff1270]/30 dark:border-[#ff1270]/50 rounded-lg transition-all duration-200 hover:bg-[#ff1270]/10 dark:hover:bg-[#ff1270]/20 hover:border-[#ff1270] dark:hover:border-[#ff1270] hover:text-[#ff1270] dark:hover:text-[#ff1270] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff1270] focus:ring-offset-2"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:w-130">
                            <Ratings 
                                icon={StarIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                rating={3200} 
                                ratingType={t('examples.stars')} 
                                link="https://github.com/galio-org/galio"
                            />
                            <Ratings 
                                icon={CodeBracketIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                rating={325} 
                                ratingType={t('examples.fork')} 
                                link="https://github.com/galio-org/galio/fork"
                            />
                            <Ratings 
                                icon={HeartIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                rating={''} 
                                ratingType={t('examples.sponsor')} 
                                link="https://github.com/sponsors/galio-org"
                            />
                            <Ratings
                                icon={ChatBubbleBottomCenterTextIcon}
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }}
                                rating={"online"}
                                ratingType={t('examples.chat')}
                                link="https://discordapp.com/invite/EwmQBxS"
                            />
                        </div>
                    </div>
                </div>
                <GalioExamples/>
            </main>
        </Layout>
    )
} 