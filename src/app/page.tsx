import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[url('/GIF-vertical-fudido-DIGITO-ZERO.gif')] md:bg-[url('/HORIZONTAL-GIFF-FUDIDO.gif')] bg-cover min-h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-60 md:mt-80">
        <div className="flex flex-col justify-start md:justify-center items-center p-6 rounded-2xl bg-black/60">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-5xl text-white text-center ">
            Bem-vindo ao site da banda Digito Zero!
          </h1>
          <p className="text-lg md:text-xl text-white text-center">
            Somos uma banda de Cuiabá-MT apaixonada por música e por compartilhar nossa vibe
            com você.
          </p>
          <p className="text-lg md:text-xl text-white text-center">
            Queremos que você se sinta parte da nossa jornada musical.
          </p>

          <div className="flex mt-6 gap-6">
            <a
              href="https://api.whatsapp.com/send?phone=5571982471477&text=Ola,%20gostaria%20de%20contratar%20a%20digito%20zero!"
              className="bg-[#f1c72f] hover:bg-[#e0c357] hover:animate-pulse w-24 h-9 flex justify-center items-center rounded-lg font-semibold px-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              Contato
            </a>
            <a
              href="/shows"
              className="bg-white h-9 flex justify-center items-center rounded-lg font-semibold px-4 py-2 hover:bg-gray-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              Proximos Shows
            </a>
          </div>
        </div>
        <div className=" hidden gap-2 mt-6 items-center p-1 rounded-lg">
          <a href="https://www.instagram.com/digito.zero/">
            <Image
              src="/instagram.png"
              height={32}
              width={32}
              alt="link do instagram"
            />
          </a>
          <a href="https://open.spotify.com/intl-pt/artist/0mH3A4qseUbSHGPij7PBAO?si=k5mJ8LcbTLS36spMqgg1ew">
            <Image
              src="/spot.png"
              height={32}
              width={32}
              alt="link do spotify"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
