import { create } from 'zustand';

export interface Project {
  id: number;
  title: string;
  type: string;
  info: string;
  pos: number[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

interface Store {
  // اللغة
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  // معلومات شخصية
  arName: string;
  setArName: (n: string) => void;
  enName: string;
  setEnName: (n: string) => void;
  email: string;
  setEmail: (e: string) => void;
  phone: string;
  setPhone: (p: string) => void;
  // مشاريع
  projects: Project[];
  setProjects: (p: Project[]) => void;
  // مهارات
  skills: Skill[];
  setSkills: (s: Skill[]) => void;
  // ألوان
  primaryColor: string;
  setPrimaryColor: (c: string) => void;
  secondaryColor: string;
  setSecondaryColor: (c: string) => void;
  backgroundColor: string;
  setBackgroundColor: (c: string) => void;
}

const defaultProjects: Project[] = [
  { id: 1, title: 'متجر إلكتروني', type: 'برمجة', info: 'مشروع متجر متكامل بـ Next.js', pos: [-3, 0, -2] },
  { id: 2, title: 'هوية بصرية', type: 'تصميم', info: 'شعار وهوية بصرية لشركة ناشئة', pos: [2, 0, -3] },
  { id: 3, title: 'تطبيق جوال', type: 'برمجة', info: 'تطبيق مهام بـ React Native', pos: [0, 0, -4] },
  { id: 4, title: 'موقع تعريفي', type: 'برمجة', info: 'موقع شخصي بتقنيات حديثة', pos: [-2, 0, 1] },
  { id: 5, title: 'بوستر فيلم', type: 'تصميم', info: 'تصميم جرافيكي لفيلم وثائقي', pos: [3, 0, 0] },
];

const defaultSkills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'UI/UX', level: 75 },
  { name: 'Node.js', level: 70 },
];

export const useStore = create<Store>((set) => ({
  language: 'ar',
  setLanguage: (lang) => set({ language: lang }),
  arName: 'مصطفى محمود',
  setArName: (n) => set({ arName: n }),
  enName: 'Mostafa Mahmoud',
  setEnName: (n) => set({ enName: n }),
  email: 'mostafa351989@gmail.com',
  setEmail: (e) => set({ email: e }),
  phone: '01044907363',
  setPhone: (p) => set({ phone: p }),
  projects: defaultProjects,
  setProjects: (p) => set({ projects: p }),
  skills: defaultSkills,
  setSkills: (s) => set({ skills: s }),
  primaryColor: '#3a6ea5',
  setPrimaryColor: (c) => set({ primaryColor: c }),
  secondaryColor: '#1e3a5f',
  setSecondaryColor: (c) => set({ secondaryColor: c }),
  backgroundColor: '#0a0f1a',
  setBackgroundColor: (c) => set({ backgroundColor: c }),
}));
