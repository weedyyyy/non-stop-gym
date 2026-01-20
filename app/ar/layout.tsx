import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نون ستوب جيم | تدريب فنون قتالية متميز",
  description: "تدريب فنون قتالية متميز في الجودو والكاراتيه والملاكمة والكيك بوكسينغ. انضم إلى مجتمعنا وحوّل جسمك وعقلك.",
  keywords: ["جيم", "فنون قتالية", "جودو", "كاراتيه", "ملاكمة", "كيك بوكسينغ", "لياقة بدنية"],
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body className="font-tajawal antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
