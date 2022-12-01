import { Fragment } from 'react';

export default function Footer() {
    return (
        <Fragment>
            <footer className="footer footer-transparent  bottom-0 d-print-none">
                <div className="container-xl">
                    <div className="row text-center align-items-center flex-row-reverse">
                        <div className="col-lg-auto ms-lg-auto">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    <a
                                        href="./docs/"
                                        className="link-secondary"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="./license.html"
                                        className="link-secondary"
                                    >
                                        License
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://github.com/tabler/tabler"
                                        target="_blank"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        Source code
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://github.com/sponsors/codecalm"
                                        target="_blank"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon text-pink icon-filled icon-inline"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                        Sponsor
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    © 2022{' '}
                                    <a
                                        href="https://facebook.com/lazizdev"
                                        className="link-secondary fw-bold text-azure"
                                    >
                                        Dompetku
                                    </a>{' '}
                                    . All rights reserved.
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="./changelog.html"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        v1.0.0 alpha
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
