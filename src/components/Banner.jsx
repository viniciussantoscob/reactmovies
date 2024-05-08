export function Banner({titulo, subtitulo,tipo}){

    function background(tipo){
        if(tipo === 'filmes')
            return 'bg-filmes'
        else if(tipo === 'series')
            return 'bg-series'
        else{
            return 'bg-home'
        }
    }

    return(
        <div className={`${background(tipo)} h-[330px] bg-cover flex justify-center text-center items-center`}>
            <div>
                <h1 className="font-bold mb-2 text-5xl">{titulo}</h1>
                <p className="max-w-96">{subtitulo}</p>
            </div>
        </div>
    )
}