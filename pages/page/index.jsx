import { useTranslation } from 'react-i18next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import HeadComp from '@/layout/headcomp'

const inter = Inter({ subsets: ['latin'] })

const Homepage = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <>
        <HeadComp title="Tell | Home" />
        <main className={`${inter.className} pt-[10vh]`}>
          <section className="fixed hero h-[100vh] w-full z-[-1]"></section>
          <section className="pb-[201px] md:w-full w-[90%] mx-auto pt-[180px]">
            <h1 className="text-white flex gap-[20px] wow fadeInDown md:text-[55px] text-[32px] leading-[70px] font-[600] md:w-fit md:mx-auto md:text-center">
              {t("Hero.Title")}
              <Typewriter
                options={{
                  strings: [t("Hero.hope"), t("Hero.faith"), t("Hero.community")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1 className="text-white wow fadeInDown md:text-[55px] text-[32px] leading-[70px] font-[600] md:w-fit md:mx-auto mb-[24px] md:text-center">{t("Hero.TitleTwo")}</h1>
            <p className="md:w-[75%] wow fadeIn md:text-center mx-auto text-white md:text-[20px] text-[16px] mb-[32px] font-[400] md:font-[500] tracking-[0.3px]">
              {t("Hero.text")}
            </p>
            <div className="flex flex-col md:flex-row md:w-fit mx-auto gap-[16px]">
              <button className="btn-generic w-full md:min-w-max">{t("NavEl.BtnTexts")}</button>
              <button className="btn-white w-full md:min-w-max">{t("Hero.BtnTexts")}</button>
            </div>
          </section>
          <section id="mission" className="py-[81px] bg-white">
            <div className="md:w-[85%] w-[90%] flex flex-col-reverse md:flex-row items-center gap-[80px] mx-auto">
              <figure className="relative rounded-[8px] overflow-hidden md:w-[420px] w-full h-[334px] md:h-[408px]">
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
                  <h3 className="text-[#05030A] md:text-[18px] text-[16px] font-[500]">
                    {t("sectionOne.subHeading")}
                  </h3>
                </div>
                <h2 className="md:text-[40px] text-[24px] leading-[40px] font-[600] tracking-[0.06px] mb-[32px] text-[#05120B]">{t("sectionOne.heading")}</h2>
                <p className="mb-[32px] text-[#595959] md:text-[18px] text-[16px] leading-[30px] font-[400]">
                  {t("sectionOne.text")}
                </p>
                <button className="btn-generic">{t("NavEl.BtnTexts")}</button>
              </div>
            </div>
          </section>
          <section className="pt-[80px] pb-[60px] bg-[#FBF6F6]">
            <div className="md:w-[88%] w-[90%] mx-auto">
              <h2 className="mb-[74px] text-[#000000] md:text-[40px] text-[24px] font-[600] text-center">{t("values.heading")}</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[18px] gap-y-[16px] md:gap-y-[24px] mb-[56px]">
                <div className="bg-[url('/images/values-1.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border border-black pt-[219px] pl-[27px] pb-[37px]">
                  <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardOne.heading")}</h3>
                  <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardOne.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-2.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                  <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardTwo.heading")}</h3>
                  <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardTwo.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-3.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                  <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardThr.heading")}</h3>
                  <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardThr.text")}
                  </p>
                </div>
                <div className="border bg-[url('/images/values-4.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                  <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardFour.heading")}</h3>
                  <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardFour.text")}
                  </p>
                </div>
              </div>
              <div className="w-fit md:mx-auto">
                <button className="btn-generic">{t("values.btnText")}</button>
              </div>
            </div>
          </section>
          <section id="about" className="py-[91px] bg-white">
            <h2 className="text-black font-[600] md:text-[40px] text-[24px] text-center mb-[24px]">{t("whoWeAre.heading")}</h2>
            <p className="leading-[21.6px] text-[#595959] md:text-[18px] text-[16px] font-[400] md:w-[60%] w-[85%] mb-[62px] mx-auto text-center">
              {t("whoWeAre.text")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[32px] md:w-[85%] w-[90%] mx-auto">
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-1.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardOne.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardOne.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardOne.textOne")}
                  </p>
                  <h3 className="text-black font-[600] text-[24px] mb-[8px]">{t("whoWeAre.cardOne.headingTwo")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardOne.textTwo")}
                  </p>
                </div>
              </div>
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-2.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardTwo.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardTwo.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px]">
                    {t("whoWeAre.cardTwo.textOne")}
                  </p>
                </div>
              </div>
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-3.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardThr.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardThr.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardThr.textOne")}
                  </p>
                  <h3 className="text-black font-[600] text-[24px] mb-[8px]">{t("whoWeAre.cardThr.headingTwo")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardThr.textTwo")}
                  </p>
                </div>
              </div>
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-4.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardFour.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardFour.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardFour.textOne")}
                  </p>
                  <h3 className="text-black font-[600] text-[24px] mb-[8px]">{t("whoWeAre.cardFour.headingTwo")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardFour.textTwo")}
                  </p>
                </div>
              </div>
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-5.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardFiv.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardFiv.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardFiv.textOne")}
                  </p>
                  <h3 className="text-black font-[600] text-[24px] mb-[8px]">{t("whoWeAre.cardFiv.headingTwo")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardFiv.textTwo")}
                  </p>
                </div>
              </div>
              <div className="px-[15px] py-[10px] border border-[#A49E9E69] rounded-[16px]">
                <figure className="h-[433px] relative rounded-[8px] overflow-hidden bg-blend-overlay bg-[#00000033] bg-cover bg-center bg-[url('/images/who-we-are-6.png')]">
                  <figcaption className="absolute bottom-[16px] p-[10px] rounded-[8px] bg-[#FFFFFF99] left-[5px]">{t("whoWeAre.cardSix.figCaption")}</figcaption>
                </figure>
                <div className="pt-[32px]">
                  <h3 className="mb-[8px] text-black text-[24px] font-[600]">{t("whoWeAre.cardSix.headingOne")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardSix.textOne")}
                  </p>
                  <h3 className="text-black font-[600] text-[24px] mb-[8px]">{t("whoWeAre.cardSix.headingTwo")}</h3>
                  <p className="text-[#595959] md:text-[18px] text-[16px] font-[400] leading-[21.6px] mb-[24px]">
                    {t("whoWeAre.cardSix.textTwo")}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-[44px] bg-[#FBF6F6]">
            <div className="md:w-[85%] w-[90%] mx-auto">
              <h2 className="md:text-[40px] text-[24px] font-[600] text-[#05120B] mb-[60px] text-center">{t("help.heading")}</h2>
              <div className="flex flex-col md:flex-row gap-[16px] items-center">
                <div className="h-[569px] text-white flex items-center flex-col justify-center w-full rounded-[8px] md:rounded-none py-[93px] md:py-0 flex-1 bg-blend-overlay bg-[#0705119C] bg-cover bg-center bg-[url('/images/donation.png')]">
                  <div className="w-fit mx-auto">
                    <h2 className="text-white mb-[16px] text-[32px] text-center font-[600]">{t("help.cardOne.heading")}</h2>
                    <ul className="list-inside space-y-[16px] text-[18px] font-[400] mb-[34px] list-disc">
                      <li>{t("help.cardOne.pointOne")}</li>
                      <li>{t("help.cardOne.pointTwo")}</li>
                    </ul>
                    <div className="w-fit mx-auto">
                      <button className="btn-generic">{t("Hero.BtnTexts")}</button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 py-[93px] md:py-0 w-full rounded-[8px] md:rounded-none h-[569px] text-white flex items-center flex-col justify-center bg-blend-overlay bg-[#0705119C] bg-cover bg-center bg-[url('/images/prayer.png')]">
                  <div className="w-fit mx-auto">
                    <h2 className="text-white mb-[16px] text-[32px] text-center font-[600]">{t("help.cardTwo.heading")}</h2>
                    <ul className="list-inside text-[18px] font-[400] mb-[34px] list-disc">
                      <li>{t("help.cardTwo.pointOne")}</li>
                    </ul>
                    <div className="w-fit mx-auto">
                      <button className="btn-trans">{t("NavEl.BtnTexts")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-[78px] pb-[63px] bg-white">
            <div className="md:w-[85%] w-[90%] justify-between flex-col md:flex-row flex mx-auto">
              <div className="md:w-[40%] md:text-white md:bg-[url('/images/values-2.png')] md:bg-center md:bg-cover md:bg-no-repeat md:bg-blend-overlay md:bg-[#00000099] px-[32px] md:flex md:flex-col md:items-center justify-center">
                <div>
                  <h2 className="mb-[32px] text-[24px] text-[#05120B] md:text-inherit md:text-[30px] font-[700]">{t("getInTouch.heading")}</h2>
                  <address className="leading-[24px] mb-[24px] text-[#595959] md:text-inherit font-[400] text-[16px]">
                    6 Lower Clarence Road <br />
                    Norwich
                  </address>
                  <div className="flex md:text-white text-[16px] text-[#595959] font-[400] mb-[12px] gap-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +234 7311067887
                  </div>
                  <div className="flex md:text-white text-[16px] text-[#595959] font-[400] mb-[12px] gap-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Kephale.tell@gmail.com
                  </div>
                </div>
              </div>
              <form className="md:w-[55%] space-y-[24px]">
                <input type="text" className="input-generic" placeholder={t("getInTouch.formEl.name")} />
                <input type="email" className="input-generic" placeholder={t("getInTouch.formEl.mail")} />
                <input type="number" className="input-generic" placeholder={t("getInTouch.formEl.phone")} />
                <textarea cols="30" rows="5" className="input-textarea" placeholder={t("getInTouch.formEl.message")} />
                <button className="btn-generic" type="submit">{t("getInTouch.formEl.btnText")}</button>
              </form>
            </div>
          </section>
        </main>
    </>
  )
}

export default Homepage
