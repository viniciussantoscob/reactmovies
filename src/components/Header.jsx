import Link from "next/link";

export function Header(){
    return (
        <header className="bg-brand-dark flex flex-col items-center p-6 gap-y-3 md:flex-row md:justify-between">
            <img src="/assets/logo.svg" alt="Logotipo"/>

            <nav className="flex gap-x-16">
                <Link href={'/'}>Início</Link>
                <Link href={'/filmes'}>Filmes</Link>
                <Link href={'/series'}>Séries</Link>
            </nav>
        </header>
    )
}