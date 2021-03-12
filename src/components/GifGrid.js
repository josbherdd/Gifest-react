import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {//esto es lo que se suele mostrar en la consola

    // const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs( category );//caera como argumento useFetchGifs(el custom hook) como si fuera un prop







    return (//esto es lo que se suele mostrar en el body( lo que se renderiza )
        <>
        <div id="category" className='category animate__animated animate__fadeInDown'><h3 >{ category }</h3><hr /></div>

        { loading && <p>Loading...</p> }
        
        <div className='card-grid'> 
                { images.map( img  =>( 
                   <GifGridItem 
                        { ...img }//manda cada una de las propiedades de las imagenes como una propiedad independiente
                        key = {img.id}/>
                )) 
                } 

            
        </div>
        
        </>
    )
}
