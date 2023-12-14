import { useRouter } from 'next/router'
import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { Inter } from 'next/font/google'
import ComingSoon from '@/components/coming-soon'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
  const [t, i18n] = useTranslation("global")
  const {pathname} = useRouter()
  const [popUpState, setpopupState] = useState(false)

  const setPopActive = () => {
    setpopupState(true)
  }
  const links = [
    {
      id: 1,
      path: "/#mission",
      linkName: t("NavEl.LinkNameOne")
    },
    {
      id: 2,
      path: "/#about",
      linkName: t("NavEl.LinkNameTwo")
    },
    {
      id: 3,
      path: "/page/the-faith",
      linkName: t("NavEl.LinkNameThr")
    },
    {
      id: 4,
      path: "/page/tell-answers",
      linkName: t("NavEl.LinkNameFour")
    },
    {
      id: 5,
      path: "",
      linkName: t("NavEl.LinkNameFive")
    },
  ]
  const mappedLink = links.map(({id, path, linkName}) => {
    if (id == 5) {
      return (
        <li key={id} className={`${pathname == path && "text-[#D51D13]"} text-[#6B7280] hover:text-[#D51D13] transition-[.4s] text-[16px] font-[500]`}>
          <button onClick={setPopActive}>
            {linkName}
          </button>
        </li>
      )
    }
    return (
      <li key={id} className={`${pathname == path && "text-[#D51D13]"} hover:text-[#D51D13] transition-[.4s]`}>
        <Link href={path}>
          {linkName}
        </Link>
      </li>
    )
  })
  return (
    <>
      <footer className={`bg-[url('/images/footer-img.png')] ${inter.className} py-[60px] bg-cover bg-center bg-blend-overlay bg-[#00000080]`}>
        <section className="w-[90%] space-y-[32px] mx-auto">
          <ul className="flex flex-col md:flex-row gap-[4vh] md:w-[50%] text-[16px] text-white font-[500] md:mx-auto justify-between">
            {mappedLink}
          </ul>
          <div className="flex gap-[24px] md:w-fit md:mx-auto items-center">
            <a href="https://www.facebook.com/kephaletel" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Footers/Social icon">
                  <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M22 12.5C22 6.977 17.523 2.5 12 2.5C6.477 2.5 2 6.977 2 12.5C2 17.491 5.657 21.628 10.438 22.378V15.391H7.898V12.5H10.438V10.297C10.438 7.791 11.93 6.407 14.215 6.407C15.309 6.407 16.453 6.602 16.453 6.602V9.062H15.193C13.95 9.062 13.563 9.833 13.563 10.624V12.5H16.336L15.893 15.39H13.563V22.378C18.343 21.628 22 17.491 22 12.5Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="hhttps://www.instagram.com/kephale_tell" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Footers/Social icon">
                  <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M12.315 2.5C14.745 2.5 15.099 2.513 16.123 2.56C17.187 2.609 17.914 2.778 18.55 3.025C19.2175 3.27587 19.8222 3.66936 20.322 4.178C20.8306 4.67777 21.2241 5.2825 21.475 5.95C21.722 6.586 21.891 7.313 21.94 8.377C21.988 9.444 22 9.784 22 12.5V12.58C22 15.223 21.988 15.567 21.94 16.623C21.891 17.687 21.722 18.414 21.475 19.05C21.2241 19.7175 20.8306 20.3222 20.322 20.822C19.8222 21.3306 19.2175 21.7241 18.55 21.975C17.914 22.222 17.187 22.391 16.123 22.44C15.056 22.488 14.716 22.5 12 22.5H11.92C9.277 22.5 8.933 22.488 7.877 22.44C6.813 22.391 6.086 22.222 5.45 21.975C4.7825 21.7241 4.17777 21.3306 3.678 20.822C3.16936 20.3222 2.77587 19.7175 2.525 19.05C2.278 18.414 2.109 17.687 2.06 16.623C2.013 15.599 2 15.244 2 12.815V12.185C2 9.755 2.013 9.401 2.06 8.377C2.109 7.313 2.278 6.586 2.525 5.95C2.77587 5.2825 3.16936 4.67777 3.678 4.178C4.17777 3.66936 4.7825 3.27587 5.45 3.025C6.086 2.778 6.813 2.609 7.877 2.56C8.901 2.513 9.256 2.5 11.685 2.5H12.315ZM12.234 4.302H11.766C9.31 4.302 8.982 4.313 7.959 4.36C6.984 4.405 6.455 4.567 6.102 4.704C5.635 4.886 5.302 5.102 4.952 5.452C4.602 5.802 4.386 6.135 4.204 6.602C4.067 6.955 3.904 7.484 3.86 8.459C3.813 9.482 3.802 9.81 3.802 12.266V12.734C3.802 15.19 3.813 15.518 3.86 16.541C3.905 17.516 4.067 18.045 4.204 18.398C4.386 18.864 4.603 19.198 4.952 19.548C5.302 19.898 5.635 20.114 6.102 20.296C6.455 20.433 6.984 20.596 7.959 20.64C9.013 20.688 9.329 20.698 12 20.698H12.08C14.677 20.698 14.997 20.688 16.04 20.64C17.016 20.595 17.545 20.433 17.898 20.296C18.364 20.114 18.698 19.898 19.048 19.548C19.398 19.198 19.614 18.865 19.796 18.398C19.933 18.045 20.096 17.516 20.14 16.541C20.188 15.486 20.198 15.171 20.198 12.5V12.42C20.198 9.823 20.188 9.503 20.14 8.46C20.095 7.484 19.933 6.955 19.796 6.602C19.6358 6.16757 19.3802 5.7746 19.048 5.452C18.7254 5.11986 18.3324 4.86426 17.898 4.704C17.545 4.567 17.016 4.404 16.041 4.36C15.018 4.313 14.69 4.302 12.234 4.302ZM12 7.365C12.6743 7.365 13.3421 7.49782 13.9651 7.75588C14.5881 8.01394 15.1542 8.39218 15.631 8.86901C16.1078 9.34584 16.4861 9.91191 16.7441 10.5349C17.0022 11.1579 17.135 11.8257 17.135 12.5C17.135 13.1743 17.0022 13.8421 16.7441 14.4651C16.4861 15.0881 16.1078 15.6542 15.631 16.131C15.1542 16.6078 14.5881 16.9861 13.9651 17.2441C13.3421 17.5022 12.6743 17.635 12 17.635C10.6381 17.635 9.33201 17.094 8.36901 16.131C7.40601 15.168 6.865 13.8619 6.865 12.5C6.865 11.1381 7.40601 9.83201 8.36901 8.86901C9.33201 7.90601 10.6381 7.365 12 7.365ZM12 9.167C11.116 9.167 10.2683 9.51815 9.64321 10.1432C9.01815 10.7683 8.667 11.616 8.667 12.5C8.667 13.384 9.01815 14.2317 9.64321 14.8568C10.2683 15.4818 11.116 15.833 12 15.833C12.884 15.833 13.7317 15.4818 14.3568 14.8568C14.9818 14.2317 15.333 13.384 15.333 12.5C15.333 11.616 14.9818 10.7683 14.3568 10.1432C13.7317 9.51815 12.884 9.167 12 9.167ZM17.338 5.962C17.6563 5.962 17.9615 6.08843 18.1865 6.31347C18.4116 6.53852 18.538 6.84374 18.538 7.162C18.538 7.48026 18.4116 7.78548 18.1865 8.01053C17.9615 8.23557 17.6563 8.362 17.338 8.362C17.0197 8.362 16.7145 8.23557 16.4895 8.01053C16.2644 7.78548 16.138 7.48026 16.138 7.162C16.138 6.84374 16.2644 6.53852 16.4895 6.31347C16.7145 6.08843 17.0197 5.962 17.338 5.962Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="https://twitter.com/kephale_tell" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Footers/Social icon">
                  <path id="Icon" d="M8.29 20.7534C15.837 20.7534 19.965 14.5004 19.965 9.0784C19.965 8.9004 19.965 8.7234 19.953 8.5484C20.7562 7.96693 21.4493 7.24701 22 6.4224C21.2511 6.7544 20.4566 6.97216 19.643 7.0684C20.4996 6.55546 21.1408 5.74875 21.447 4.7984C20.6417 5.27628 19.7607 5.61313 18.842 5.7944C18.2234 5.13616 17.405 4.70023 16.5136 4.5541C15.6222 4.40797 14.7075 4.5598 13.9111 4.98607C13.1147 5.41234 12.4811 6.08927 12.1083 6.91206C11.7355 7.73485 11.6444 8.65758 11.849 9.5374C10.2176 9.45564 8.6216 9.03172 7.16465 8.29317C5.70769 7.55461 4.42233 6.51792 3.392 5.2504C2.86732 6.1536 2.70659 7.22282 2.94254 8.24036C3.17848 9.25791 3.79337 10.1473 4.662 10.7274C4.00926 10.7085 3.37063 10.5329 2.8 10.2154V10.2674C2.80039 11.2147 3.1284 12.1327 3.7284 12.8658C4.3284 13.5988 5.16347 14.1018 6.092 14.2894C5.48781 14.4541 4.85389 14.4781 4.239 14.3594C4.50116 15.1749 5.01168 15.888 5.69913 16.399C6.38658 16.91 7.21657 17.1934 8.073 17.2094C7.22212 17.878 6.24779 18.3722 5.20573 18.6639C4.16367 18.9556 3.07432 19.039 2 18.9094C3.8766 20.1137 6.06019 20.7525 8.29 20.7494" fill="white"/>
                </g>
              </svg>
            </a>
          </div>
          <p className="text-white text-[14px] md:text-[16px] md:text-center font-[400]">&copy; 2023 TELL Community, Inc. All rights reserved.</p>
        </section>
      </footer>
      <ComingSoon
      setpopupState={setpopupState}
      popUpState={popUpState}
      />
    </>
  )
}

export default Footer
