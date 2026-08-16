import { Fragment } from "react"

export function Greeting(){
  const name = "John"
  return(
    <Fragment>
      <h2 className="title">Hello {name}</h2>
      <p>Nice to meet you!</p>
    </Fragment>
  )
}