import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Galeria() {
  return (
    <div>
      <>
        <NavBar />
      </>
      <div className="flex justify-center items-center pt-2 flex-col">
      </div>
      <div className="flex gap-2 mt-4 items-center justify-center">
        <a className="flex text-xl">DigitoZero©️</a>
        <a href="https://www.instagram.com/digito.zero/">
          <Image
            src="/instagram.png"
            height={32}
            width={32}
            alt="link do instagram"
          />
        </a>
        <a href="https://open.spotify.com/intl-pt/artist/0mH3A4qseUbSHGPij7PBAO?si=k5mJ8LcbTLS36spMqgg1ew">
          <Image src="/spot.png" height={32} width={32} alt="link do spotify" />
        </a>
      </div>
    </div>
  );
}
