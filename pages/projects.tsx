import Head from 'next/head';
import GeometricPattern from '../components/GeometricPattern';
import { useStore } from '../components/store';

export default function Projects() {
  const projects = useStore(s => s.projects);
  const language = useStore(s => s.language);
  return (
    <>
      <Head><title>{language === 'ar' ? 'المشاريع' : 'Projects'}</title></Head>
      <div className="page" style={{ background: '#0f1522', paddingTop: 80 }}>
        <GeometricPattern variant="hexagons" />
        <h2 style={{ fontSize: '2rem', marginBottom: 30, zIndex: 1, color: '#c0d0f0' }}>
          {language === 'ar' ? 'المشاريع' : 'Projects'}
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20, width: '100%', maxWidth: 1000, zIndex: 1
        }}>
          {projects.map(project => (
            <div key={project.id} className="hover-glow" style={{
              background: 'rgba(20,30,50,0.7)', backdropFilter: 'blur(10px)',
              borderRadius: 20, padding: 20, border: '1px solid var(--primary)',
              clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
            }}>
              <h3 style={{ color: '#6da8e0', marginBottom: 10 }}>{project.title}</h3>
              <span style={{
                background: 'var(--primary)', padding: '2px 10px', borderRadius: 10, fontSize: '0.7rem',
                color: '#fff'
              }}>{project.type}</span>
              <p style={{ marginTop: 12, color: '#b0c0d0' }}>{project.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
