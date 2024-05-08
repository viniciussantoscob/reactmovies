
import { getDataId } from "@/api/tmdb";
import Image from "next/image";
import Link from "next/link";

export default async function PageDetalhes({ params }) {

  const { data, error } = await getDataId(params.categoria, params.id);

  function dateItem() {
    let dateValue;

    if (params.categoria == 'filmes') {
      dateValue = data.release_date
    }

    else {
      dateValue = data.first_air_date
    }

    return dateValue.substr(0, 4)
  }


  console.log(data)

  if (error) {
    return (<h1>Não foi possível carregar os dados</h1>)
  }

  return (

    <>

      <Image
        src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
        width={1440}
        height={500}
        className="w-full h-[500px] object-cover object-top opacity-50" alt="Poster" />

      <div
        className="
        flex 
        flex-col 
        items-center 
        gap-5
        relative 
        -top-80 
        w-[90%] 
        max-w-[850px] 
        mx-auto 
      bg-black 
        bg-opacity-50 
        backdrop-blur 
        p-7 
        rounded-lg

        md:flex-row
        md:-top-56
        ">

        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          width={300}
          height={450}
          className="hidden md:block rounded-lg"
          alt="Poster"
        />

        <div>
          <h1 className="md:text-5xl text-3xl font-bold">{params.categoria == 'filmes' ? data.title : data.name}</h1>

          <ul className="my-4 list-disc list-inside">
            <li>Ano: {dateItem()}</li>
            <li>Avaliação: {data.vote_average.toFixed(1)}</li>
          </ul>

          <p>{data.overview}</p>

          <Link href={params.categoria == 'filmes' ? '/filmes' : '/series'}                      
            className="inline-block bg-brand-blue-light text-black py-2 px-10 rounded-lg mt-4 hover:bg-brand-yellow">
              Voltar</Link>
        </div>

      </div>

    </>

  );

}