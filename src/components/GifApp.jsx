//fuctional component
import { useGif } from "../hooks/useGif"

export const GifApp = () =>{
   
    const {handleGetGif, gif} = useGif()
    return(
        //fragment

        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <button onClick={handleGetGif} className="btn btn-outline-warning">Generar Gif</button>
            </div>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <img className="w-50 m-5" src={gif} alt="image" />
            </div>
           
        </>

    )
        

    
}