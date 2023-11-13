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
                    <path d="M0 3C27.2982 3 69.3742 3 87 3" stroke="#D51D13" stroke-width="6"/>
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
        </main>
    </>
  )
}

export default Homepage
