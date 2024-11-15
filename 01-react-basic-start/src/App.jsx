import {Header} from '../src/comonents/Header'
import { TeachingSection } from './comonents/TeachingSection';
import { DifferencesSection } from './comonents/DifferencesSection';
import {IntroSection} from './comonents/introSection'
import {TabsSection} from './comonents/TabsSection'
import {FeedBackSection} from './comonents/FeedBackSection'
import { useState } from 'react';

export default function App() {
  const [tab,setTab]=useState('feetback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current)=>setTab(current)}/>
        {tab==='main' && (
          <>
          <TeachingSection />
          <DifferencesSection />
          </>)}
        {tab==='feetback' && (
          <>
          <FeedBackSection />
          </>) }

        
      </main>
    </>
  )
}


