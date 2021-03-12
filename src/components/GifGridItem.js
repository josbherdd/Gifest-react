import React from 'react'

export const GifGridItem = ( {title, url} ) => {//esto es lo que se suele mostrar en la consola
   


    return (//esto es lo que se suele mostrar en el body( como se renderizan las cards )
        <div className='card animate__animated animate__fadeInRight'>
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}
