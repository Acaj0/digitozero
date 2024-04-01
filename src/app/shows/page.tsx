import NavBar from "@/components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const showList: {
  title: string;
  description: string;
  button: { title: string; link: string };
}[] = [
  {
    title: "29/06 - Cervejaria Louvada",
    description:
      "Evento Sunpet 3, a banda estará presente pela segunda vez no prestigiado palco da louvada pelo evento Sunpet, Com o intuito de angariar fundo para ajudar as ongs de animais da região",
    button: {
      title: "INGRESSOS",
      link: "https://www.instagram.com/sunpet_animal?igsh=MXVhNXpxbTQ0NzY3cw==",
    },
  },
  {
    title: "TBA - Cervejaria La Cerva",
    description: "Aguardando Data",
    button: {
      title: "Reservas",
      link: "https://api.whatsapp.com/send/?phone=556596843011&text=%E2%80%8ECervejaria+LaCerva+agradece+o+seu+contato.+Como+podemos+ajudar+você%3F&type=phone_number&app_absent=0",
    },
  },
];

export default function Shows() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pt-10 gap-10">
        <h1 className="text-2xl italic">Proximos shows da banda</h1>
        <div className="flex flex-col w-[300px] md:w-[800px] justify-center gap-5">
          {showList.map((show, index) => {
            return (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{show.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-between">
                      {show.description}
                      <a
                        className="flex bg-[#f1c72f] w-20 h-8 justify-center items-center rounded-lg italic font-semibold"
                        href={show.button.link}
                      >
                        {show.button.title}
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
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
    </>
  );
}
