import { useState } from 'react'
import { Phrase, ButtonPhrase } from './components'
import { getRandom } from './services'

import phrases from './utils/phrases.json'
import { backgrounds } from './utils/backgrounds.json'

import './App.css'


function App() {

    const [phrase, setPhrase] = useState(getRandom(phrases))
    const [background, setBackground] = useState(getRandom(backgrounds))


    const handleSetPhrase = () => {
        const newPhrase = getRandom(phrases)
        const newBackground = getRandom(backgrounds)
        
        if (newPhrase == phrase || newBackground === background) {
            handleSetPhrase()
            return
        }

        setPhrase(newPhrase)
        setBackground(newBackground)
    }
    return (
        <>
            <main
                style={{
                    backgroundImage: `url(${background})`
                }}
                className="main"
            >
                <article className="phrase-container">
                    <h1 className="phrase-container__title">Galletas de la fortuna</h1>
                    <Phrase
                        phrase={ phrase.phrase }
                        author={ phrase.author }
                    />
                    <ButtonPhrase
                        onClick= {handleSetPhrase }
                    />
                </article>
            </main>
        </>
    )
}

export default App
