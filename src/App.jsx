import { ArmaTuEquipoSection } from './components/ArmaTuEquipoSection.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { PorQueSummerSection } from './components/PorQueSummerSection.jsx'
import { PlayTheGameSection } from './components/PlayTheGameSection.jsx'
import { PreventaSection } from './components/PreventaSection.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { TemporadasSection } from './components/TemporadasSection.jsx'
import { TestimoniosSection } from './components/TestimoniosSection.jsx'
import { SedesPresencialesSection } from './components/SedesPresencialesSection.jsx'
import { SummerFaqSection } from './components/SummerFaqSection.jsx'
import { SummerFinalCtaSection } from './components/SummerFinalCtaSection.jsx'
import { WhatsAppFloatButton } from './components/WhatsAppFloatButton.jsx'
import { WorldCupAdventureSection } from './components/WorldCupAdventureSection.jsx'

function App() {
  return (
    <div className="flex min-h-dvh min-w-0 flex-col overflow-x-hidden bg-white">
      <SiteHeader />
      <main className="flex-1 bg-white">
        <HeroSection />
        <TemporadasSection />
        <PreventaSection />
        <PlayTheGameSection />
        <ArmaTuEquipoSection />
        <WorldCupAdventureSection />
        <SedesPresencialesSection />
        <PorQueSummerSection />
        <TestimoniosSection />
        <SummerFaqSection />
        <SummerFinalCtaSection />
      </main>
      <WhatsAppFloatButton />
    </div>
  )
}

export default App
