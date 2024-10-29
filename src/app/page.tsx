import { BlogPostsPreviewMain } from "@/components/BlogPostPreviewMain";
import { Fale } from "@/components/Fale";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { wisp } from "@/lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  return (
    <div className=" bg-[url('/GIF-vertical-fudido-DIGITO-ZERO.gif')] md:bg-[url('/HORIZONTAL-GIFF-FUDIDO.gif')] bg-cover min-h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-30 md:mt-40">
        <div className="flex flex-col justify-start md:justify-center items-center p-6 md:rounded-2xl bg-black/60">
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl text-white text-center ">
            Bem-vindo ao site da banda Digito Zero!
          </h1>
          <h2 className="text-lg md:text-xl text-white text-center">
            Somos uma banda de Cuiabá-MT apaixonada por música e por
            compartilhar nossa vibe com você.
          </h2>
          <p className="text-lg md:text-xl text-white text-center">
            Queremos que você se sinta parte da nossa jornada musical.
          </p>

          <div className="flex mt-2 gap-6">
            <Fale></Fale>
          </div>

          <div className="container mx-auto px-5 items-center flex flex-col">
            <h3 className="text-2xl md:text-4xl text-white text-center mt-10">
              Proximos Shows
            </h3> 
            <BlogPostsPreviewMain
              className="max-w-[800px]"
              posts={result.posts.slice(0, 2)}
            />
          </div>
          <a href="/shows" className="text-white text-xl hover:underline">Ver Mais...</a>
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
};
export default Page;
