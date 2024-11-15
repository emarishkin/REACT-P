import { useState } from "react";
import {differences} from '../data'
import {Button} from '../comonents/Button/Button'

export  function DifferencesSection(){
    const [contentType,setContentType]=useState()
    function handleClick(type) {
    setContentType(type)
  }
    return (
        <section>
        <h3>Чем мы отличаемся от других</h3>
        <Button isActive={contentType==='way'} onClick={() => handleClick('way')}>подход</Button>
        <Button isActive={contentType==='easy'} onClick={() => handleClick('easy')}>Доступность</Button>
        <Button isActive={contentType==='program'} onClick={() => handleClick('program')}>Концентрация</Button>
        {contentType?<p>{differences[contentType]}</p>:(<p>нажми на кнопку</p>)}       
        </section>
    )
}