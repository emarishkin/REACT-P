import {Header} from '../src/comonents/Header'
import {ways,differences} from './data'
import {WayToTeach} from './comonents/WayToTeach'
import { Button } from './comonents/Button/Button';
import { useState } from "react";

export default function App() {
  const [content,setContent]=useState('нажми на кнопку')


  function handleClick(type) {
    setContent(type)
  }

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
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button onClick={() => handleClick('way')}>подход</Button>
          <Button onClick={() => handleClick('easy')}>Доступность</Button>
          <Button onClick={() => handleClick('program')}>Концентрация</Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  )
}


