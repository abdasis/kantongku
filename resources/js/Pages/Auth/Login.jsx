import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = event => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = e => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="container">
                <div className="row justify-content-center min-vh-100">
                    <div className="col-md-4 my-auto">
                        <div className="card rounded border-light">
                            <div className="card-body">
                                <h2>Login</h2>
                                <p>Login untuk memulai session baru</p>
                                <div className="form-login my-3">
                                    <form onSubmit={submit}>
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="form-control"
                                                    autoComplete="username"
                                                    onChange={onHandleChange}
                                                    placeholder="Masukan Email"
                                                />
                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="form-group">
                                                <label htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    type="text"
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="form-control"
                                                    autoComplete="username"
                                                    onChange={onHandleChange}
                                                    placeholder="Masukan Password"
                                                />
                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-end my-3">
                                            {canResetPassword && (
                                                <Link
                                                    href={route(
                                                        'password.request'
                                                    )}
                                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary"
                                                processing={processing}
                                            >
                                                Log in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
