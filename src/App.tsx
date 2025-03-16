import Button from './components/Button'
import Counter from './components/Counter'

function greet(name: string): string {
  return `Hola ${name}`
}


function App() {
  const handleClick = () => alert("Ya diste click")
  greet("Laura Camila")

  return (
    <>
      <Button onclick={handleClick} label="Click me"/>
      <Counter/>   
    </>
   
  )
}

export default App
