"use client"

import { getDataId } from "@/api/tmdb";
import { Detalhe } from "@/components/Detalhe";
import { useEffect, useState } from "react";

export default function PageDetalhes({params}){

    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData(){
            try {
                const {data,error} = await getDataId(params.categoria,params.id);

                if(error){
                    setError(error)
                }else{
                    setData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        loadData()
    },[])

    if(error){
        return <h1>Erro ao acessar API</h1>
    }

    return (
        <Detalhe tipo={params.categoria} data={data}/>
    )
}