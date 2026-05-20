import Head from 'next/head';
import GeometricPattern from '../components/GeometricPattern';
import { useStore } from '../components/store';

export default function About() {
  const arName = useStore(s => s.arName);
  const enName = useStore(s => s.enName);
  const language = useStore(s => s.language);
  return (
    <>
      <Head><title>{language === 'ar' ? 'نبذة عني' : 'About'}</title></Head>
      <div className="page" style={{ background: 'linear-gradient(45deg, #101826, #1a2332)' }}>
        <GeometricPattern variant="grid" />
        <div className="hover-glow" style={{
          zIndex: 1, maxWidth: 700, textAlign: 'center', background: 'rgba(15,20,35,0.8)',
          backdropFilter: 'blur(15px)', borderRadius: 30, padding: 40,
          clipPath: 'polygon(5% 0, 100% 5%, 95% 100%, 0 95%)',
          border: '1px solid var(--primary)'
        }}>
          <div style={{
            width: 100, height: 100, margin: '0 auto 20px', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }} />
          <h2 style={{ fontSize: '2rem', marginBottom: 10 }}>{arName}</h2>
          <h3 style={{ color: '#8090b0', marginBottom: 20 }}>{enName}</h3>
          <p style={{ lineHeight: 1.8, color: '#c0d0e0' }}>
            {language === 'ar'
              ? 'مصمم ومطور مواقع شغوف، بدمج بين الإبداع الهندسي والبرمجة لإنشاء تجارب رقمية فريدة.'
              : 'Passionate designer & developer merging geometric creativity with code for unique digital experiences.'}
          </p>
        </div>
      </div>
    </>
  );
}
