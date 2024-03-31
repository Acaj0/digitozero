import ImageBanda from "@/components/ImageBanda";
import NavBar from "@/components/NavBar";
import WelcomeText from "@/components/WelcomeText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/bg.gif')] bg-cover min-h-screen">
      <NavBar />

      <div className="flex flex-col justify-center items-center mt-80">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white font-serif">
          Bem-vindo ao site da banda Digito Zero!
        </h1>
        <p className="text-xl text-white">
          Somos uma banda apaixonada por música e por compartilhar nossa vibe
          com você.
        </p>
        <p className="text-xl text-white">
          Queremos que você se sinta parte da nossa jornada musical.
        </p>

        <div className="flex mt-6 gap-6">
          <a
            href="https://api.whatsapp.com/send?phone=5571982471477&text=Ola,%20gostaria%20de%20contratar%20a%20digito%20zero!"
            className="bg-[#f1c72f] w-24 h-9 flex justify-center items-center rounded-lg font-semibold px-4 py-2"
          >
            Contato
          </a>
          <a
            href="/shows"
            className="bg-white h-9 flex justify-center items-center rounded-lg font-semibold px-4 py-2"
          >
            Proximos Shows
          </a>
        </div>
        <div className="flex gap-2 mt-4 items-center ">
          <a className="flex text-xl">OverBlownRecords©️</a>
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
