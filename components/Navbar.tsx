import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ language = 'ar' }) {
  const router = useRouter();
  const menuItems = [
    { href: '/', label: language === 'ar' ? 'الرئيسية V2' : 'Home V2' },
    { href: '/projects', label: language === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '/skills', label: language === 'ar' ? 'المهارات' : 'Skills' },
    { href: '/about', label: language === 'ar' ? 'نبذة عني' : 'About' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بي' : 'Contact' },
    { href: '/settings', label: language === 'ar' ? 'الإعدادات' : 'Settings' },
  ];

  return (
    <nav style={{padding: 20, background: '#0f172a'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        {menuItems.map(item => (
          <Link key={item.href} href={item.href} style={{
            color: 'white', padding: 12, background: '#334155', borderRadius: 8, textAlign: 'center'
          }}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
