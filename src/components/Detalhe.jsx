import Image from "next/image";
import Link from "next/link";

export function Detalhe({tipo, data}){

    function dateItem(){
        let dateValue;
    
        if(tipo == 'filmes'){      
          dateValue = data.release_date
        }
    
        else{
          dateValue = data.first_air_date
        }
    
        return dateValue.substr(0,4)
    }

    return (
        <div className="flex justify-center min-h-[500px] md:min-h-[900px]">
            <Image 
                src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} 
                width={1440} 
                height={500} 
                className="w-full h-[300px] md:h-[500px] object-cover opacity-50 object-top"
                alt="poster"
            />
            <div className="w-[90%] md:max-w-[850px] h-auto mt-[125px] md:mt-[250px] gap-8 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm absolute p-3 md:p-7 flex flex-col md:flex-row">
                <Image 
                    src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} 
                    width={300} 
                    height={450} 
                    className="rounded-lg object-cover w-full h-[500px] hidden md:inline"
                />
                
                <div className="place-self-center flex flex-col gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold">{tipo == 'filmes' ? data.title : data.name}</h1>
                    <ul className="list-disc list-inside">
                        <li className="text-sm md:text-base">Ano: {dateItem()}</li>
                        <li className="text-sm md:text-base">Avaliação: {data.vote_average.toFixed(1)}</li>
                    </ul>
                    <p className="text-sm md:text-base">{data.overview}</p>
                    <Link className="bg-brand-blue-light w-32 text-center rounded-lg py-2 text-black hover:bg-brand-yellow transition" href={`/${tipo}`}>Voltar</Link>
                </div>

            </div>
        </div>
    )
}