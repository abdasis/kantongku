export default function PageHeader({ title, subtitle, children }) {
    return (
        <div className="page-header d-print-none text-white mb-3">
            <div className="container-xl">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        {/* Page pre-title */}
                        <div className="page-pretitle">{title}</div>
                        <h2 className="page-title">{subtitle}</h2>
                    </div>
                    <div className="col-auto ms-auto d-print-none">
                        <div className="btn-list">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PageHeader.defaultProps = {
    title: 'Tidak diisi',
    subtitle: 'Tidak diisi',
};
