import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後日ご連絡いたします。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">Contact</h1>
        <p className="text-xl text-[#c22e13]">
          お気軽にお問い合わせください
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
            <Mail className="h-8 w-8 text-[#c22e13]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#c22e13] mb-2">
                お名前 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c22e13] focus:border-[#c22e13] transition-colors text-[#c22e13]"
                placeholder="山田太郎"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#c22e13] mb-2">
                メールアドレス *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c22e13] focus:border-[#c22e13] transition-colors text-[#c22e13]"
                placeholder="example@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#c22e13] mb-2">
              件名 *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c22e13] focus:border-[#c22e13] transition-colors text-[#c22e13]"
              placeholder="お問い合わせの件名"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#c22e13] mb-2">
              メッセージ *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c22e13] focus:border-[#c22e13] transition-colors text-[#c22e13]"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-4 bg-[#c22e13] text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-200 text-lg"
            >
              <Send className="h-5 w-5 mr-2" />
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}