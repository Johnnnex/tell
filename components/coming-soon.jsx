import Image from "next/image"
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })
const ComingSoon = ({setpopupState, popUpState}) => {
  const [t, i18n] = useTranslation("global")
 
  return (
    <section className={`fixed z-[3] ${popUpState == false ? "scale-0 invisible" : ""} transition-[.4s] ${inter.className} h-[100vh] top-0 w-full bg-[#00000045]`}>
        <div className="max-w-[510px] relative w-[80%] pt-[56px] pb-[96px] rounded-[16px] mx-auto mt-[10vh] px-[30px] md:px-[82px] bg-white">
          <button 
            onClick={() => {
              setpopupState(false)
            }} 
            className="absolute top-[16px] rounded-[100px] right-[16px] border border-[#E1E1E1] p-[8px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
          <figure className="relative mx-auto w-[222px] mb-[40px] h-[148px]">
            <Image src="/images/img-coming-soon.png" fill alt="img-coming-soon" />
          </figure>
          <h3 className="text-[#05120B] text-center mb-[8px] text-[16px] font-[600] md:text-[24px]">
            {t("popUp.heading")}
          </h3>
          <p className="text-[#666481] leading-[24px] font-[400] text-[14px] text-center">
            {t("popUp.text")}
          </p>
        </div>
    </section>
  )
}

export default ComingSoon