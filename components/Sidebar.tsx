import Link from 'next/link';
import { useStore } from './store';

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const language = useStore(s => s.language);
  const links = [
    { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/projects', label: language === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '/skills', label: language === 'ar' ? 'المهارات' : 'Skills' },
    { href: '/about', label: language === 'ar' ? 'نبذة عني' : 'About' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بي' : 'Contact' },
    { href: '/settings', label: language === 'ar' ? 'الإعدادات' : 'Settings' },
  ];

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem' }}>✕</button>
        </div>
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <div onClick={onClose} style={{
              padding: '12px', marginBottom: 8, borderRadius: 12,
              background: 'rgba(255,255,255,0.05)', transition: '0.2s',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
            }}>
              <span>{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
