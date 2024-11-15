import logo from '/logo-name.svg'


export function Header(){
    const now = new Date()
    const name = 'result'

    return(
  <header>
    <img src={logo} alt={name} />
          {/* <h3>Result Universuty</h3> */}
  
          <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
  }