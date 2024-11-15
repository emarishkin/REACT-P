import {Header} from '../src/comonents/Header'
import {ways} from './data'
import {WayToTeach} from './comonents/WayToTeach'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
          <WayToTeach title={ways[0].title} description={ways[0].description}/>
          <WayToTeach title={ways[1].title} description={ways[1].description}/>
          <WayToTeach title={ways[2].title} description={ways[2].description}/>
          <WayToTeach title={ways[3].title} description={ways[3].description}/>
          </ul>
        </section>
      </main>
    </div>
  )
}


