import Link from "next/link";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="navbarList">
                <li>
                    <Link href={`client-uncontrolled-basic`}>
                        Client Uncontrolled Basic
                    </Link>
                </li>
                <li>
                    <Link href={`client-controlled-basic`}>
                        Client Controlled Basic
                    </Link>
                </li>
                <li>
                    <Link href={`client-rhf-basic`}>
                        Client React Hook Form Basic
                    </Link>
                </li>
                <li>
                    <Link href={`client-rhf-advance`}>
                        Client React Hook Form Advance
                    </Link>
                </li>
                <li>
                    <Link href={`sc-sa-basic`}>
                        Server Component + Server Action Basic
                    </Link>
                </li>
                <li>
                    <Link href={`cc-sa-basic`}>
                        Client Component + Server Action Basic
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
