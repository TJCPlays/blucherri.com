import fs from "fs";
import CustomImage from "../../components/CustomImage";
import Link from "next/link";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync("games");
  const games = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`games/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return { slug, frontmatter };
  });
  return {
    props: {
      games,
    },
  };
}

export default function GamesPage({
  games,
}: {
  games: { slug: string; frontmatter: { [key: string]: any } }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {games.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 dark:border-gray-800 m-2 rounded-2xl shadow-lg overflow-hidden flex flex-col text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white font-bold"
        >
          <Link href={`/games/${slug}`}>
            <a>
              <CustomImage
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4 ">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
