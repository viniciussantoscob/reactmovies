import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Projeto React Movies",
  description: "Projeto desenvolvido na aula de React ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />  
        {children}
        <Footer />
      </body>
    </html>
  );
}
