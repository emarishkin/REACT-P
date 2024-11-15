import { useState } from 'react'
import logo from '/logo-name.svg'


export function Header(){
  let [now,setNow] = useState(new Date())
    
   setInterval(() => setNow(new Date()),1000)

    return(
  <header>
    <img src={logo} alt={'name'} />
          {/* <h3>Result Universuty</h3> */}
  
          <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
  }