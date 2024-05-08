import { BeatLoader } from "react-spinners";

export default function Loading(){
    return(
        <div className="w-full h-full z-10 absolute top-0 left-0 flex justify-center items-center bg-black">
            <BeatLoader color="#36d7b7" size={20} margin={10} width={'100%'} speedMultiplier={2}/>
        </div>
        
    )
}