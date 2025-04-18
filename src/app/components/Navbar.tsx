import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full z-100 bg-transparent px-8 py-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/small-logo.png"
                width={75}
              />
              <Image src="/logo.png" alt="cshs" width={250} height={80} />
            </picture>
          </Link>
          <div className="space-x-6">
            <a href="#learn-more" className="text-xl hover:text-gray-300">
              About
            </a>
            <a href="#members" className="text-xl hover:text-gray-300">
              Members
            </a>
            <a href="#events" className="text-xl hover:text-gray-300">
              Events
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
