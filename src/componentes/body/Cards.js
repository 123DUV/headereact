import React from 'react'

export default function Cards(props) {
  return (
    <div className='card2'>
      <img src={props.items.image} alt='logo'/>
      <div>
        <h5>{props.items.title}</h5>
        <span className={fecha}>Fecha De Lazamiento: <br></br>{props.item.fechaLanzamiento}  </span>
        <p>{props.item.descripcion}</p>
        <button>Comprar</button>
      </div>
    </div>
  )
}


