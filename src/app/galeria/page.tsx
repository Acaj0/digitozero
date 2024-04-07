import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Galeria() {
  return (
    <div>
      <>
        <NavBar />
      </>
      <div className="flex justify-center items-center pt-2 flex-col">
        <div className=" flex justify-center">
          <div className="gap-4  items-center grid grid-cols-4">
            <Image
              src={"/IMG_6575.jpg"}
              width={317}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/HoockersAntonio01.jpeg"}
              width={326}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_6671.jpeg"}
              width={377}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_7114.jpg"}
              width={377}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_6670.jpeg"}
              width={377}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_6663.jpg"}
              width={317}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_6599.jpg"}
              width={317}
              height={200}
              alt="foto do Antonio"
            />
            <Image
              src={"/IMG_6700.png"}
              width={317}
              height={200}
              alt="foto do Antonio"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 items-center justify-center">
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
          <Image src="/spot.png" height={32} width={32} alt="link do spotify" />
        </a>
      </div>
    </div>
  );
}
