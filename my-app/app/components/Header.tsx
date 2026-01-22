import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyApp
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
            ホーム
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500 transition">
            自己紹介
          </Link>
        </div>
      </nav>
    </header>
  );
}
