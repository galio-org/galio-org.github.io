import { JSX } from "react"
import { useTranslations } from "../hooks/useTranslations";

export default function GalioInterfaces(): JSX.Element {
    const { t } = useTranslations();
    
    return(
        <div className="top-0 lg:mt-0 md:mx-15 lg:mx-40 z-[1]">
            <div className="flex items-center justify-center pb-8">
                <h1 className="font-light text-center text-3xl md:text-5xl w-100 md:w-170">{t('galioInterfaces.title')}</h1>
            </div>
            <div className="flex flex-col w-full items-center justify-center grid md:grid-cols-4 gap-10 ">
                <img src="/img/screen1.png" alt="screens" className="border-gray-400 shadow-2xl rounded-3xl"/>
                <img src="/img/screen2.png" alt="screens" className="border-gray-400 shadow-2xl rounded-3xl"/>
                <img src="/img/screen3.png" alt="screens" className="border-gray-400 shadow-2xl rounded-3xl"/>
                <img src="/img/screen4.png" alt="screens" className="border-gray-400 shadow-2xl rounded-3xl"/>
            </div>
        </div>
    )
}