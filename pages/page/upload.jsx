import { useState } from "react"
import Image from "next/image"
import HeadComp from "@/layout/headcomp"
import { Inter } from 'next/font/google'
import supabase from "@/utils/supabase"
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

const Upload = () => {
    const [loadState, setLoadState] = useState(false)
    const [formState, setFormState] = useState(false)
    const [nullUrl, setNullUrl] = useState(false)
    const [urlVal, setUrlVal] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setUrlVal(value);
    }

    const submitUrl = (e) => {
        e.preventDefault()
        setLoadState(true)
        if (urlVal == null || urlVal == "") {
            setNullUrl(true)
            setTimeout(() => setNullUrl(false), 1000)
            setLoadState(false)
            return
        }
        const sendLink = async () => {
            try {
                const { error } = await supabase
                .from('yt-links')
                .insert({ link: urlVal })
                setFormState(true)
                setTimeout(() => setFormState(false), 8000)
                setLoadState(false)
                window.location.reload()
            }
            catch (err) {
                toast.warn(err, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setLoadState(false)
                return
            }
        }
        sendLink()
    }

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
            <form onSubmit={submitUrl}> 
                <div className="max-w-[711px] mb-[39px] mx-auto w-[80%]">
                    <textarea onChange={handleChange} value={urlVal} placeholder="Upload one valid link at a time" className="w-full input-textarea" cols="20" rows="5"></textarea>
                    {nullUrl && <p className="text-red-500 text-center">Url input cannot be empty!</p>}
                </div>
                {formState && <p className="text-[green] text-center font-[500] text-[18px]">URL Uploaded!</p>}
                <div className="max-w-[711px] mx-auto w-[80%]">
                    <button disabled={loadState == true && true} type="submit" className="btn-generic w-full">
                    {loadState ? (
                        <div className="w-fit mx-auto">
                            <Oval
                                height="20"
                                width="30"
                                radius="9"
                                color="white"
                                ariaLabel="loading"
                                wrapperStyle
                            />
                        </div>
                    ) : "Submit"}
                    </button>
                </div>
            </form>
        </main>
    </>
  )
}

export default Upload