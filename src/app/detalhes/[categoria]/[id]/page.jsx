"use client"

import { getDataId } from "@/api/tmdb";
import { Detalhe } from "@/components/Detalhe";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function PageDetalhes({params}){

    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData(){
            try {
                const {data,error} = await getDataId(params.categoria,params.id);

                if(error){
                    setError(error)
                }else{
                    setData(data)
                    setLoading(false)
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

    if(loading){
        // return <BarLoader color="#36d7b7" width={'100%'}/>
        return <Loader />
    }

    return (
        <Detalhe tipo={params.categoria} data={data}/>
    )
}