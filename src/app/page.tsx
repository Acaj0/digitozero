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
    <div className=" bg-[url('/GIF-vertical-fudido-DIGITO-ZERO.gif')] md:bg-[url('/HORIZONTAL-GIFF-FUDIDO.gif')] md:justify-between flex flex-col bg-cover min-h-screen">
      <NavBar />
      <div className="flex flex-col justify-center md:items-end">
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-center p-2 w-full md:h-auto h-screen bg-black/60 md:gap-40">
          <div className="flex flex-col mt-10 md:mt-0 md:w-[500px] items-center">
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

            <div className="flex mt-10 gap-6">
              <Fale></Fale>
            </div>
          </div>
          <div className="items-center flex flex-col">
            <h3 className="text-2xl md:text-4xl text-white text-center mt-10">
              Últimas Atualizações
            </h3>
            <BlogPostsPreviewMain
              className="max-w-[500px] md:flex hidden"
              posts={result.posts.slice(0, 2)}
            />
            <BlogPostsPreviewMain
              className="max-w-[500px] flex md:hidden"
              posts={result.posts.slice(0, 1)}
            />
            <a href="/shows" className="text-white text-xl hover:underline">
              Ver Mais...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
