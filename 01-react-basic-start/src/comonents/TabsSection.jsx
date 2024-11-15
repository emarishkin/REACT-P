import {Button} from './Button/Button'


export function TabsSection({active,onChange}){
    return(
        <section className='section-Tabs' style={{marginBottom: '20px'}}>
            <Button isActive={active==='main'} onClick={()=>onChange('main')}>Главная</Button>
            <Button isActive={active==='feetback'} onClick={()=>onChange('feetback')}>Обратная связь</Button>

        </section>
    )
}