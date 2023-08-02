import Link from "next/link"
export default function GlobalInfo() {
    return (
        <>
        <h1>Global Info</h1>
            <h2>
                <Link href="/">Go to home</Link>
            </h2>
            <button>
                <Link href="/">Go to home</Link>
            </button>
            <img src="/images/profile.jpg"/>
            <img src="/favicon.ico"/>
        </>
    )
}