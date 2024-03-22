import phrases from './utils/phrases.json'
import './App.css'


function App() {

  const indexRandom = Math.floor( Math.random() * phrases.length )
  console.log( phrases[ indexRandom ] )

  const indexImg = Math.floor( Math.random() * 4 ) + 1

  console.log(indexImg)
  return (
    <>
      <main
        style={{
          background: 'url(/img/fondo2.jpg)'
        }}
        className="main"
      >
        Hola
      </main>
    </>
  )
}

export default App
