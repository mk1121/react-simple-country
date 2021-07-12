import React from 'react'
import "./Country.css"
const Country = props => {
  const {name, flag, population} = props.country;
  return (
    <div className="country">
      <h1>{name}</h1>
      <img src={flag} alt={name} />
      <p>{population}</p>
      <button
        onClick={() => props.addHandle(props.country)}
      >add to cart</button>
    </div>
  )
}

export default Country
