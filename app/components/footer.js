import Link from "next/link";
import navigationLinks from "../data/navigation.json";
export default function Footer() {
  const navigation = navigationLinks;

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
        <nav
          className="-mb-6 hidden columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-400 hover:text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {year} Datamite Technologies, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
