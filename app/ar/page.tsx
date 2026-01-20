"use client";

import { useState } from "react";
import Lightbox from "../components/Lightbox";

export default function HomeArabic() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; title: string; subtitle?: string; imageUrl?: string }>({
    isOpen: false,
    title: "",
  });

  const openLightbox = (title: string, subtitle?: string, imageUrl?: string) => {
    setLightbox({ isOpen: true, title, subtitle, imageUrl });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, title: "" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">نون ستوب جيم</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#classes" className="text-gray-300 hover:text-[#c9a227] transition-colors animated-underline-rtl">الحصص</a>
              <a href="#schedule" className="text-gray-300 hover:text-[#c9a227] transition-colors animated-underline-rtl">الجدول</a>
              <a href="#facilities" className="text-gray-300 hover:text-[#c9a227] transition-colors animated-underline-rtl">المرافق</a>
              <a href="#location" className="text-gray-300 hover:text-[#c9a227] transition-colors animated-underline-rtl">الموقع</a>
              <a href="#join" className="btn-gold text-sm">انضم الآن</a>
              <a href="/" className="flex items-center gap-1.5 text-gray-300 hover:text-[#c9a227] transition-colors border border-[#2a2a2a] hover:border-[#c9a227] rounded-lg px-3 py-1.5">
                <span className="text-sm">English</span>
              </a>
            </div>
            <div className="flex items-center gap-3 md:hidden">
              <a href="/" className="text-gray-300 hover:text-[#c9a227] transition-colors text-sm border border-[#2a2a2a] rounded-lg px-2 py-1">
                English
              </a>
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="تبديل القائمة"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#2a2a2a]">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#classes"
                className="block text-gray-300 hover:text-[#c9a227] transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                الحصص
              </a>
              <a
                href="#schedule"
                className="block text-gray-300 hover:text-[#c9a227] transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                الجدول
              </a>
              <a
                href="#facilities"
                className="block text-gray-300 hover:text-[#c9a227] transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                المرافق
              </a>
              <a
                href="#location"
                className="block text-gray-300 hover:text-[#c9a227] transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                الموقع
              </a>
              <a
                href="#join"
                className="block btn-gold text-sm text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                انضم الآن
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">التسجيل مفتوح للأعضاء الجدد</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            أطلق العنان
            <span className="block text-gradient-gold">للمحارب بداخلك</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            وجهتك المتكاملة للياقة البدنية. من تدريب الفنون القتالية في الجودو والكاراتيه والملاكمة والكيك بوكسينغ إلى مرافق الجيم الكاملة. حوّل جسمك وعقلك مع مدربينا المحترفين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="btn-gold text-lg">
              ابدأ رحلتك
            </a>
            <a href="#classes" className="btn-outline-gold text-lg">
              عرض الحصص
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a227]">+10</div>
              <div className="text-sm text-gray-500">سنوات الخبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a227]">+500</div>
              <div className="text-sm text-gray-500">أعضاء نشطين</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a227]">4</div>
              <div className="text-sm text-gray-500">تخصصات</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Certifications Section - Hall of Champions */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(201, 162, 39, 0.15) 0%, transparent 50%)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-[0.3em]">قاعة الأبطال</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a227]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-gold">إنجازاتنا</span>
            </h2>
          </div>

          {/* Certifications Grid - Large Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: 1, label: 'شهادة الاتحاد' },
              { id: 2, label: 'ميدالية البطولة' },
              { id: 3, label: 'رخصة التدريب' },
              { id: 4, label: 'شهادة السلامة' },
              { id: 5, label: 'جائزة التميز' },
              { id: 6, label: 'الاعتماد' },
            ].map((cert) => (
              <div
                key={cert.id}
                className="group relative cursor-pointer"
                onClick={() => openLightbox(cert.label, 'قاعة الأبطال')}
              >
                {/* Card */}
                <div className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[#2a2a2a] group-hover:border-[#c9a227]/50 transition-all duration-500">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'radial-gradient(ellipse at 50% 30%, rgba(201, 162, 39, 0.1) 0%, transparent 70%)',
                  }} />

                  {/* Decorative frame corners - mirrored for RTL */}
                  <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300" />

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Image placeholder icon */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1f1f1f] border-2 border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:border-[#c9a227]/50 group-hover:bg-[#1a1a1a] transition-all duration-300">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-gray-500 group-hover:text-gray-400 text-center transition-colors duration-300 font-medium">{cert.label}</span>
                    <span className="text-sm text-gray-600 mt-2">انقر لإضافة صورة</span>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mt-12 gap-4">
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]/50" />
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">برامجنا</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              برامج <span className="text-gradient-gold">التدريب</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              من تخصصات الفنون القتالية إلى تدريب اللياقة البدنية، نقدم برامج شاملة لجميع الأعمار ومستويات المهارة. مدربون خبراء مكرسون لنموك.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'جودو',
                description: 'أتقن فن الرمي والمصارعة. ابنِ القوة والتوازن والانضباط.',
                icon: '🥋',
                schedule: 'أطفال: الأحد والثلاثاء | كبار: الإثنين والأربعاء'
              },
              {
                name: 'كاراتيه',
                description: 'فن الضرب التقليدي مع التركيز على اللكمات والركلات وأشكال الكاتا.',
                icon: '👊',
                schedule: 'الجمعة والسبت 10:00-11:00'
              },
              {
                name: 'ملاكمة',
                description: 'تعلم العلم الحلو. حركة القدم والتوليفات وتقنيات الدفاع.',
                icon: '🥊',
                schedule: 'الجدول قريباً'
              },
              {
                name: 'كيك بوكسينغ',
                description: 'اجمع بين الملاكمة والركلات المدمرة. أعلى تخصص في الضرب.',
                icon: '🦵',
                schedule: 'الجدول قريباً'
              }
            ].map((cls) => (
              <div key={cls.name} className="card-dark p-6 md:p-8">
                <div className="text-4xl mb-4">{cls.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{cls.name}</h3>
                <p className="text-gray-400 mb-4">{cls.description}</p>
                <div className="pt-4 border-t border-[#2a2a2a]">
                  <span className="text-sm text-[#c9a227]">{cls.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Gallery Section - Gym & Equipment */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-[0.3em]">مساحتنا</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a227]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              استكشف <span className="text-gradient-gold">الجيم</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              مرافق حديثة مصممة للأبطال. ألقِ نظرة على مساحات التدريب والمعدات لدينا.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Large feature - Training Area */}
            <div
              className="col-span-2 row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('منطقة التدريب الرئيسية', 'حصائر احترافية ومناطق تدريب واسعة')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1f1f1f] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-wider">مميز</span>
                <h3 className="text-xl md:text-2xl font-bold mt-1">منطقة التدريب الرئيسية</h3>
                <p className="text-gray-400 text-sm mt-1 hidden md:block">حصائر احترافية ومناطق تدريب واسعة</p>
              </div>
            </div>

            {/* Weight Room */}
            <div
              className="col-span-1 row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('غرفة الأثقال', 'منطقة تدريب أثقال مجهزة بالكامل')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-7 h-7 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-base md:text-lg font-bold">غرفة الأثقال</h3>
              </div>
            </div>

            {/* Cardio Zone */}
            <div
              className="col-span-1 row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('منطقة الكارديو', 'معدات كارديو حديثة')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-7 h-7 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-base md:text-lg font-bold">منطقة الكارديو</h3>
              </div>
            </div>

            {/* Boxing Ring */}
            <div
              className="col-span-1 row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('حلبة الملاكمة', 'حلبة ملاكمة احترافية للتدريب والمباريات')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1f1f1f] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-wider">قتالي</span>
                <h3 className="text-lg md:text-xl font-bold mt-1">حلبة الملاكمة</h3>
              </div>
            </div>

            {/* Punching Bags */}
            <div
              className="col-span-1 row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('أكياس اللكم', 'أكياس ثقيلة لتمارين الضرب')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-7 h-7 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-base md:text-lg font-bold">أكياس اللكم</h3>
              </div>
            </div>

            {/* Judo Mats - Wide */}
            <div
              className="col-span-2 row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('حصائر جودو احترافية', 'حصائر تاتامي بمستوى المنافسات')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#1f1f1f] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-8 h-8 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-wider">فنون قتالية</span>
                <h3 className="text-lg md:text-xl font-bold mt-1">حصائر جودو احترافية</h3>
              </div>
            </div>

            {/* Locker Room */}
            <div
              className="col-span-1 row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox('غرف الخزائن', 'مرافق تغيير نظيفة وآمنة')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a227]/50 transition-all">
                  <svg className="w-7 h-7 text-[#3a3a3a] group-hover:text-[#c9a227]/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-base md:text-lg font-bold">غرف الخزائن</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">الجدول الأسبوعي</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              جدول <span className="text-gradient-gold">الحصص</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="py-4 px-4 text-right text-[#c9a227] font-semibold">الحصة</th>
                  <th className="py-4 px-4 text-right text-[#c9a227] font-semibold">الفئة العمرية</th>
                  <th className="py-4 px-4 text-right text-[#c9a227] font-semibold">الأيام</th>
                  <th className="py-4 px-4 text-right text-[#c9a227] font-semibold">الوقت</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-4 font-semibold">جودو</td>
                  <td className="py-4 px-4 text-gray-400">أطفال (5-12 سنة)</td>
                  <td className="py-4 px-4 text-gray-400">الأحد والثلاثاء</td>
                  <td className="py-4 px-4 text-[#c9a227]" dir="ltr">18:00 - 19:30</td>
                </tr>
                <tr className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-4 font-semibold">جودو</td>
                  <td className="py-4 px-4 text-gray-400">كبار (+12 سنة)</td>
                  <td className="py-4 px-4 text-gray-400">الإثنين والأربعاء</td>
                  <td className="py-4 px-4 text-[#c9a227]" dir="ltr">18:00 - 19:30</td>
                </tr>
                <tr className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-4 font-semibold">كاراتيه</td>
                  <td className="py-4 px-4 text-gray-400">جميع الأعمار</td>
                  <td className="py-4 px-4 text-gray-400">الجمعة والسبت</td>
                  <td className="py-4 px-4 text-[#c9a227]" dir="ltr">10:00 - 11:00</td>
                </tr>
                <tr className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-4 font-semibold">ملاكمة</td>
                  <td className="py-4 px-4 text-gray-400">جميع الأعمار</td>
                  <td className="py-4 px-4 text-gray-400">سيتم تحديده</td>
                  <td className="py-4 px-4 text-gray-500">قريباً</td>
                </tr>
                <tr className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-4 font-semibold">كيك بوكسينغ</td>
                  <td className="py-4 px-4 text-gray-400">جميع الأعمار</td>
                  <td className="py-4 px-4 text-gray-400">سيتم تحديده</td>
                  <td className="py-4 px-4 text-gray-500">قريباً</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">* الجدول قابل للتغيير. تابعنا على وسائل التواصل الاجتماعي للتحديثات.</p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">لماذا تختارنا</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              مرافق <span className="text-gradient-gold">متميزة</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'حصائر احترافية',
                description: 'حصائر تاتامي بمستوى المنافسات توفر الأمان والأداء الأمثل لجميع التدريبات.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: 'مدربون خبراء',
                description: 'تعلم من مدربين معتمدين حاملي الحزام الأسود مع سنوات من الخبرة التنافسية والتدريبية.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'معدات حديثة',
                description: 'أكياس ملاكمة وواقيات ومعدات تدريب حديثة لتمارين شاملة.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: 'مناسب للعائلات',
                description: 'برامج لجميع الأعمار من الأطفال 5+ إلى الكبار. تدربوا معاً كعائلة.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'جدول مرن',
                description: 'حصص صباحية ومسائية لتناسب نمط حياتك المزدحم. تدرب عندما يناسبك.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'مجتمع داعم',
                description: 'انضم إلى مجتمع داعم من ممارسي الفنون القتالية المكرسين للنمو والتميز.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((feature) => (
              <div key={feature.title} className="card-dark p-6 md:p-8 group">
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl flex items-center justify-center text-[#c9a227] mb-6 group-hover:bg-[#c9a227] group-hover:text-[#0a0a0a] transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-padding bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">تجدنا</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              <span className="text-gradient-gold">موقعنا</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              موقع مريح وسهل الوصول. زرنا اليوم واتخذ الخطوة الأولى في رحلتك في الفنون القتالية.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="map-container aspect-video lg:aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34465.89973358943!2d6.027897326320677!3d31.699708511433908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125cc78805bc1401%3A0xfac52d6533f6c5c0!2sSalle%20Des%20Champions!5e1!3m2!1sen!2sdz!4v1768923664360!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع قاعة الأبطال"
              />
            </div>
            <div className="space-y-8">
              <div className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">العنوان</h3>
                    <p className="text-gray-400">قاعة الأبطال<br />الوادي، الجزائر</p>
                  </div>
                </div>
              </div>
              <div className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                    <p className="text-gray-400">الإثنين - الجمعة: 9:00 - 21:00<br />السبت - الأحد: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <div className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">اتصل بنا</h3>
                    <p className="text-gray-400">
                      <span dir="ltr">الهاتف: +1 234 567 890</span><br />
                      <span dir="ltr">البريد: info@nonstopgym.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="join" className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest">ابدأ الآن</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                مستعد <span className="text-gradient-gold">للبدء؟</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                املأ نموذج التقديم لبدء رحلتك في الفنون القتالية. سيتواصل فريقنا معك خلال 24 ساعة لجدولة حصتك التجريبية الأولى.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSegazMWxr7efGLY-phKR_z0ie7spGwLqTfCi1PpssGy6o5LXQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 text-lg"
              >
                سجّل الآن
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-gray-500 text-sm mt-6">حصة تجريبية مجانية للأعضاء الجدد</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                  <span className="text-[#0a0a0a] font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold tracking-tight">نون ستوب جيم</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                وجهتك المتكاملة للياقة البدنية والفنون القتالية. نطور الأبطال في الجسم والعقل والروح من خلال التدريب المتخصص والمرافق العالمية.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#c9a227] hover:border-[#c9a227] transition-all"
                  >
                    {social === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    )}
                    {social === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    )}
                    {social === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    )}
                    {social === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                {[
                  { name: 'الحصص', href: '#classes' },
                  { name: 'الجدول', href: '#schedule' },
                  { name: 'المرافق', href: '#facilities' },
                  { name: 'الموقع', href: '#location' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#c9a227] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">البرامج</h4>
              <ul className="space-y-2">
                {['جودو', 'كاراتيه', 'ملاكمة', 'كيك بوكسينغ'].map((program) => (
                  <li key={program}>
                    <a href="#classes" className="text-gray-400 hover:text-[#c9a227] transition-colors">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1a1a1a] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} نون ستوب جيم. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#c9a227] transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[#c9a227] transition-colors">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        title={lightbox.title}
        subtitle={lightbox.subtitle}
        imageUrl={lightbox.imageUrl}
      />
    </div>
  );
}
