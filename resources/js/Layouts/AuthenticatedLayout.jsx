import { useState } from 'react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Authenticated({ auth, children }) {
    return (
        <div className={'page min-vh-100'}>
            <Header auth={auth} />
            <div className="page-wrapper">
                <div className="page-body">
                    <div className="container-xl">{children}</div>
                </div>
                <Footer />
            </div>
            <div className="position-absolute">
                <ToastContainer />
            </div>
        </div>
    );
}
