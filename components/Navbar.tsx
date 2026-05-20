import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from './store';

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const router = useRouter();
  const language = useStore(s => s.language);
  const setLanguage = useStore(s => s.setLanguage);

  const links = [
    { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/projects', label: language === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '/skills', label: language === 'ar' ? 'المهارات' : 'Skills' },
    { href: '/about', label: language === 'ar' ? 'نبذة عني' : 'About' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بي' : 'Contact' },
    { href: '/settings', label: language === 'ar' ? 'الإعدادات' : 'Settings' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, display: 'flex', gap: 8, background: 'rgba(20,25,40,0.8)',
      backdropFilter: 'blur(10px)', borderRadius: 40, padding: '8px 16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)', flexWrap: 'wrap', justifyContent: 'center',
      alignItems: 'center', maxWidth: '95vw'
    }}>
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <span className="hover-glow" style={{
            padding: '6px 12px', borderRadius: 20, fontSize: '0.8rem',
            fontWeight: router.pathname === link.href ? 'bold' : 'normal',
            background: router.pathname === link.href ? 'var(--primary)' : 'transparent',
            color: router.pathname === link.href ? '#fff' : '#aaa',
            transition: '0.3s', cursor: 'pointer', whiteSpace: 'nowrap',
            display: 'inline-block'
          }}>
            {link.label}
          </span>
        </Link>
      ))}
      <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        style={{
          padding: '4px 10px', borderRadius: 20, background: 'var(--primary)',
          color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >{language === 'ar' ? 'EN' : 'AR'}</button>
      <button onClick={toggleSidebar} style={{
        background: 'none', border: 'none', color: '#fff', fontSize: '1.4rem',
        cursor: 'pointer', padding: '0 6px'
      }}>☰</button>
    </nav>
  );
}
