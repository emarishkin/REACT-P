import {Header} from '../src/comonents/Header'
import { TeachingSection } from './comonents/TeachingSection';
import { DifferencesSection } from './comonents/DifferencesSection';
import {IntroSection} from './comonents/introSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  )
}


