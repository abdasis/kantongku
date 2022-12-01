import { IconTags } from '@tabler/icons';
import { Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';

const NavLinkDropdown = ({ icon, nama, children }) => {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#navbar-base"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                role="button"
                aria-expanded="false"
            >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {icon}
                </span>
                <span className="nav-link-title">{nama}</span>
            </a>
            <div className="dropdown-menu">
                <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">{children}</div>
                </div>
            </div>
        </li>
    );
};

const DropdownItem = ({ href, nama }) => {
    return (
        <Fragment>
            <Link className="dropdown-item" href={href}>
                {nama}
            </Link>
        </Fragment>
    );
};

NavLinkDropdown.Item = DropdownItem;

export default NavLinkDropdown;
