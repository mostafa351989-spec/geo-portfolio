import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useStore } from '../components/store';

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const primaryColor = useStore(s => s.primaryColor);
  const secondaryColor = useStore(s => s.secondaryColor);
  const backgroundColor = useStore(s => s.backgroundColor);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--secondary', secondaryColor);
    document.documentElement.style.setProperty('--bg', backgroundColor);
  }, [primaryColor, secondaryColor, backgroundColor]);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Component {...pageProps} />
    </>
  );
}
