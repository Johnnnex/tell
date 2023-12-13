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
                                <button onClick={()=> toggleVisibility("one")}>
                                    { testimonials.one == false ? 
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                                    </svg>) : 
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 35 36" fill="none">
                                            <path d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083" fill="#D51D13"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className={`text-[16px] ${testimonials.one == false ? "max-h-0" : "pt-[16px]"} text-[13px] overflow-hidden transition-[.4s] font-[400]`}>
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
                                <button onClick={()=> toggleVisibility("two")}>
                                    { testimonials.two == false ? 
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                                    </svg>) : 
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 35 36" fill="none">
                                            <path d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083" fill="#D51D13"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className={`text-[16px] ${testimonials.two == false ? "max-h-0" : "pt-[16px]"} text-[13px] overflow-hidden transition-[.4s] font-[400]`}>
                                <a href="https://linktr.ee/widEdo" target='_blank' className="text-[#0673EF]">https://linktr.ee/widEdo</a>
                            </p>
                            {t("pageTwo.sectionTwo.textSix")}
                            <br />
                            <div className="flex justify-between  items-center">
                                <h5 className="w-[80%] md:w-[95%]">{t("pageTwo.sectionTwo.textSvn")}</h5>
                                <button onClick={()=> toggleVisibility("three")}>
                                    { testimonials.three == false ? 
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z" fill="#666481"/>
                                    </svg>) : 
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 35 36" fill="none">
                                            <path d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083" fill="#D51D13"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className={`text-[16px] ${testimonials.three == false ? "max-h-0" : "pt-[16px]"} text-[13px] overflow-hidden transition-[.4s] font-[400]`}>
                                <a href="https://linktr.ee/widEdo" target='_blank' className="text-[#0673EF]">https://linktr.ee/widEdo</a>
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
