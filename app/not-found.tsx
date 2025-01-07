import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Page Not Found",
}

export default function NotFound() {
    return (
        <div className="px-2 w-full min-h-[600px]">
            <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 h-[80%]">
                <h2 className="text-4xl mt-10">Page Not Found</h2>
                <Image
                    className="m-0 rounded-xl"
                    src="/images/livres_cadeaux.jpg"
                    width={500}
                    height={300}
                    sizes="300px"
                    alt="Page Not Found"
                    priority={true}
                    title="Page Not Found"
                />
            </div>
            <Link href="/" className="text-center hover:underline">
                <h3>Go Home</h3>
            </Link>
        </div>
    )
}