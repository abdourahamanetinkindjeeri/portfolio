import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Skills from '../pages/Skills';
import CertificationsPage from '../pages/CertificationsPages';
import Experiences from '../pages/Experiences';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/competences" element={<Skills />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
