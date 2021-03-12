import React , { useState } from 'react';
import {AddCategory} from '../src/components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifestApp = () => {//esto es lo que se suele mostrar en la consola

  const [categories, setCategories] = useState(['Gifs!!']) //this component should be renderized

  // const handleAdd = () =>{
  //   setCategories( [...categories, 'nano no kanojo'] )
  // }


    return(//esto es lo que se suele mostrar en el body( lo que se renderiza )
      <>
      <h1>GifestApp</h1>
      <AddCategory setCategories = { setCategories }/>
      <hr/>

      <ol>

        {categories.map( category => 
           <GifGrid 
           key={ category }
           category={ category }/>
        )
        }
        
      </ol>

      
      </>
    )
  }


