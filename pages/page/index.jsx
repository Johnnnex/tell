import { useTranslation } from 'react-i18next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import HeadComp from '@/layout/headcomp'

const inter = Inter({ subsets: ['latin'] })

const Homepage = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <>
        <HeadComp title="Tell | Home" />
        <main className={`${inter.className} mt-[10vh]`}>
          <section className="fixed hero h-[100vh] w-full z-[-1]"></section>
          <section className="pb-[201px] pt-[180px]">
            <h1 className="text-white text-[55px] leading-[70px] font-[600] w-[80%] mx-auto mb-[24px] text-center">
              {t("Hero.Title")}
            </h1>
            <p className="w-[75%] text-center mx-auto text-white text-[20px] mb-[32px] font-[500] tracking-[0.3px]">
              {t("Hero.text")}
            </p>
            <div className="flex w-fit mx-auto gap-[16px]">
              <button className="btn-generic">{t("NavEl.BtnTexts")}</button>
              <button className="btn-white">{t("Hero.BtnTexts")}</button>
            </div>
          </section>
          <section className="py-[81px] bg-white">
            <div className="w-[85%] flex items-center gap-[80px] mx-auto">
              <figure className="relative rounded-[8px] overflow-hidden w-[420px] h-[408px]">
                <Image 
                  src="/images/section-img.jpeg"
                  alt="man-praying"
                  fill
                />
              </figure>
              <div className="flex-1">
                <div className="flex items-center mb-[32px] gap-[24px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                    <path d="M0 3C27.2982 3 69.3742 3 87 3" stroke="#D51D13" strokeWidth="6"/>
                  </svg>
                  <h3 className="text-[#05030A] text-[18px] font-[500]">
                    {t("sectionOne.subHeading")}
                  </h3>
                </div>
                <h2 className="text-[40px] font-[600] tracking-[0.06px] mb-[32px] text-[#05120B]">{t("sectionOne.heading")}</h2>
                <p className="mb-[32px] text-[#595959] text-[18px] leading-[30px] font-[400]">
                  {t("sectionOne.text")}
                </p>
                <button className="btn-generic">{t("NavEl.BtnTexts")}</button>
              </div>
            </div>
          </section>
          <section className="pt-[80px] pb-[60px] bg-white">
            <div className="w-[88%] mx-auto">
              <h2 className="mb-[74px] text-[#000000] text-[40px] font-[600] text-center">{t("values.heading")}</h2>
              <div className="grid grid-cols-2 gap-x-[18px] gap-y-[24px] mb-[56px]">
                <div className="bg-[url('/images/values-1.png')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border border-black pt-[219px] pl-[27px] pr-[131px] pb-[37px]">
                  <h3 className="text-white font-[600] text-[30px] mb-[24px]">{t("values.cardOne.heading")}</h3>
                  <p className="text-[18px] text-white font-[400] leading-[27px]">
                    {t("values.cardOne.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-2.png')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pr-[131px] pb-[37px]">
                  <h3 className="text-white font-[600] text-[30px] mb-[24px]">{t("values.cardTwo.heading")}</h3>
                  <p className="text-[18px] text-white font-[400] leading-[27px]">
                    {t("values.cardTwo.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-3.png')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pr-[131px] pb-[37px]">
                  <h3 className="text-white font-[600] text-[30px] mb-[24px]">{t("values.cardThr.heading")}</h3>
                  <p className="text-[18px] text-white font-[400] leading-[27px]">
                    {t("values.cardThr.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-4.png')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pr-[131px] pb-[37px]">
                  <h3 className="text-white font-[600] text-[30px] mb-[24px]">{t("values.cardFour.heading")}</h3>
                  <p className="text-[18px] text-white font-[400] leading-[27px]">
                    {t("values.cardFour.text")}
                  </p>
                </div>
              </div>
              <div className="w-fit mx-auto">
                <button className="btn-generic"></button>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Homepage
