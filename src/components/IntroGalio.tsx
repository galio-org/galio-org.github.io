import { JSX, useState } from "react";
import Starshub from "./Starshub";
import Ratings from "./Ratings";
import { ChatBubbleBottomCenterTextIcon, StarIcon } from "@heroicons/react/16/solid";
import { ShareIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "../hooks/useTranslations";
import CarbonAds from "./CarbonAds";

export default function IntroGalio(): JSX.Element {
    const [copied, setCopied] = useState(false);
    const { t } = useTranslations();
    
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section className="px-4 sm:px-6 lg:px-18 mx-auto">
            <Starshub />
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                {/* Left Content */}
                <div className="lg:w-[60%] space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-3xl leading-tight tracking-tight sm:text-5xl sm:leading-tight lg:text-6xl font-bold bg-gradient-to-r from-[#ff1270] via-purple-600 to-cyan-500 dark:from-[#ff1270] dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            {t('intro.title')}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            {t('intro.description')}
                        </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <a 
                            href="/docs/intro" 
                            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#ff1270] to-cyan-800 dark:from-[#ff1270] dark:to-cyan-600 text-white font-semibold py-4 px-8 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#ff1270]/25 dark:hover:shadow-cyan-500/25 dark:focus:ring-cyan-500 w-full sm:w-auto"
                        >
                            <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z" fill="currentColor" />
                            </svg>
                            {t('intro.seeDocumentation')}
                        </a>
                        
                        <button 
                            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-4 px-6 transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 border border-gray-200 dark:border-gray-700 w-full sm:w-auto"
                            onClick={() => handleCopy(t('intro.npmCommand'))}
                        >
                            {copied ? (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289Z" fill="currentColor" />
                                    </svg>
                                    <span>{t('intro.copied')}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:scale-110">
                                        <path d="M13.5 2.5H6.5C5.67 2.5 5 3.17 5 4V10C5 10.83 5.67 11.5 6.5 11.5H13.5C14.33 11.5 15 10.83 15 10V4C15 3.17 14.33 2.5 13.5 2.5ZM13.5 10H6.5V4H13.5V10ZM4 6.5H2.5C1.67 6.5 1 7.17 1 8V12C1 12.83 1.67 13.5 2.5 13.5H9.5C10.33 13.5 11 12.83 11 12H9.5V8H4V6.5Z" fill="currentColor" />
                                    </svg>
                                    <span className="font-mono text-sm">{t('intro.npmCommand')}</span>
                                </div>
                            )}
                        </button>
                    </div>
                    <div>
                        <CarbonAds serve="CE7IPK3L" placement="galioio" />
                    </div>
                </div>
                <div className="lg:w-[50%] mt-12 lg:mt-0">
                    <div className="flex flex-col items-center justify-center space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff1270] to-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <img 
                                src="/img/logo.png" 
                                alt="galio framework" 
                                className="relative w-28 h-28 object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[t('intro.github'), t('intro.documentation'), t('intro.releases')].map((item) => (
                                <button 
                                    key={item}
                                    className="px-6 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-[#ff1270]/30 dark:border-[#ff1270]/50 rounded-lg transition-all duration-200 hover:bg-[#ff1270]/10 dark:hover:bg-[#ff1270]/20 hover:border-[#ff1270] dark:hover:border-[#ff1270] hover:text-[#ff1270] dark:hover:text-[#ff1270] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff1270] focus:ring-offset-2"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                            <Ratings 
                                icon={StarIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                ratingType={t('intro.stars')} 
                                link="https://github.com/galio-org/galio"
                                repo="galio-org/galio"
                                field = "stars"
                            />
                            <Ratings 
                                icon={CodeBracketIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                ratingType={t('intro.fork')} 
                                link="https://github.com/galio-org/galio/fork"
                                repo = "galio-org/galio"
                                field = "forks"
                            />
                            <Ratings 
                                icon={HeartIcon} 
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }} 
                                rating={''} 
                                ratingType={t('intro.sponsor')} 
                                link="https://github.com/sponsors/galio-org"
                            />
                            <Ratings
                                icon={ChatBubbleBottomCenterTextIcon}
                                iconProps={{ className: "w-5 h-5 text-yellow-400" }}
                                rating={"online"}
                                ratingType={t('intro.chat')}
                                link="https://discordapp.com/invite/EwmQBxS"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}