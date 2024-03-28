import Image from "next/image";

export default function ImageBanda(){   
    return <div className="bg-[#ffffff] h-30 flex justify-center items-top gap-20">
    <Image src={"/imagebanda.jpeg"} width={800} height={1000} alt="foto da banda"/>
 </div>
}