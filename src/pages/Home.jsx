import Certifications from "../components/Certifications";
import FeaturedProjects from "../components/FeaturedProjects";
import MainHero from "../components/MainHero";
import Stack from "../components/Stack";

export default function HomePage() {

  return (
    <main className="main-hero">
      <MainHero/>
      <Stack/>
      <FeaturedProjects/>
      <Certifications/>
    </main>
  );
}
