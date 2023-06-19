import Link from "next/link";

const ServerActionBasicError = () => {
    return (
        <div className="formWrapper">
            <p>
                Your form submission is failed.
                Please try again.
            </p>
            <Link href={'/sc-sa-basic'} >
                <button>
                    Go back to the form
                </button>
            </Link>
        </div>
    )
}

export default ServerActionBasicError;