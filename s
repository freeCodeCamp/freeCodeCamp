import React from 'react';

export default function MarayaArchitectureSVG() {
  return (
    <svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
      {/* تعريف الظلال */}
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.08"/>
        </filter>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#94A3B8" />
        </marker>
      </defs>

      {/* مكون المستخدمين */}
      <rect x="40" y="40" rx="14" ry="14" width="370" height="220" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="60" y="72" fontSize="18" fontWeight="700">المستخدمون وواجهة العميل</text>

      {/* مكون العلاقات الاجتماعية */}
      <rect x="440" y="40" rx="14" ry="14" width="360" height="220" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="460" y="72" fontSize="18" fontWeight="700">العلاقات الاجتماعية & التفاعل</text>

      {/* مكون قاعدة البيانات */}
      <rect x="840" y="40" rx="14" ry="14" width="280" height="240" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="860" y="72" fontSize="18" fontWeight="700">قاعدة البيانات و التخزين</text>

      {/* مكون الخلاصات والتوصية */}
      <rect x="40" y="290" rx="14" ry="14" width="360" height="240" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="60" y="320" fontSize="18" fontWeight="700">خدمة الخلاصات و التوصية</text>

      {/* مكون التحليلات والمراقبة */}
      <rect x="840" y="310" rx="14" ry="14" width="280" height="160" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="860" y="338" fontSize="16" fontWeight="700">تحليلات / مراقبة / أمن</text>

      {/* مكون الباك-إند */}
      <rect x="440" y="290" rx="14" ry="14" width="360" height="240" fill="#fff" stroke="#E5E7EB" filter="url(#soft)" />
      <text x="460" y="320" fontSize="18" fontWeight="700">خدمات الباك-إند & البنية التحتية</text>

      {/* الأسهم */}
      <line x1="240" y1="250" x2="520" y2="300" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="300" y="270" fontSize="11">طلبات API / WebSocket</text>

      <line x1="660" y1="420" x2="860" y2="340" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="740" y="380" fontSize="11">قراءة/كتابة</text>

      <line x1="980" y1="420" x2="380" y2="420" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="700" y="440" fontSize="11">قواعد المحتوى/فلترة</text>
    </svg>
  );
}
