import Head from 'next/head';
import { useStore } from '../components/store';
import GeometricPattern from '../components/GeometricPattern';

export default function Settings() {
  const store = useStore();
  const language = store.language;

  const updateProject = (id: number, field: string, value: string) => {
    store.setProjects(store.projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const updateSkill = (index: number, field: string, value: string | number) => {
    const newSkills = [...store.skills];
    newSkills[index] = { ...newSkills[index], [field]: field === 'level' ? Number(value) : value };
    store.setSkills(newSkills);
  };

  return (
    <>
      <Head><title>{language === 'ar' ? 'الإعدادات' : 'Settings'}</title></Head>
      <div className="page" style={{ background: '#0d1320', paddingTop: 80 }}>
        <GeometricPattern variant="hexagons" />
        <div style={{
          zIndex: 1, width: '100%', maxWidth: 600, background: 'rgba(15,22,38,0.9)',
          backdropFilter: 'blur(15px)', borderRadius: 20, padding: 30,
          border: '1px solid var(--primary)',
          clipPath: 'polygon(0 3%, 100% 0, 97% 100%, 3% 97%)',
          overflowY: 'auto', maxHeight: '80vh'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#6da8e0' }}>
            {language === 'ar' ? 'لوحة التحكم' : 'Control Panel'}
          </h2>

          <div className="section">
            <h3 className="section-title">{language === 'ar' ? 'الألوان' : 'Colors'}</h3>
            <div className="field">
              <label>{language === 'ar' ? 'اللون الرئيسي' : 'Primary'}</label>
              <input type="color" value={store.primaryColor} onChange={e => store.setPrimaryColor(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'اللون الثانوي' : 'Secondary'}</label>
              <input type="color" value={store.secondaryColor} onChange={e => store.setSecondaryColor(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'لون الخلفية' : 'Background'}</label>
              <input type="color" value={store.backgroundColor} onChange={e => store.setBackgroundColor(e.target.value)} />
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">{language === 'ar' ? 'المعلومات الشخصية' : 'Personal Info'}</h3>
            <div className="field">
              <label>{language === 'ar' ? 'الاسم بالعربي' : 'Arabic Name'}</label>
              <input value={store.arName} onChange={e => store.setArName(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'الاسم بالإنجليزي' : 'English Name'}</label>
              <input value={store.enName} onChange={e => store.setEnName(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'الإيميل' : 'Email'}</label>
              <input value={store.email} onChange={e => store.setEmail(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'الهاتف' : 'Phone'}</label>
              <input value={store.phone} onChange={e => store.setPhone(e.target.value)} />
            </div>
            <div className="field">
              <label>{language === 'ar' ? 'اللغة' : 'Language'}</label>
              <select value={store.language} onChange={e => store.setLanguage(e.target.value as 'ar' | 'en')}>
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">{language === 'ar' ? 'المشاريع' : 'Projects'}</h3>
            {store.projects.map((p, i) => (
              <div key={p.id} style={{ marginBottom: 16, borderBottom: '1px solid #2a3a55', paddingBottom: 10 }}>
                <div className="field">
                  <label>{language === 'ar' ? `عنوان ${i+1}` : `Title ${i+1}`}</label>
                  <input value={p.title} onChange={e => updateProject(p.id, 'title', e.target.value)} />
                </div>
                <div className="field">
                  <label>{language === 'ar' ? 'النوع' : 'Type'}</label>
                  <input value={p.type} onChange={e => updateProject(p.id, 'type', e.target.value)} />
                </div>
                <div className="field">
                  <label>{language === 'ar' ? 'الوصف' : 'Description'}</label>
                  <input value={p.info} onChange={e => updateProject(p.id, 'info', e.target.value)} />
                </div>
              </div>
            ))}
          </div>

          <div className="section">
            <h3 className="section-title">{language === 'ar' ? 'المهارات' : 'Skills'}</h3>
            {store.skills.map((skill, idx) => (
              <div key={idx} style={{ marginBottom: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
                <div className="field" style={{ flex: 2 }}>
                  <label>{language === 'ar' ? 'المهارة' : 'Skill'}</label>
                  <input value={skill.name} onChange={e => updateSkill(idx, 'name', e.target.value)} />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label>%</label>
                  <input type="number" min="0" max="100" value={skill.level} onChange={e => updateSkill(idx, 'level', e.target.value)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
