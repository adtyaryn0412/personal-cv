import data from "./dataMahasiswa.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-white selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
      
      <Navbar fullName={data.profile.full_name} socialLinks={data.profile.social_links} />

      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-12">
        
        {/* Background Gradients (Fixed) */}
        <div className="fixed inset-0 opacity-30 dark:opacity-20 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div id="profile" className="scroll-mt-32 relative z-10">
            <Profile data={data.profile} statistics={data.statistics} />
        </div>

        <div id="skills" className="scroll-mt-32 relative z-10">
          <Skills skills={data.skills} />
        </div>

        <div id="experience" className="scroll-mt-32 relative z-10">
          <Experiences experiences={data.experiences} />
        </div>

      </main>

      <Footer fullName={data.profile.full_name} socialLinks={data.profile.social_links} />
    </div>
  );
}