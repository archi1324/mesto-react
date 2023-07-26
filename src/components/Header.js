import srcLogo from '../images/logo.svg';

export default function Header() {
  return (
    <section className="header">
      <img src={srcLogo} alt="Логотип Место Россия" className="header__logo" />
    </section>)
}