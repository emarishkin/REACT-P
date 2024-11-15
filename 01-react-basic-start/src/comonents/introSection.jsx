import React from "react";


// export function IntroSection(){
//     // return(
//     //     <section>
//     //         <h1 className="centered">Result University</h1>
//     //         <h3 className="centered" style={{color: '#666'}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</h3>
//     //     </section>
//     // )
// }




export function IntroSection(){
    return (React.createElement('section',
        null,
        [React.createElement('h1', {className:"centered"},'Result University'),
         React.createElement('h3', {className:"centered", style:{color: '#666'}},
            'Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами'
         )
        ]
    ))
}