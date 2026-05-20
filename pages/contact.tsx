import Head from 'next/head';
import GeometricPattern from '../components/GeometricPattern';
import { useStore } from '../components/store';

// SVG بسيط لخريطة مصر
function EgyptMap() {
  return (
    <svg viewBox="0 0 200 200" style={{ width: 120, height: 120, margin: '0 auto', opacity: 0.8 }}>
      <path d="M100 20 L140 40 L160 80 L150 120 L120 150 L80 150 L50 120 L40 80 L60 40 Z"
        fill="var(--primary)" stroke="#fff" strokeWidth="2" />
      <circle cx="100" cy="100" r="8" fill="#ffaa00" />
      <text x="100" y="180" textAnchor="middle" fill="#fff" fontSize="14">Egypt</text>
    </svg>
  );
}

export default function Contact() {
  const arName = useStore(s => s.arName);
  const email = useStore(s => s.email);
  const phone = useStore(s => s.phone);
  const language = useStore(s => s.language);

  return (
    <>
      <Head><title>{language === 'ar' ? 'اتصل بي' : 'Contact'}</title></Head>
      <div className="page" style={{ background: '#0c1220' }}>
        <GeometricPattern variant="triangles" />
        <div style={{ zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 30, justifyContent: 'center', maxWidth: 900 }}>
          <div className="hover-glow" style={{
            background: 'rgba(25,35,55,0.8)', backdropFilter: 'blur(10px)',
            borderRadius: 20, padding: 30, width: 250, textAlign: 'center',
            border: '1px solid var(--primary)',
            clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
          }}>
            <EgyptMap />
            <p style={{ marginTop: 10, color: '#a0b0c0' }}>{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
          </div>
          {[
            { icon: '📧', label: language === 'ar' ? 'البريد الإلكتروني' : 'Email', value: email, href: `mailto:${email}` },
            { icon: '📱', label: language === 'ar' ? 'الهاتف' : 'Phone', value: phone, href: `tel:${phone}` },
          ].map(item => (
            <a key={item.label} href={item.href} className="hover-glow" style={{
              background: 'rgba(25,35,55,0.8)', backdropFilter: 'blur(10px)',
              borderRadius: 20, padding: 30, width: 250, textAlign: 'center',
              border: '1px solid var(--primary)',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
              display: 'block'
            }}>
              <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              <h3 style={{ margin: '10px 0 6px' }}>{item.label}</h3>
              <p style={{ color: '#b0c0d0', wordBreak: 'break-word' }}>{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
