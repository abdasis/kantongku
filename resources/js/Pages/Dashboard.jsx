import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import PageHeader from '@/Components/PageHeader';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <PageHeader title={'Dashboard'} subtitle={'Dashboard'}>
                <Link href={route('dashboard')} className={'btn btn-dark'}>
                    Pengeluaran Baru
                </Link>
            </PageHeader>
            <div className="card">
                <div className="card-body">
                    <h1>Selamat Datang</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
