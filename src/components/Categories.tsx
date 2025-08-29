import { JSX } from "react";
import { useTranslations } from "../hooks/useTranslations";

export default function Categories(): JSX.Element {
    const { t } = useTranslations();
    
    return (
        <div className="relative w-full h-130 md:h-200 overflow-hidden bg-white -top-25 md:-top-40">
            <svg viewBox="300 10 560 390" className="w-full h-full absolute inset-0" preserveAspectRatio="none">
                <path d="M-0.5,0.5c455.3,182,910.7,364,1366,546c0-182,0-364,0-546H-0.5z" fill={"#080321"} />
            </svg>
            <div className="absolute inset-0 flex flex-col lg:items-start justify-center left-7 md:left-24 lg:left-38 top-100 md:top-100 lg:top-18 text-black font-light text-md md:text-3xl lg:text-5xl z-10">
                <span className="font-semibold">{t('categories.screens')}<br/></span> 
                <span className="">{t('categories.moreSoon')}<br/></span> 
            </div>
            <div className="absolute inset-0 flex flex-col items-end justify-center right-28 md:right-58 lg:right-28 top-100 md:top-100 lg:top-22 text-black md:text-black lg:text-white font-light text-md md:text-3xl lg:text-5xl z-10">
                <span className="font-semibold text-2xl md:text-5xl lg:text-6xl">{t('categories.elements')}<br/></span>
                <span>{t('categories.elementsText')}</span>
            </div>
            <div className="absolute inset-0 top-25 flex items-center justify-center z-20">
                <img
                    src="/img/category_screen.png"
                    alt="Center image"
                    className="w-70 h-80 md:w-90 md:h-100 lg:w-110 lg:h-120 object-fit"
                />
            </div>
        </div>
    )
}