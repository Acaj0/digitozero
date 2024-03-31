import NavBar from "@/components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { title } from "process";

const showList: {
  title: string;
  description: string;
  button: { title: string; link: string };
}[] = [
  {
    title: "29/06 - Louvada",
    description: "Evento Sunpet3 dadisjdias ototototottotoot",
    button: {
      title: "INGRESOS",
      link: "https://www.instagram.com/sunpet_animal?igsh=MXVhNXpxbTQ0NzY3cw==",
    },
  },
  {
    title: "00/00 - La Cerva",
    description: "teste",
    button: {
      title: "INGRESOS",
      link: "https://www.google.com/search?client=opera-gx&q=ingressos&sourceid=opera&ie=UTF-8&oe=UTF-8",
    },
  },
];

export default function Shows() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pt-10 gap-10">
        <h1 className="text-2xl italic font-semibold">
          Proximos shows da banda
        </h1>
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
      </div>
    </>
  );
}
