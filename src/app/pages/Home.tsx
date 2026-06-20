import { NoiseOverlay } from '../components/NoiseOverlay';
import { floors } from '../data/floors';
import { PlaceholderBox } from '../components/PlaceholderBox';

export function Home() {
  return (
    <div className="w-full bg-[#EFEFEF] text-[#111111] font-['Inter',_sans-serif] selection:bg-[#111111] selection:text-[#EFEFEF] overflow-x-hidden min-h-screen">
      <NoiseOverlay />
      
      {/* Global Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-16 md:py-8 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="text-xs md:text-sm font-['Space_Grotesk'] font-medium tracking-[0.2em] uppercase">
            Studio Portfolio
          </span>
          <span className="font-['JetBrains_Mono'] text-[9px] md:text-[10px] tracking-widest opacity-50 uppercase">
            Architectural Rigor
          </span>
        </div>
        <div className="pointer-events-auto">
          <button className="text-[10px] font-['JetBrains_Mono'] tracking-widest uppercase hover:opacity-60 transition-opacity">
            Index
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-end px-6 md:px-16 pb-32 pt-48 max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-12 lg:col-span-10">
            <h1 className="text-[14vw] sm:text-[12vw] lg:text-[9vw] leading-[0.85] font-['Space_Grotesk'] font-light tracking-tighter text-[#111111] uppercase">
              A Physical <br/>
              Manifestation <br/>
              <span className="text-[#111111]/40">Of Thought.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-16 md:mt-24 flex flex-col gap-8">
            <div className="w-full h-[1px] bg-[#111111]/20" />
            <p className="text-xl md:text-2xl leading-[1.6] tracking-tight text-[#111111]/80 font-light max-w-2xl">
              Not just a collection of case studies, but a spatial experience built on a 2D plane. Engineered with architectural precision, editorial pacing, and systematic structural elegance.
            </p>
            <div className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#111111]/40 uppercase mt-8 flex flex-col gap-2">
              <span>Scroll to ascend</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floors (Continuous Scroll layout) */}
      <main className="w-full relative z-10 flex flex-col">
        {floors.map((floorData) => (
          <section key={floorData.id} id={`floor-${floorData.id}`} className="w-full border-t border-[#111111]/20">
            <div className="px-6 py-32 md:px-16 grid grid-cols-12 gap-8 max-w-[1800px] mx-auto w-full relative">
              
              {/* Left Column: Sticky Numbering */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="sticky top-32 flex flex-col">
                  <h2 className="text-[35vw] md:text-[15vw] leading-[0.75] font-['Space_Grotesk'] font-light tracking-tighter text-[#111111]">
                    {floorData.number}
                  </h2>
                  <div className="mt-8 md:mt-12 flex flex-col gap-2 font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#111111]/40 uppercase">
                    <span>Elevator Index //</span>
                    <span>Structural Alignment</span>
                    <span>{floorData.projects.length} Entities</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-5 mt-24 md:mt-0">
                <div className="max-w-xl mb-24 md:mb-32">
                  <h3 className="text-xs md:text-sm tracking-[0.2em] font-medium uppercase mb-6 md:mb-8 font-['Space_Grotesk'] border-b border-[#111111]/10 pb-4 inline-block">
                    {floorData.title}
                  </h3>
                  <p className="text-lg md:text-2xl leading-[1.6] tracking-tight text-[#111111]/80 font-light font-['Inter']">
                    {floorData.description}
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
                  {floorData.projects.map((project, idx) => {
                    const ratio = project.aspect === '16/9' ? 16/9 : project.aspect === '4/3' ? 4/3 : project.aspect === '3/4' ? 3/4 : 1;
                    return (
                      <div 
                        key={project.id} 
                        className={`flex flex-col ${idx % 2 === 1 ? 'sm:mt-32' : ''}`}
                      >
                        <PlaceholderBox 
                          aspectRatio={ratio} 
                          label={`FIG_${project.id.toUpperCase()}_RAW`} 
                        />
                        
                        <div className="mt-6 flex justify-between items-start border-t border-[#111111]/10 pt-4">
                          <h4 className="text-sm font-medium tracking-tight font-['Inter']">
                            {project.title}
                          </h4>
                          <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#111111]/40">
                            {project.aspect}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      
      {/* Footer */}
      <footer className="w-full border-t border-[#111111]/20 py-16 px-6 md:px-16 flex justify-between items-center bg-[#111111] text-[#EFEFEF] relative z-10">
        <div className="flex flex-col gap-1">
          <span className="font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase">End of Index</span>
          <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-white/40 uppercase">Apex Reached</span>
        </div>
        <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-white/40 uppercase">2026 ©</span>
      </footer>
    </div>
  );
}
