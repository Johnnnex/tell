import Image from "next/image"
import { Inter } from 'next/font/google'
import HeadComp from '@/layout/headcomp'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

const TheFaith = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <>
        <HeadComp title="Tell | The Faith" />
        <main className={`${inter.className}`}>
            <section className="bg-[url('/images/the-faith.jpeg')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#00000099] h-[100vh] fixed top-0 w-full z-[-1]"></section>
            <section className="bg-white">
                <section className="flex pt-[190px] justify-between pb-[123px] items-center w-[85%] mx-auto">
                    <figure className="h-[408px] relative rounded-[8px] bg-[url('/images/hands-to-heaven.jpeg')] bg-center bg-cover bg-no-repeat w-[35%] max-w-[420px]">
                        <figure className="absolute h-[190px] w-[196px] bg-[url('/images/hands-to-heaven-light.jpeg')] rounded-[4px] bg-center bg-cover bg-no-repeat right-[-44px] bottom-[-95px]"></figure>
                    </figure>
                    <div className="w-[55%]">
                        <h2 className="text-[#05120B] text-[40px] font-[600] mb-[24px]">{t("pageThr.sectionOne.heading")}</h2>
                        <ul className="space-y-[14px]">
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textOne")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textTwo")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textThr")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textFour")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textFive")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textSix")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textSvn")}
                                </li>
                            </div>
                            <div className="relative pl-[10px]">
                                <span className="w-[6px] absolute top-0 left-0 h-[6px] rounded-[100px] bg-[#D51D13]"></span>
                                <li className="leading-[32px] text-[#595959] text-[18px] font-[400]">
                                    {t("pageThr.sectionOne.textEit")}
                                </li>
                            </div>
                        </ul>
                    </div>
                </section>
            </section>
            <section className="bg-transparent pt-[58px]">
                <div className="w-[80%] mx-auto">
                    <h2 className="mb-[17px] text-white font-[600] text-[40px]">{t("pageThr.sectionTwo.heading")}</h2>
                    <div className="flex pb-[32px] justify-between">
                        <div className="w-[32.5%] bg-white rounded-[8px] p-[30px]">
                            <div className="px-[10px] mb-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="39" viewBox="0 0 51 39" fill="none">
                                    <path d="M5.08734 35.4598C2.19911 32.3921 0.648438 28.9514 0.648438 23.3741C0.648438 13.5597 7.53812 4.76323 17.5572 0.414062L20.0613 4.27812C10.7096 9.33672 8.88129 15.9011 8.15222 20.04C9.65803 19.2604 11.6293 18.9884 13.5613 19.1679C18.6199 19.6362 22.6074 23.7891 22.6074 28.9514C22.6074 31.5544 21.5734 34.0507 19.7328 35.8912C17.8923 37.7318 15.3959 38.7658 12.793 38.7658C9.78421 38.7658 6.9072 37.3918 5.08734 35.4598ZM33.1284 35.4598C30.2402 32.3921 28.6895 28.9514 28.6895 23.3741C28.6895 13.5597 35.5792 4.76323 45.5982 0.414062L48.1023 4.27812C38.7506 9.33672 36.9223 15.9011 36.1933 20.04C37.6991 19.2604 39.6704 18.9884 41.6024 19.1679C46.661 19.6362 50.6484 23.7891 50.6484 28.9514C50.6484 31.5544 49.6144 34.0507 47.7739 35.8912C45.9333 37.7318 43.437 38.7658 40.8341 38.7658C37.8253 38.7658 34.9483 37.3918 33.1284 35.4598Z" fill="#D51D13" fill-opacity="0.54"/>
                                </svg>
                            </div>
                            <div className="flex gap-[16px] mb-[16px]">
                                <figure className="">
                                    <Image src="/images/avatar.png" height={1} width={50} alt="user avatar" />
                                </figure>
                                <div className="">
                                    <span className="text-[#565656] text-[16px] font-[500]">Esmeralada Pillay</span> <br />
                                    <b className="text-[#D51D13] font-[500] text-[16px]">South Africa</b>
                                </div>
                            </div>
                            <p className="text-[#595959] text-[18px] font-[400]">
                                {t("pageThr.sectionTwo.textOne")}
                            </p>
                        </div>
                        <div className="w-[32.5%] bg-white rounded-[8px] p-[30px]">
                            <div className="px-[10px] mb-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="39" viewBox="0 0 51 39" fill="none">
                                    <path d="M5.08734 35.4598C2.19911 32.3921 0.648438 28.9514 0.648438 23.3741C0.648438 13.5597 7.53812 4.76323 17.5572 0.414062L20.0613 4.27812C10.7096 9.33672 8.88129 15.9011 8.15222 20.04C9.65803 19.2604 11.6293 18.9884 13.5613 19.1679C18.6199 19.6362 22.6074 23.7891 22.6074 28.9514C22.6074 31.5544 21.5734 34.0507 19.7328 35.8912C17.8923 37.7318 15.3959 38.7658 12.793 38.7658C9.78421 38.7658 6.9072 37.3918 5.08734 35.4598ZM33.1284 35.4598C30.2402 32.3921 28.6895 28.9514 28.6895 23.3741C28.6895 13.5597 35.5792 4.76323 45.5982 0.414062L48.1023 4.27812C38.7506 9.33672 36.9223 15.9011 36.1933 20.04C37.6991 19.2604 39.6704 18.9884 41.6024 19.1679C46.661 19.6362 50.6484 23.7891 50.6484 28.9514C50.6484 31.5544 49.6144 34.0507 47.7739 35.8912C45.9333 37.7318 43.437 38.7658 40.8341 38.7658C37.8253 38.7658 34.9483 37.3918 33.1284 35.4598Z" fill="#D51D13" fill-opacity="0.54"/>
                                </svg>  
                            </div>
                            <div className="flex gap-[16px] mb-[16px]">
                                <figure className="">
                                    <Image src="/images/avatar.png" height={1} width={50} alt="user avatar" />
                                </figure>
                                <div className="">
                                    <span className="text-[#565656] text-[16px] font-[500]">Isaiah Roberts</span> <br />
                                    <b className="text-[#D51D13] font-[500] text-[16px]">Nigeria</b>
                                </div>
                            </div>
                            <p className="text-[#595959] text-[18px] font-[400]">
                                {t("pageThr.sectionTwo.textTwo")}
                            </p>
                        </div>
                        <div className="w-[32.5%] bg-white rounded-[8px] p-[30px]">
                            <div className="px-[10px] mb-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="39" viewBox="0 0 51 39" fill="none">
                                    <path d="M5.08734 35.4598C2.19911 32.3921 0.648438 28.9514 0.648438 23.3741C0.648438 13.5597 7.53812 4.76323 17.5572 0.414062L20.0613 4.27812C10.7096 9.33672 8.88129 15.9011 8.15222 20.04C9.65803 19.2604 11.6293 18.9884 13.5613 19.1679C18.6199 19.6362 22.6074 23.7891 22.6074 28.9514C22.6074 31.5544 21.5734 34.0507 19.7328 35.8912C17.8923 37.7318 15.3959 38.7658 12.793 38.7658C9.78421 38.7658 6.9072 37.3918 5.08734 35.4598ZM33.1284 35.4598C30.2402 32.3921 28.6895 28.9514 28.6895 23.3741C28.6895 13.5597 35.5792 4.76323 45.5982 0.414062L48.1023 4.27812C38.7506 9.33672 36.9223 15.9011 36.1933 20.04C37.6991 19.2604 39.6704 18.9884 41.6024 19.1679C46.661 19.6362 50.6484 23.7891 50.6484 28.9514C50.6484 31.5544 49.6144 34.0507 47.7739 35.8912C45.9333 37.7318 43.437 38.7658 40.8341 38.7658C37.8253 38.7658 34.9483 37.3918 33.1284 35.4598Z" fill="#D51D13" fill-opacity="0.54"/>
                                </svg>
                            </div>
                            <div className="flex gap-[16px] mb-[16px]">
                                <figure className="">
                                    <Image src="/images/avatar.png" height={1} width={50} alt="user avatar" />
                                </figure>
                                <div className="">
                                    <span className="text-[#565656] text-[16px] font-[500]">Tobe Aniakor</span> <br />
                                    <b className="text-[#D51D13] font-[500] text-[16px]">Nigeria</b>
                                </div>
                            </div>
                            <p className="text-[#595959] text-[18px] font-[400]">
                                {t("pageThr.sectionTwo.textThr")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[99%] bg-[#D51D13] h-[30px]"></div>
                <div className="bg-white h-[20px]"></div>
            </section>
        </main>
    </>
  )
}

export default TheFaith
