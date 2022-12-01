export default function InputError({ message, className = '' }) {
    return message ? (
        <small className={'text-sm text-danger ' + className}>{message}</small>
    ) : null;
}
