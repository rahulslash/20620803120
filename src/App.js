import { useState, useEffect } from "react"




export default function Home() {

  const [url, setUrl] = useState("")

  const [numbers, setNumbers] = useState([])

  // const baseUrl = "http://20.244.56.144/numbers/"
  // const url = "http://20.244.56.144/numbers/primes";

  async function fetchPrime() {

  }


  async function fetchData() {
    if (url === "http://20.244.56.144/numbers/prime" || url === "http://20.244.56.144/numbers/fibo" || url === "http://20.244.56.144/numbers/odd" || url === "http://20.244.56.144/numbers/rand") {
      try {
        const response = await fetch(url)
        const filter = await response.json();
        setNumbers(filter.numbers)
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    return () => {
      fetchPrime();
    }
  }, [])

  useEffect(() => {
    if (numbers)
      console.log(numbers);
  }, [numbers])

  return (
    <>
      <div>
        <div>
          <h1>
            Afoordmed
          </h1>
          <div>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder='Enter your url' />
            <button onClick={fetchData}>SHOOOTTOOTOO</button>
          </div>
          {
            numbers &&
            numbers.sort((a, b) => toString(a) - toString(b))
              .map((number, id) => {
                return (
                  <span key={id}>{number} </span>
                )
              })
          }

        </div>
      </div>
    </>
  )
}