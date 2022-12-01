import { Fragment } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import PageHeader from '@/Components/PageHeader';
import {IconCreativeCommons, IconDeviceFloppy, IconTags} from '@tabler/icons';
import {toast} from "react-toastify";

export default function Tambah(props) {
    const { errors } = usePage().props;

    const { data, setData, post, progress, reset } = useForm({
        nama: '',
        icon: '',
        jenis: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        post(route('kategori.simpan'), {
            onSuccess: (e) => {
                setData({
                    nama: '',
                    icon: '',
                    jenis: ''
                })
                toast.success('Data berhasil disimpan',{
                    position: 'top-right'
                })
            }
        });
    };

    const handleUpload = e => {
        setData('icon', e.target.files[0]);
    };

    const handleChange = event => {
        setData(event.target.name, event.target.value);
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <PageHeader title={'Kategori'} subtitle={'Tambah Kategori'} />

            <div className="card border rounded">
                <h4 className="card-header fw-bold border-bottom border-light">
                    <IconTags className={'me-1'}/>
                    Kategori
                </h4>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="inner-form py-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Nama Kategori</label>
                                        <input
                                            type="text"
                                            placeholder="Masukan Nama"
                                            className="form-control"
                                            value={data.nama}
                                            name="nama"
                                            onChange={handleChange}
                                        />
                                        {errors.nama && (
                                            <small className="text-danger">
                                                {errors.nama}
                                            </small>
                                        )}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">
                                            Jenis Pengeluaran
                                        </label>
                                        <select
                                            className="form-select"
                                            onChange={handleChange}
                                            name="jenis"
                                            value={data.jenis}
                                            placeholder="Pilih Jenis"
                                        >
                                            <option value="">
                                                Pilih Jenis
                                            </option>
                                            <option value="Debit">
                                                Pemasukan
                                            </option>
                                            <option value="Kredit">
                                                Pengeluaran
                                            </option>
                                        </select>
                                        {errors.jenis && (
                                            <small className="text-danger">
                                                {errors.jenis}
                                            </small>
                                        )}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="icon">
                                            Icon Kategori
                                        </label>
                                        <input
                                            name="icon"
                                            type="file"
                                            onChange={handleUpload}
                                            className="form-control"
                                        />
                                        {errors.icon && (
                                            <small className="text-danger">
                                                {errors.icon}
                                            </small>
                                        )}
                                        {progress && (
                                            <progress
                                                value={progress.percentage}
                                                max="100"
                                            >
                                                {progress.percentage}%
                                            </progress>
                                        )}
                                    </div>
                                    <div className="form-group float-end mb-3">
                                        <button
                                            type={'submit'}
                                            className="btn btn-primary"
                                        >
                                            <IconDeviceFloppy />
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
