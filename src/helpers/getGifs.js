//esta funcion regresa una promesa que resuelve la coleccion de las imagenes
//toma las imagenes y las procesa


    export const getGifs = async( category ) =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=20&api_key=6us5qi1fBOYGluE3qjaXSbxMnHBus484`
        const resp = await fetch( url )//El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
        const { data } = await resp.json();//se desesctructura para acceder a la data dentro de esa data.
        
        //esta map sirve para extraer elemento especificos de la data
        const gifs = data.map(img =>{
            return{
                id: img.id, // (dato en especifico que se desea extraer): (elemento del cual se desea este dato).(dato especifico)
                title: img.title,
                url: img.images?.downsized_medium.url
            } //este va a transformar ada uno de los elementos que estan dentro del arreglo
        })

        return gifs;
    }




