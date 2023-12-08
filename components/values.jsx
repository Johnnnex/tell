import Image from "next/image"
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

const Values = ({popUpState, setpopupState}) => {
    const [t, i18n] = useTranslation("global")
  return (
    <section className={`fixed z-[3] ${popUpState == false ? "scale-0 invisible" : ""} transition-[.4s] ${inter.className} h-[100vh] top-0 w-full bg-[#00000045]`}>
         <div className="md:max-w-[1512x] relative w-[95%] md:w-[90%] md:py-[2vh] pt-[40px] overflow-hidden rounded-[16px] mx-auto mt-[4vh] h-[94vh] px-[5px] md:px-[82px] bg-white">
            <button 
                onClick={() => {
                setpopupState(false)
                }} 
                className="absolute top-[16px] rounded-[100px] right-[16px] border border-[#E1E1E1] p-[8px]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="grid overflow-y-auto h-full md:grid-cols-2 grid-cols-1 gap-x-[18px] gap-y-[16px] md:gap-y-[24px] mb-[56px]">
                <div className="bg-[url('/images/values-5.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border border-black pt-[219px] pl-[27px] pb-[37px]">
                    <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardFive.heading")}</h3>
                    <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardFive.text")}
                    </p>
                </div>
                <div className="border bg-[url('/images/values-6.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                    <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardSix.heading")}</h3>
                    <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardSix.text")}
                    </p>
                </div>
                <div className="border bg-[url('/images/values-7.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                    <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardSvn.heading")}</h3>
                    <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardSvn.text")}
                    </p>
                </div>
                <div className="border bg-[url('/images/values-8.png')] rounded-[8px] md:rounded-none bg-center bg-cover bg-no-repeat bg-blend-overlay bg-[#000000B2] border-black pt-[219px] pl-[27px] pb-[37px]">
                    <h3 className="text-white font-[600] md:text-[30px] text-[18px] mb-[24px]">{t("values.cardEit.heading")}</h3>
                    <p className="md:text-[18px] text-[16px] text-white w-[90%] font-[400] leading-[27px]">
                    {t("values.cardEit.text")}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values