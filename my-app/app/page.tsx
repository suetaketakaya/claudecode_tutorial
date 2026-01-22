import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to MyApp
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            シンプルで使いやすいWebアプリケーション
          </p>
          <Link href="/about">
            <Button>詳しく見る</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="高速"
              description="Next.jsによる高速なページ読み込み"
              icon="⚡"
            />
            <FeatureCard
              title="モダン"
              description="最新のReactとTypeScriptを使用"
              icon="🎨"
            />
            <FeatureCard
              title="レスポンシブ"
              description="あらゆるデバイスに対応したデザイン"
              icon="📱"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            始めてみませんか？
          </h2>
          <p className="text-gray-600 mb-8">
            今すぐ使い始めて、その便利さを体験してください。
          </p>
          <Button>今すぐ始める</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 MyApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
