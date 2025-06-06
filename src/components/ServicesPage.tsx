import React from 'react';
import { Code, Palette, BarChart, Shield } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'ウェブ開発',
      description: 'モダンな技術を使用したレスポンシブなウェブサイトとアプリケーションの開発',
      features: ['React/Vue.js開発', 'バックエンドAPI', 'データベース設計', 'パフォーマンス最適化'],
    },
    {
      id: 2,
      icon: Palette,
      title: 'UI/UXデザイン',
      description: 'ユーザー中心のデザインで、使いやすく美しいインターフェースを提供',
      features: ['ユーザー調査', 'プロトタイピング', 'デザインシステム', 'ユーザビリティテスト'],
    },
    {
      id: 3,
      icon: BarChart,
      title: 'デジタルマーケティング',
      description: 'データドリブンなアプローチでビジネスの成長をサポート',
      features: ['SEO対策', 'SNSマーケティング', 'コンテンツ戦略', 'アナリティクス分析'],
    },
    {
      id: 4,
      icon: Shield,
      title: 'セキュリティ',
      description: 'セキュアなシステム構築とセキュリティ監査サービス',
      features: ['セキュリティ監査', '脆弱性診断', 'セキュリティ対策', 'コンプライアンス'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
        <p className="text-xl text-gray-600">
          お客様のニーズに合わせた包括的なサービスを提供
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-6 flex-shrink-0">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          プロジェクトを始めませんか？
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          お客様のビジネス目標に最適なソリューションをご提案いたします。
        </p>
        <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          無料相談を予約
        </button>
      </div>
    </div>
  );
}