"use client"

import { getData } from "@/api/tmdb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTrophy, FaTheaterMasks } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

export function List({tipo}){

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [dataset, setDataset] = useState('popular');

    useEffect(() => {
        async function loadData(){
            try {
                const {data,error} = await getData(tipo,dataset)
                if(error){
                    setError(error)
                }else{
                    setItems(data)
                }
            } catch (error) {
                console.log(error)
            }
        }

       loadData();
    }, [dataset])

    if(error){
        return <h1>Erro ao acessar API</h1>
    }

    return (
        <div className="max-w-[1140px] mx-auto my-16 flex flex-col gap-6">

            <div className="place-content-center flex justify-start gap-4 px-4 md:px-0 text-sm overflow-x-auto">
                <Chip 
                    icon={<FaPeopleGroup />} 
                    label="Popular" 
                    color="primary"
                    variant={dataset == 'popular' ? 'fill' : 'outlined'}
                    onClick={() => setDataset('popular')}
                />
                
                <Chip 
                    icon={<FaTrophy />} 
                    label="Top Rated" 
                    color="primary" 
                    variant={dataset == 'top_rated' ? 'fill' : 'outlined'}
                    onClick={() => setDataset('top_rated')}
                />
                <Chip 
                    icon={<FaTheaterMasks />} 
                    label={tipo == 'filmes' ? 'Nos cinemas' : 'Hoje na TV'}
                    color="primary" 
                    variant={dataset == 'now_playing' || dataset == 'airing_today' ? 'fill' : 'outlined'}
                    onClick={() => setDataset(tipo == 'filmes' ? 'now_playing' : 'airing_today')}
                />
                <Chip 
                    icon={<RiMovie2Line />} 
                    label={tipo == 'filmes' ? 'Em breve' : 'No ar'}
                    color="primary" 
                    variant={dataset == 'upcoming' || dataset == 'on_the_air' ? 'fill' : 'outlined'}
                    onClick={() => setDataset(tipo == 'filmes' ? 'upcoming' : 'on_the_air')}/>
            </div>

            <div className="flex flex-wrap justify-center gap-7">

                {
                    items.map(item => (
                        <div className="relative" key={item.id}>
                            <Link href={`/detalhes/${tipo}/${item.id}`} className="hover:brightness-125 transition">
                                <Image 
                                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                    width={360}
                                    height={200}
                                    className="w-[360px] h-[200px] object-cover opacity-50"
                                    alt={`Imagem ${tipo} ${item.title}`}
                                />

                                <div className="absolute bottom-3 left-3 font-bold">
                                    <h2 className="text-2xl">{tipo == 'filmes' ? item.title : item.name}</h2>
                                    <h3>Ano: {tipo == 'filmes' ? item.release_date.substr(0,4) : item.first_air_date.substr(0,4)}</h3>
                                    <span className="flex gap-x-3 text-brand-yellow"><img src="/assets/star.svg" /> {item.vote_average.toFixed(1)}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}