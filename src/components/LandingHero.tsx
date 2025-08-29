import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "../hooks/useTranslations";

export default function LandingHero(): ReactNode {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { t } = useTranslations();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="mt-6 sm:mt-10 lg:mt-16 xl:mt-20 mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-18">
            <div className="relative w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 z-[1] overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="absolute inset-0 z-[1]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 rounded-2xl sm:rounded-3xl"></div>
                    <div 
                        className="absolute inset-0 opacity-70 rounded-2xl sm:rounded-3xl"
                        style={{
                            background: `
                                radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                                radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 90% 90%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
                            `,
                            animation: 'float 8s ease-in-out infinite'
                        }}
                    ></div>
                    <div 
                        className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
                        style={{
                            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
                            left: mousePosition.x - 48,
                            top: mousePosition.y - 48,
                            transform: 'translate(-50%, -50%)'
                        }}
                    ></div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div 
                            className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full opacity-20"
                            style={{
                                background: 'linear-gradient(45deg, #ec4899, #f472b6)',
                                top: '20%',
                                right: '15%',
                                animation: 'bounce 6s ease-in-out infinite'
                            }}
                        ></div>
                        <div 
                            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-15 rotate-45"
                            style={{
                                background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                                top: '60%',
                                right: '25%',
                                animation: 'bounce 4s ease-in-out infinite reverse'
                            }}
                        ></div>
                        <div 
                            className="absolute w-6 h-6 sm:w-8 sm:h-8 opacity-25"
                            style={{
                                background: 'linear-gradient(45deg, #f472b6, #a855f7)',
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                top: '40%',
                                left: '10%',
                                animation: 'float 5s ease-in-out infinite'
                            }}
                        ></div>
                        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 opacity-10 text-pink-500 font-mono text-xs sm:text-sm transform rotate-12">
                            {'<Galio />'}
                        </div>
                        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-6 sm:left-8 md:left-12 opacity-10 text-purple-600 font-mono text-xs sm:text-sm transform -rotate-6">
                            {'{ components }'}
                        </div>
                    </div>
                </div>
                <div className="relative z-[4] space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal tracking-[-0.02em] text-gray-600">
                            {t('hero.waitOver')}
                        </h2>
                        <h2 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold tracking-[-0.02em]"
                            style={{
                                background: 'linear-gradient(45deg, #1f2937, #6366f1, #ec4899)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {t('hero.galioHere')}
                        </h2>
                        <p className="max-w-full sm:max-w-md md:max-w-lg text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                            {t('hero.description')}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mt-6 z-[4] relative">
                        <a 
                            href="/docs/intro"
                            className="appearance-none text-white text-sm md:text-base hover:scale-105 transition-all duration-300 no-underline px-6 sm:px-8 py-3 md:py-4 rounded-full z-[4] font-medium shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                            style={{
                                background: 'linear-gradient(45deg, #6366f1, #ec4899, #f472b6)',
                                boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)'
                            }}
                        >
                            {t('hero.startBuilding')}
                        </a>
                        <a 
                            href="/docs/intro" 
                            className="hidden md:block text-pink-600 hover:text-pink-700 underline hover:no-underline transition-all duration-200 z-[4] font-medium px-4 py-2 rounded-lg hover:bg-pink-50 text-sm md:text-base"
                        >
                            {t('hero.learnMore')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}