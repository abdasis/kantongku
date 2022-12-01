import { Link } from '@inertiajs/inertia-react';
import { IconHome } from '@tabler/icons';

export default function NavLink({ href, active, children, icon, nama }) {
    return (
        <Link className="nav-link" href={href}>
            <span className="nav-link-icon d-md-none d-lg-inline-block">
                {icon}
            </span>
            <span className="nav-link-title">{nama}</span>
        </Link>
    );
}
