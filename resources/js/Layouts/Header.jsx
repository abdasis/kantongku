import { Fragment } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Avatar from 'react-avatar';
import { IconHome, IconTags } from '@tabler/icons';
import NavLink from '@/Components/NavLink';
import NavLinkDropdown from '@/Components/NavLinkDropdown';

export default function Header({ auth }) {
    return (
        <Fragment>
            <header className="navbar navbar-expand-md navbar-dark navbar-overlap d-print-none">
                <div className="container-xl">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu"
                        aria-controls="navbar-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <Link href={route('dashboard')}>
                            <ApplicationLogo />
                        </Link>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link d-flex lh-1 text-reset p-0"
                                data-bs-toggle="dropdown"
                                aria-label="Open user menu"
                            >
                                <img src={'https://ui-avatars.com/api/?name=' + auth.user.name} className='avatar avatar-sm' alt=""/>
                                <div className="d-none d-xl-block ps-2">
                                    <div>{auth.user.name}</div>
                                    <div className="mt-1 small text-muted">
                                        UI Designer
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <a href="#" className="dropdown-item">
                                    Status
                                </a>
                                <a href="#" className="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    Feedback
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                    href="./settings.html"
                                    className="dropdown-item"
                                >
                                    Settings
                                </a>
                                <a
                                    href="./sign-in.html"
                                    className="dropdown-item"
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        icon={<IconHome />}
                                        nama={'Beranda'}
                                    />
                                </li>
                                <NavLinkDropdown
                                    icon={<IconTags />}
                                    nama={'Kategori'}
                                >
                                    <NavLinkDropdown.Item
                                        href={route('kategori.tambah')}
                                        nama={'Kategori Baru'}
                                    />
                                    <NavLinkDropdown.Item
                                        href={route('kategori.semua')}
                                        nama={'Semua Kategori'}
                                    />
                                </NavLinkDropdown>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
