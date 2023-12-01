import HeadComp from '@/layout/headcomp'
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

const TheFaith = () => {
  return (
    <>
        <HeadComp title="Tell | The Faith" />
        <main className={`${inter.className} pt-[190px]`}>
            <section className="flex w-[85%] mx-auto">
                <figure className="h-[408px] rounded-[8px] w-[30%] max-w-[420px]">

                </figure>
                <div className=""></div>
            </section>
        </main>
    </>
  )
}

export default TheFaith
