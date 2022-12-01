import Logo from '../../assets/img/logo-light.png';
export default function ApplicationLogo({ className }) {
    return (
        <img
            src={Logo}
            width="110"
            height="32"
            alt="Tabler"
            className="navbar-brand-image"
        />
    );
}
