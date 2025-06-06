import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          私たちの使命と価値観について
        </p>
      </div>

      {/* Company Story */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちのストーリー</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="mb-4">
            私たちは2020年に設立され、お客様のビジネス成功をサポートすることを使命としています。
            革新的なソリューションと卓越したサービスを通じて、多くの企業の成長に貢献してきました。
          </p>
          <p className="mb-4">
            技術の進歩と共に変化する市場において、常にお客様のニーズを第一に考え、
            最適なソリューションを提供することを心がけています。
          </p>
          <p>
            私たちのチームは、多様な背景を持つプロフェッショナルで構成されており、
            それぞれの専門知識を活かして、お客様に最高の価値を提供しています。
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">使命</h3>
          <p className="text-gray-600">
            お客様のビジネス目標達成をサポートし、持続可能な成長を実現します。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">価値観</h3>
          <p className="text-gray-600">
            誠実さ、革新性、そしてお客様への献身的なサービスを大切にしています。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">ビジョン</h3>
          <p className="text-gray-600">
            革新的なソリューションで、より良い未来を創造することを目指しています。
          </p>
        </div>
      </div>
    </div>
  );
}