import Head from 'next/head';
import GeometricPattern from '../components/GeometricPattern';
import { useStore } from '../components/store';

function SkillRing({ name, level }: { name: string; level: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  return (
    <div style={{ textAlign: 'center', width: 120 }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#1e3050" strokeWidth="8" />
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--primary)" strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1s ease' }} />
        <text x="50" y="50" textAnchor="middle" dy="5" fill="#fff" fontSize="16" fontWeight="bold">{level}%</text>
      </svg>
      <p style={{ color: '#c0d0f0', marginTop: 8 }}>{name}</p>
    </div>
  );
}

export default function Skills() {
  const skills = useStore(s => s.skills);
  const language = useStore(s => s.language);
  return (
    <>
      <Head><title>{language === 'ar' ? 'المهارات' : 'Skills'}</title></Head>
      <div className="page" style={{ background: '#0d1320' }}>
        <GeometricPattern variant="grid" />
        <h2 style={{ fontSize: '2rem', marginBottom: 30, zIndex: 1, color: '#c0d0f0' }}>
          {language === 'ar' ? 'المهارات التقنية' : 'Technical Skills'}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30, justifyContent: 'center', zIndex: 1, maxWidth: 800 }}>
          {skills.map(skill => (
            <div key={skill.name} className="hover-glow" style={{
              background: 'rgba(20,30,50,0.5)', backdropFilter: 'blur(8px)',
              borderRadius: 16, padding: 20,
              border: '1px solid var(--primary)',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <SkillRing name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
