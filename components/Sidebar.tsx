import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Sidebar({ language = 'ar' }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home', icon: '🏠' },
    { href: '/projects', label: language === 'ar' ? 'المشاريع' : 'Projects', icon: '📁' },
    { href: '/skills', label: language === 'ar' ? 'المهارات' : 'Skills', icon: '⚡' },
    { href: '/about', label: language === 'ar' ? 'نبذة عني' : 'About', icon: '👤' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بي' : 'Contact', icon: '📧' },
    { href: '/settings', label: language === 'ar' ? 'الإعدادات' : 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* زرار المنيو للموبايل */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', top: 15, right: 15, zIndex: 60,
          background: 'rgba(15, 23, 42, 0.9)', border: 'none', 
          color: 'white', fontSize: 28, padding: '8px 12px', 
          borderRadius: 8, cursor: 'pointer'
        }}
      >
        ☰
      </button>

      {/* القايمة */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 50
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed', top: 0, right: 0, width: 280, height: '100vh',
              background: 'rgba(15, 23, 42, 0.98)', backdropFilter: 'blur(10px)',
              padding: 20, overflowY: 'auto'
            }}
          >
            <h2 style={{ color: 'white', marginBottom: 25, textAlign: 'center' }}>Mostafa Mahmoud</h2>
            
            {/* هنا التعديل المهم: flex-col بدل grid-cols-2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {menuItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      color: 'white', textDecoration: 'none', 
                      padding: '14px 16px', borderRadius: 10,
                      background: isActive ? '#3b82f6' : 'rgba(51, 65, 85, 0.6)',
                      transition: '0.2s'
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <button 
              style={{
                width: '100%', marginTop: 20, background: '#3b82f6', 
                color: 'white', border: 'none', padding: '12px', 
                borderRadius: 10, cursor: 'pointer', fontSize: 16
              }}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
}
