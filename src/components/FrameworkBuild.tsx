import { JSX } from "react";
import { useTranslations } from "../hooks/useTranslations";

export default function FrameworkBuild(): JSX.Element {
    const { t } = useTranslations();
    
    return (
        <div className="flex flex-col">
            {/* Mobile version - visible on small screens */}
            <div className="flex flex-col text-center px-6 md:hidden">
                <h1 className="text-gray-700 dark:text-white font-normal text-4xl font-bold mb-8">
                    {t('frameworkBuild.title')}
                </h1>
                <div className="flex text-start justify-center">
                    <p className="text-gray-700 dark:text-white text-sm font-light">
                        {t('frameworkBuild.description')}
                    </p>
                </div>
            </div>

            {/* Image container with desktop text overlay */}
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[750px]">
                <img
                    src="/img/img-framework.png"
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-contain object-center"
                />

                {/* Desktop version - hidden on small screens */}
                <div className="hidden md:flex flex-col text-center w-[55%] pt-20 lg:pt-15 lg:pt-40 pl-15">
                    <h1 className="text-gray-700 dark:text-white font-normal text-3xl lg:text-5xl font-bold mb-8">
                        {t('frameworkBuild.title')}
                    </h1>
                    <div className="flex text-start justify-center">
                        <p className="text-gray-700 dark:text-white text-xl lg:text-2xl font-light">
                            {t('frameworkBuild.description')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}