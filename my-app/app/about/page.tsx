import Link from "next/link";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-5xl text-white">👤</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">自己紹介</h1>
          <p className="text-xl text-gray-600">
            こんにちは！私のページへようこそ
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">私について</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Webアプリケーション開発に興味を持っている開発者です。
              React、Next.js、TypeScriptなどのモダンな技術を使って、
              ユーザーフレンドリーなアプリケーションを作ることが好きです。
            </p>
            <p className="text-gray-600 leading-relaxed">
              常に新しい技術を学び、より良いプロダクトを作ることを目指しています。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">スキル</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button>ホームに戻る</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
