import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import { Fragment } from 'react';

export default function Guest({ children }) {
    return (
        <Fragment>
            <div className="page">{children}</div>
        </Fragment>
    );
}
