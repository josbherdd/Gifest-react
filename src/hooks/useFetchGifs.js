import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //hara una peticion y traera las imagenes    
    useEffect( () => {

        getGifs( category )
            .then( img => {
                setTimeout(() => {
                    
                    console.log(img)
                    setState({ 
                        data: img,
                        loading: false
                    });
                    
                }, 1000);
            
            })

    }, [ category ])

    // setTimeout(() => {
    //     setState ({
    //         data: [1,2,3,4],
    //         loading:false
    //     })
    // }, 3000);

    return state;


} 
































//los custom hooks es una forma de extraer logica de algun componente o logica que se quiere reutilizar y extraerla de manera que sea sencillo reultilizarla nuavamente
//los nombre se los hooks por buena practica comienzan por "use"
//los hooks no son mas que funciones 
//la importaciones de react no son necesarias cuando no se regresa jsx.