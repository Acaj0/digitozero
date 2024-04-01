import NavBar from "@/components/NavBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import * as React from "react";

const blocoA: {
  musica: string;
  artista: string;
}[] = [
  {
    musica: "Otherside",
    artista: "Red Hot Chili Peppers",
  },
  {
    musica: " Dani California ",
    artista: " Red Hot Chili Peppers ",
  },
  {
    musica: " Under The Bridge ",
    artista: " Red Hot Chili Peppers ",
  },
  {
    musica: " Californication ",
    artista: " Red Hot Chili Peppers ",
  },
  {
    musica: " Psycho Killer ",
    artista: " Talking Heads ",
  },
  {
    musica: " Black ",
    artista: " Pearl Jam ",
  },
  {
    musica: " Like a Stone ",
    artista: " Audioslave ",
  },
  {
    musica: " Creep ",
    artista: " Radiohead ",
  },
  {
    musica: " War Pigs ",
    artista: " Black Sabbath ",
  },
  {
    musica: " Paranoid ",
    artista: " Black Sabbath ",
  },
  {
    musica: " Seven Nation Army ",
    artista: " The White Stripes ",
  },
  {
    musica: " Comfotably Numb ",
    artista: " Pink Floyd ",
  },
  {
    musica: " Another Brick in The Wall ",
    artista: " Pink Floyd ",
  },
  {
    musica: " The Kids Arent All Right ",
    artista: " The Offspring ",
  },
  {
    musica: " Down in a Hole",
    artista: " Alice In Chains ",
  },
  {
    musica: " Man in the Box ",
    artista: " Alice In Chains  ",
  },
  {
    musica: " Enter Sandman ",
    artista: " Metallica ",
  },
  {
    musica: " Heart-Shaped Box ",
    artista: " Nirvana ",
  },
  {
    musica: "Come as you are",
    artista: "Nirvana",
  },
  {
    musica: " Smells Like Teen Spirit ",
    artista: " Nirvana ",
  },
  {
    musica: " My Hero ",
    artista: " Foo Fighters ",
  },
  {
    musica: " Everlong ",
    artista: " Foo Fighters ",
  },
];

const blocoB: {
  musica: string;
  artista: string;
}[] = [
  {
    musica: "Toxic",
    artista: "Britney Spears",
  },
  {
    musica: "Radioactive",
    artista: "Imagine Dragons",
  },
];

const blocoC: {
  musica: string;
  artista: string;
}[] = [
  {
    musica: "Tempo Perdido",
    artista: "Legião Urbana",
  },
  {
    musica: "A Sua Maneira",
    artista: "Capital Inicial",
  },
  {
    musica: " Tudo Que Ela Gosta de Escutar ",
    artista: " Charlie Brown Jr ",
  },
  {
    musica: " Zoio de Lula",
    artista: " Charlie Brown Jr ",
  },
  {
    musica: " Pontes Indestrutiveis ",
    artista: " Charlie Brown Jr ",
  },
  {
    musica: " Ainda é Cedo",
    artista: " Legião Urbana ",
  },
  {
    musica: " Que País é Esse ",
    artista: " Legião Urbana ",
  },
  {
    musica: " Geração Coca Cola  ",
    artista: " Legião Urbana ",
  },
  {
    musica: " O Coro Vai Comer ",
    artista: " Charlie Brown Jr ",
  },
];

export default function Setlist() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center flex-col p-20 gap-20">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl">Setlist completo</h1>
          <h1>
            Abaixo, separado por blocos, encontram-se todas as musicas que a
            digito zero atualmente toca.
          </h1>
          <h1>Podendo ser escolhidas dependendo do evento e público.</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <ScrollArea className="flex h-96 w-72 rounded-md border bg-[#151618] text-white">
            <div className="p-4">
              <h4 className="flex mb-2 text-sm font-medium leading-none justify-center">
                BLOCO A
              </h4>
              <h5 className="flex mb-4 text-xs font-medium leading-none justify-center">
                Rock Internacional
              </h5>
              {blocoA.map((blocoA, index) => (
                <>
                  <div key={index} className="text-sm">
                    {blocoA.musica} - {blocoA.artista}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="flex h-96 w-72 rounded-md border bg-[#151618] text-white">
            <div className="p-4">
              <h4 className="flex mb-2 text-sm font-medium leading-none justify-center">
                BLOCO B
              </h4>
              <h5 className="flex mb-4 text-xs font-medium leading-none justify-center">
                Pop Goes Rock
              </h5>
              {blocoB.map((blocoB, index) => (
                <>
                  <div key={index} className="text-sm">
                    {blocoB.musica} - {blocoB.artista}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="flex h-96 w-72 rounded-md border bg-[#151618] text-white">
            <div className="p-4">
              <h4 className="flex mb-2 text-sm font-medium leading-none justify-center">
                BLOCO C
              </h4>
              <h5 className="flex mb-4 text-xs font-medium leading-none justify-center">
                As Brasileiras
              </h5>
              {blocoC.map((blocoC, index) => (
                <>
                  <div key={index} className="text-sm">
                    {blocoC.musica} - {blocoC.artista}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
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
