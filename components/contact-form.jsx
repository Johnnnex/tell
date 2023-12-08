import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';
import { Oval } from 'react-loader-spinner'

const ContactForm = () => {
    const form = useRef() 
    const [t, i18n] = useTranslation("global")
    const [loadState, setLoadState] = useState(false)
    const [nameState, setNameState] = useState(false)
    const [mailState, setMailState] = useState(false)
    const [messageState, setMessageState] = useState(false)
    const [formState, setFormState] = useState(false)
    const [numberState, setnumberState] = useState(false)
    const [user, setUser] = useState({ user_name: "", user_email: "", message: "", user_phone: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const sendEmail = (e) => {
        e.preventDefault()
        setLoadState(true)
        if (user.user_name == null || user.user_name == "") {
            setNameState(true)
            setTimeout(() => setNameState(false), 1000)
            setLoadState(false)
            return
        }
        if (user.user_email == null || user.user_email == "") {
            setMailState(true)
            setTimeout(() => setMailState(false), 1000)
            setLoadState(false)
            return
        }
        if (user.user_phone == null || user.user_phone == "") {
            setnumberState(true)
            setTimeout(() => setnumberState(false), 1000)
            setLoadState(false)
            return
        }
        if (user.message == null || user.message == "") {
            setMessageState(true)
            setTimeout(() => setMessageState(false), 1000)
            setLoadState(false)
            return
        }
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
        emailjs.sendForm("service_0b641yl", "template_7dliud3", form.current, publicKey)
        .then((result) => {
            setFormState(true)
            setTimeout(() => setFormState(false), 8000)
            setLoadState(false)
            window.location.reload()
        }, (error) => {
            toast.warn('Network connection error, try again', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    }
  return (
    <>
      <form onSubmit={sendEmail} ref={form} className="md:w-[55%] space-y-[24px]">
          <input required type="text" value={user.user_name} name="user_name" onChange={handleChange} className="input-generic" placeholder={t("getInTouch.formEl.name")} />
          {nameState && <p className="text-red-500 font-Montserrat">Name cannot be empty!</p>}
          <input required type="email" value={user.user_email} name="user_email" onChange={handleChange} className="input-generic" placeholder={t("getInTouch.formEl.mail")} />
          {mailState && <p className="text-red-500 font-Montserrat">Mail cannot be empty!</p>}
          <input required type="number" value={user.user_phone} name="user_phone" onChange={handleChange} className="input-generic" placeholder={t("getInTouch.formEl.phone")} />
          {numberState && <p className="text-red-500 font-Montserrat">Phone cannot be empty!</p>}
          <textarea required cols="30" rows="5" name="message" type="text" value={user.message} onChange={handleChange} className="input-textarea" placeholder={t("getInTouch.formEl.message")} />
          {messageState && <p className="text-red-500 font-Montserrat">Message cannot be empty!</p>}
          <button disabled={loadState == true && true} className="btn-generic" type="submit">
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
            ) : t("getInTouch.formEl.btnText")}
          </button>
          {formState && <p className="text-[green] font-[500] text-[18px] font-Montserrat">Mail Sent!, await Tell&apos;s response</p>}
      </form>
    </>
  )
}

export default ContactForm
