import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Galeria() {
  return (
    <div>
      <>
        <NavBar />
      </>
      <div className="flex justify-center pt-2">
        <div className=" flex justify-center md:w-[800px] md:h-[600px]">
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <div>
              <Image
                src={"/HoockersAntonio01.jpeg"}
                width={317}
                height={200}
                alt="foto do Antonio"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className=" items-center">
                <Image
                  src={"/imagebanda.jpeg"}
                  width={400}
                  height={400}
                  alt="foto da banda"
                />
              </div>
              <div className="bg-slate-300 items-center">
                <Image
                  src={"/Louvada02.jpeg"}
                  width={400}
                  height={500}
                  alt="foto do show na louvada"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
