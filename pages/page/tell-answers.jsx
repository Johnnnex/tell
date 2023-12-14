import HeadComp from '@/layout/headcomp'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

const TellAnswers = () => {
    const [t, i18n] = useTranslation("global")
    const [testimonials, setTestimonials] = useState({
        one : false,
        two : false,
        three: false
    })
    const toggleVisibility = (val) => {
        switch(val) {
            case "one" :
                setTestimonials({
                    one: !testimonials.one,
                    two: false,
                    three: false
                })
                break
            case "two" :
                setTestimonials({
                    one: false,
                    two: !testimonials.two,
                    three: false
                })
                break        
            case "three" :
                setTestimonials({
                    one: false,
                    two: false,
                    three: !testimonials.three
                })
                break        
        }
    }
    return (
    <>
        <HeadComp title="Tell | Tell Answers" />
        <main className={`${inter.className} pb-[108px] pt-[100px] md:pt-[190px]`}>
            <section className="md:w-[85%] w-[90%] mx-auto">
                <div className="flex wow fadeIn flex-col gap-[24px] md:gap-0 md:flex-row mb-[24px] md:mb-[40px] justify-between">
                    <div className="md:w-[48%] rounded-[16px] border border-[rgba(89, 89, 89, 0.20)] p-[15px]">
                        <figure className="h-[252px] bg-[url('/images/values-2.png')] rounded-[8px] border border-black bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#00000099] mb-[32px]"></figure>
                        <h3 className="text-[#05120B] font-[600] text-[18px] md:text-[24px] mb-[19px]">
                            {t("pageTwo.sectionOne.heading")}
                        </h3>
                        <p className="text-[#595959] font-[400] text-[16px] md:text-[18px] leading-[32px]">
                            {t("pageTwo.sectionOne.textOne")}
                            <br /><br/>
                            {t("pageTwo.sectionOne.textTwo")}
                            <br/>
                            {t("pageTwo.sectionOne.textThr")}
                            <br/>
                            {t("pageTwo.sectionOne.textFour")}
                            <br/>
                            {t("pageTwo.sectionOne.textFive")}
                            <br/>
                            {t("pageTwo.sectionOne.textSix")}
                        </p>
                    </div>
                    <div className="md:w-[48%] rounded-[16px] border border-[rgba(89, 89, 89, 0.20)] p-[15px]">
                        <figure className="h-[252px] bg-[url('/images/reading-bible.jpeg')] rounded-[8px] border border-black bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#00000099] mb-[32px]"></figure>
                        <h3 className="text-[#05120B] font-[600] text-[18px] md:text-[24px] mb-[19px]">
                            {t("pageTwo.sectionTwo.heading")}
                        </h3>
                        <div className="text-[#595959] font-[400] text-[16px] md:text-[18px] leading-[32px]">
                            {t("pageTwo.sectionTwo.textOne")}
                            <br /> <br />
                            {t("pageTwo.sectionTwo.textTwo")}
                            <br /> <br />
                            <div className="flex justify-between  items-center">
                                <h5 className="w-[80%] md:w-[95%]">{t("pageTwo.sectionTwo.textThr")}</h5>
                                <button className="w-[6%]" onClick={()=> toggleVisibility("one")}>
                                    <svg viewBox="0 0 24 24" className={ testimonials.one == false ? "rotate-0 transition-[.4s]" : "rotate-180 transition-[.4s]"} fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <rect width="24" height="24" fill="white"></rect> 
                                            <path d="M7 14.5L12 9.5L17 14.5" stroke="#D51D13" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <p className={`${testimonials.one == false ? "max-h-0" : "pt-[16px]"} font-[500] text-[14px] overflow-hidden transition-[.4s] font-[400]`}>
                                {t("pageTwo.qanda.qone")}
                                <br />
                                {t("pageTwo.qanda.pone")}
                                <br />
                                {t("pageTwo.qanda.textone")}
                                <br />
                                {t("pageTwo.qanda.ptwo")}
                                <br />
                                {t("pageTwo.qanda.texttwo")}
                                <br />
                                {t("pageTwo.qanda.pthr")} <span className="underline">{t("pageTwo.qanda.underlineone")}</span> {t("pageTwo.qanda.pfour")} <span className="underline">{t("pageTwo.qanda.underlinetwo")}</span> {t("pageTwo.qanda.pfiv")}
                                <br />  
                                {t("pageTwo.qanda.textthr")} 
                                <br />
                                {t("pageTwo.qanda.psix")} <span className="underline">{t("pageTwo.qanda.underlinethr")}</span>
                            </p>
                            {t("pageTwo.sectionTwo.textFour")}
                            <br />
                            <div className="flex justify-between  items-center">
                                <h5 className="w-[80%] md:w-[95%]">{t("pageTwo.sectionTwo.textFive")}</h5>
                                <button className="w-[6%]" onClick={()=> toggleVisibility("two")}>
                                    <svg viewBox="0 0 24 24" className={ testimonials.two == false ? "rotate-0 transition-[.4s]" : "rotate-180 transition-[.4s]"} fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <rect width="24" height="24" fill="white"></rect> 
                                            <path d="M7 14.5L12 9.5L17 14.5" stroke="#D51D13" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <p className={`text-[16px] ${testimonials.two == false ? "max-h-0" : "pt-[16px]"} font-[500] text-[14px] overflow-hidden transition-[.4s] font-[400]`}>
                                {t("pageTwo.qanda.qtwo")}
                                <br />
                                {t("pageTwo.qanda.textfour")}
                                <br />
                                {t("pageTwo.qanda.psvn")} <span className="font-[700]">{t("pageTwo.qanda.bone")}</span>
                                <br />
                                {t("pageTwo.qanda.textfiv")}
                                <br />
                                {t("pageTwo.qanda.peit")} <span className="font-[700]">{t("pageTwo.qanda.btwo")}</span>
                                <br />
                                {t("pageTwo.qanda.textsix")}
                                <br />
                                {t("pageTwo.qanda.pnine")} <span className="font-[700]">{t("pageTwo.qanda.bthr")}</span>
                            </p>
                            {t("pageTwo.sectionTwo.textSix")}
                            <br />
                            <div className="flex justify-between items-center">
                                <h5 className="w-[80%] md:w-[95%]">{t("pageTwo.sectionTwo.textSvn")}</h5>
                                <button className="w-[6%]" onClick={()=> toggleVisibility("three")}>
                                    <svg viewBox="0 0 24 24" className={ testimonials.three == false ? "rotate-0 transition-[.4s]" : "rotate-180 transition-[.4s]"} fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <rect width="24" height="24" fill="white"></rect> 
                                            <path d="M7 14.5L12 9.5L17 14.5" stroke="#D51D13" stroke-linecap="round" stroke-linejoin="round"></path> 
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <p className={`${testimonials.three == false ? "max-h-0" : "pt-[16px]"} text-[14px] font-[500] overflow-hidden transition-[.4s] font-[400]`}>
                                {t("pageTwo.qanda.qthr")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex wow fadeIn md:flex-row flex-col justify-between">
                    <div className="md:w-[48%] rounded-[16px] border border-[rgba(89, 89, 89, 0.20)] p-[15px]">
                        <figure className="h-[252px] bg-[url('/images/group-discussion.jpeg')] rounded-[8px] border border-black bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#00000099] mb-[32px]"></figure>
                        <h3 className="text-[#05120B] font-[600] text-[18px] md:text-[24px] mb-[19px]">
                            {t("pageTwo.sectionThr.heading")}
                        </h3>
                        <p className="text-[#595959] font-[400] text-[16px] md:text-[18px] leading-[32px]">
                            {t("pageTwo.sectionThr.textOne")}
                            <br /><br />
                            {t("pageTwo.sectionThr.textTwo")}
                            <br />
                            {t("pageTwo.sectionThr.textThr")}
                            <br />
                            {t("pageTwo.sectionThr.textFour")}
                        </p>
                    </div>
                    <div className="md:w-[48%] rounded-[16px] border border-[rgba(89, 89, 89, 0.20)] p-[15px]">
                        <figure className="h-[252px] bg-[url('/images/prayers.jpeg')] rounded-[8px] border border-black bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#00000099] mb-[32px]"></figure>
                        <h3 className="text-[#05120B] font-[600] text-[18px] md:text-[24px] mb-[19px]">
                            {t("pageTwo.sectionFour.heading")}
                        </h3>
                        <p className="text-[#595959] font-[400] text-[16px] md:text-[18px] leading-[32px]">
                            {t("pageTwo.sectionFour.textOne")}
                            <br /><br />
                            {t("pageTwo.sectionFour.textTwo")}
                            <br />
                            {t("pageTwo.sectionFour.textThr")}
                            <br />
                            {t("pageTwo.sectionFour.textFour")}
                            <br />
                            {t("pageTwo.sectionFour.textFive")}
                            <br />
                            {t("pageTwo.sectionFour.textSix")}
                        </p>
                    </div>
                </div>            
            </section>
        </main>
    </>
  )
}

export default TellAnswers
