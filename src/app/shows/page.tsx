import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { wisp } from "@/lib/wisp";
import NavBar from "@/components/NavBar";
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
];

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center pt-10 ">
        <h1 className="text-4xl mx-5 font-semibold">Proximos shows da banda</h1>
        <div className="md:mx-52 mx-5">
          <BlogPostsPreview posts={result.posts} />
          <BlogPostsPagination pagination={result.pagination} />
        </div>
        <div className="flex gap-2 mt-4 items-center ">
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
};
export default Page;
