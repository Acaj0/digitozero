import Image from "next/image";

export default function NavBar(){   
    return <div className="bg-[#151618] h-10 lg:h-24 flex justify-center items-center gap-20 text-xl italic">
    <a href="/shows">SHOWS</a>
    <a href="/setlist">SETLIST</a>
    <a href="/"><Image src={"/logodigitosite.png"} width={100} height={50} alt="logo da banda"/></a>
    <a href="/galeria">GALERIA</a>
    <a>CONTATO</a>
 </div>
}