import HeadComp from '@/layout/headcomp'
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

const TellAnswers = () => {
    const [t, i18n] = useTranslation("global")
    return (
    <>
        <HeadComp title="Tell | Tell Answers" />
        <main className={`${inter.className} pb-[108px] pt-[100px] md:pt-[190px]`}>
            <section className="md:w-[85%] w-[90%] mx-auto">
                <div className="flex flex-col gap-[24px] md:gap-0 md:flex-row mb-[24px] md:mb-[40px] justify-between">
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
                        <p className="text-[#595959] font-[400] text-[16px] md:text-[18px] leading-[32px]">
                            {t("pageTwo.sectionTwo.textOne")}
                            <br /> <br />
                            {t("pageTwo.sectionTwo.textTwo")}
                            <br /> <br />
                            {t("pageTwo.sectionTwo.textThr")}
                            <br />
                            {t("pageTwo.sectionTwo.textFour")}
                            <br />
                            {t("pageTwo.sectionTwo.textFive")}
                            <br />
                            {t("pageTwo.sectionTwo.textSix")}
                            <br />
                            {t("pageTwo.sectionTwo.textSvn")}
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between">
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
