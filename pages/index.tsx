import Head from 'next/head';
import Link from 'next/link';
import GeometricPattern from '../components/GeometricPattern';
import { useStore } from '../components/store';

export default function Home() {
  const arName = useStore(s => s.arName);
  const enName = useStore(s => s.enName);
  const language = useStore(s => s.language);

  const items = [
    { href: '/projects', icon: '📁', label: language === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '/skills', icon: '🧠', label: language === 'ar' ? 'المهارات' : 'Skills' },
    { href: '/about', icon: '👤', label: language === 'ar' ? 'نبذة عني' : 'About' },
    { href: '/contact', icon: '✉️', label: language === 'ar' ? 'اتصل بي' : 'Contact' },
    { href: '/settings', icon: '⚙️', label: language === 'ar' ? 'الإعدادات' : 'Settings' },
  ];

  return (
    <>
      <Head><title>{arName} | {enName}</title></Head>
      <div className="page" style={{ background: 'linear-gradient(135deg, var(--bg) 0%, #1a1f2e 100%)' }}>
        <GeometricPattern variant="triangles" />
        <div style={{ zIndex: 1, textAlign: 'center' }}>
          <div className="hover-glow" style={{
            width: 160, height: 160, margin: '0 auto 30px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            animation: 'morph 8s infinite alternate',
            boxShadow: '0 0 40px var(--primary)'
          }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 10 }}>{arName}</h1>
          <p style={{ fontSize: '1.2rem', color: '#a0b0c0', marginBottom: 40 }}>{enName}</p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {items.map(item => (
              <Link key={item.href} href={item.href}>
                <div className="hover-glow" style={{
                  width: 140, height: 140, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                  borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', border: '1px solid var(--primary)',
                  cursor: 'pointer'
                }}>
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                  <span style={{ marginTop: 8, fontWeight: 500 }}>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes morph {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
        `}</style>
      </div>
    </>
  );
}
