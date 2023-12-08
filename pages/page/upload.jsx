import Image from "next/image"
import HeadComp from "@/layout/headcomp"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Upload = () => {
  return (
    <>
        <HeadComp title="Tell | Upload  Video" />
        <main className={`${inter.className} pb-[108px] pt-[100px] md:pt-[140px]`}>
            <figure className="max-w-[339px] relative mb-[24px] h-[226PX] w-[80%] mx-auto">
                <Image src="/images/upload.png" alt="upload_img" fill />
            </figure>
            <h5 className="text-[#595959] text-center text-[16px] md:text-[24px] mb-[40px] font-[600]">
                Upload Media Link
            </h5>
            <div className="max-w-[711px] mb-[39px] mx-auto w-[80%]">
                <textarea name="" id="" placeholder="Upload one valid link at a time" className="w-full input-textarea" cols="20" rows="5"></textarea>
            </div>
            <div className="max-w-[711px] mx-auto w-[80%]">
                <button className="btn-generic w-full">
                    Submit
                </button>
            </div>
        </main>
    </>
  )
}

export default Upload