import { useTranslation } from 'react-i18next'

const ContactForm = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <form className="md:w-[55%] space-y-[24px]">
        <input type="text" className="input-generic" placeholder={t("getInTouch.formEl.name")} />
        <input type="email" className="input-generic" placeholder={t("getInTouch.formEl.mail")} />
        <input type="number" className="input-generic" placeholder={t("getInTouch.formEl.phone")} />
        <textarea cols="30" rows="5" className="input-textarea" placeholder={t("getInTouch.formEl.message")} />
        <button className="btn-generic" type="submit">{t("getInTouch.formEl.btnText")}</button>
    </form>
  )
}

export default ContactForm
