import { Banner } from "@/components/Banner";
import { List } from "@/components/List";

export const metadata = {
    title: 'Lista de filmes',
    description: 'Página de filmes'
}

export default function PageFilmes(){
    return (
        <>
            <Banner 
                titulo="Filmes" 
                tipo="filmes"
            />
            <List tipo="filmes" />
        </>
    )
}