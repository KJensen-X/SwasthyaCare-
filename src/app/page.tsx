import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  const userName = user?.firstName || "Traveler";

  return (
    <main className="relative min-h-screen bg-[#070A09] text-gray-200 font-sans overflow-hidden selection:bg-teal-900 selection:text-teal-100">
      
      {/* ATMOSPHERIC LIGHTING (Hooghly Mist & Heritage Gold Blurs) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-12 flex flex-col min-h-screen">
        
        {/* GLASSMORPHISM NAV */}
        <nav className="flex justify-between items-center bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-full px-6 py-4 shadow-[0_4px_40px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4">
            {/* Abstract Lotus/Stethoscope Logo Placeholder */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-600 to-amber-500 opacity-80 shadow-[0_0_20px_rgba(20,184,166,0.4)]"></div>
            <h1 className="text-xl font-light tracking-[0.2em] text-white/90">
              SWASTHYA<span className="font-medium text-teal-400">CARE</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs tracking-widest uppercase text-amber-200/40 hidden md:block">Kolkata</p>
            <div className="p-1 rounded-full bg-white/5 border border-white/10 hover:scale-105 transition-transform">
               <UserButton />
            </div>
          </div>
        </nav>

        {/* POETIC HERO SECTION */}
        <header className="mt-20 mb-16 max-w-3xl">
          <p className="text-teal-400/80 uppercase tracking-[0.3em] text-xs font-medium mb-6">Your Personal Sanctuary</p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
            The city breathes,<br />
            <span className="font-serif italic text-amber-100/90 text-4xl md:text-6xl">and so do you, {userName}.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            A moment of calm in the chaos. We are here to listen, understand, and guide your well-being with profound care.
          </p>
        </header>

        {/* MAIN ACTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
          
          {/* SMART SYMPTOM CHECKER (Glassmorphism Focus) */}
          <div className="lg:col-span-7 group relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden hover:bg-white/[0.05] transition-all duration-500 ease-out shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-400/20 transition-all duration-700"></div>
            
            <h3 className="text-3xl font-light mb-3 text-white">How is your body feeling?</h3>
            <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed">
              Share your symptoms or upload your reports. Our AI will organize the noise into a clear, actionable path forward.
            </p>
            
            <button className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-950 to-teal-900 border border-teal-700/50 text-teal-50 px-8 py-4 rounded-full font-medium tracking-wide shadow-[0_0_30px_rgba(13,148,136,0.2)] hover:shadow-[0_0_40px_rgba(13,148,136,0.4)] hover:scale-[1.02] transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Talk through a symptom
            </button>
          </div>

          {/* HIGH-END MAPPING INTERFACE (The City Pulse) */}
          <div className="lg:col-span-5 relative bg-[#090C0B] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden group shadow-2xl flex flex-col justify-end min-h-[300px] hover:border-white/10 transition-colors duration-500">
            {/* Architectural Grid Mockup */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Glowing Heatmap Nodes (CSS Animations) */}
            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.9)] animate-pulse"></div>
            <div className="absolute top-[60%] right-[30%] w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_35px_rgba(45,212,191,0.7)] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-[25%] left-[45%] w-2 h-2 bg-amber-300 rounded-full shadow-[0_0_15px_rgba(252,211,77,0.8)] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 mt-32">
              <h3 className="text-2xl font-medium text-white mb-2">City Health Pulse</h3>
              <p className="text-teal-200/50 text-sm font-light mb-6">Monitoring active care signals across Kolkata.</p>
              
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 flex justify-between items-center group-hover:px-7">
                <span>Explore Live Map</span>
                <span className="text-amber-200/80">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}