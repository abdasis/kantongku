import {Head, Link} from "@inertiajs/inertia-react";
import PageHeader from "@/Components/PageHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {IconTags} from "@tabler/icons";

const Badge = ({jenis}) => {
    if (jenis === 'debit'){
        return(
            <div className="badge bg-teal">Pemasukan</div>
        )
    }else{
        return(
            <div className="badge bg-red">Pengeluaran</div>
        )
    }
}

export default function Semua(props){
    return(
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <PageHeader title={'Kategori'} subtitle={'Semua Kategori'}>
                <Link href={route('kategori.tambah')} className='btn btn-dark'>
                    Kategori Baru
                </Link>
            </PageHeader>
            <div className="card shadow-none">
                <h4 className="card-header fw-bold border-bottom border-light">
                    <IconTags className={'me-1'}/>
                    Semua Kategori
                </h4>
                <div className="card-body">
                    <table className='table table-sm table-striped'>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Kategori</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.data_kategori &&
                            props.data_kategori.map((kategori) =>
                                <tr key={kategori.id}>
                                    <td>{kategori.id}</td>
                                    <td>{kategori.nama}</td>
                                    <td><Badge jenis={kategori.jenis}/></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    )
}
