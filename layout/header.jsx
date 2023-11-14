import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useRef, useState, useEffect } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  const [t, i18n] = useTranslation("global")
  const [translateModal, setTranslateModal] = useState(false)
  const {pathname} = useRouter()
  const header = useRef()
  const handleChangeLanguage = lang => {
    i18n.changeLanguage(lang)
  }
  const links = [
    {
      id: 1,
      path: "/",
      linkName: t("NavEl.LinkNameOne")
    },
    {
      id: 2,
      path: "",
      linkName: t("NavEl.LinkNameTwo")
    },
    {
      id: 3,
      path: "",
      linkName: t("NavEl.LinkNameThr")
    },
    {
      id: 4,
      path: "",
      linkName: t("NavEl.LinkNameFour")
    },
    {
      id: 5,
      path: "",
      linkName: t("NavEl.LinkNameFive")
    },
  ]
  const mappedLink = links.map(({id, path, linkName}) => {
    return (
      <li key={id} className={`${pathname == path && "active"} text-[#6B7280] text-[16px] font-[500]`}>{linkName}</li>
    )
  })
  useEffect (() => {
    window.addEventListener("scroll", () => {
      header.current.classList.toggle("header-sticky", window.scrollY > 0)
  })
  }, [])
  return (
    <header ref={header} className={`py-[10px] z-[2] transition-[.4s] fixed w-full left-0 top-0 bg-white ${inter.className}`}>
      <div className="flex w-[94%] items-center gap-[6vw] justify-between mx-auto">
        <figure className="">
          <Image 
            src="/images/logo.svg"
            alt="Logo"
            height={1}
            width={100}
            priority
          />
        </figure>
        <nav className="flex-1 flex justify-between gap-[2vw] items-center">
          <ul className="flex flex-1 justify-between">
            {mappedLink}
            <li className="relative">
              <button onClick={() => setTranslateModal(prevState => !prevState)} className="flex items-center text-[#6B7280] text-[16px] font-[500] gap-[10px]">
                Translate
                <Image 
                  src="/images/research.svg"
                  alt="research svg"
                  height={1}
                  width={20}
                />
              </button>
              <div className={`absolute ${translateModal == true ? "max-h-[100vh]" : "max-h-0 invisible"} transition-[.4s] px-[10px] flex flex-col bg-[#D51D13] text-white rounded-[2px] left-0`}>
                <button onClick={()=> handleChangeLanguage("en")} className="border-b pb pt-2">English</button>
                <button onClick={()=> handleChangeLanguage("es")} className="border-b pb pt-2">Spanish</button>
                <button onClick={()=> handleChangeLanguage("af")} className="border-b pb pt-2">Afrikaan</button>
                <button onClick={()=> handleChangeLanguage("fr")} className="border-b pb pt-2">French</button>
                <button onClick={()=> handleChangeLanguage("ar")} className="border-b pb pt-2">Arabic</button>
                <button onClick={()=> handleChangeLanguage("li")} className="pb-1 pt-2">Lingala</button>
              </div>
            </li>
          </ul>
          <div className="">
            <button className="btn-generic">{t("NavEl.BtnTexts")}</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
