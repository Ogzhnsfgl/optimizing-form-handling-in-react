import Link from "next/link";

export default function ServerActionBasicError() {
    return (
        <div className="formWrapper">
            <p>
                Your form submission is failed.
                Please try again.
            </p>
            <Link href={'/server-action-basic'} >
                <button>
                    Go back to the form
                </button>
            </Link>
        </div>
    )
}
