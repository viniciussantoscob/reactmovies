import { Banner } from "@/components/Banner";
import { List } from "@/components/List";

export const metadata = {
    title: 'Lista de séries',
    description: 'Página de séries'
}

export default function PageSeries(){
    return (
        <>
            <Banner 
                titulo="Séries"
                tipo="series"
            />
            <List tipo="series"/>
        </>
    )
}