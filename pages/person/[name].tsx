import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import CustomImage from "../../components/CustomImage";

export async function getStaticPaths() {
  const files = fs.readdirSync("teamBios");
  const paths = files.map((fileName) => ({
    params: {
      name: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { name },
}: {
  params: { name: string };
}) {
  const fileName = fs.readFileSync(`teamBios/${name}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Person({
  frontmatter,
  content,
}: {
  frontmatter: { [key: string]: any };
  content: string;
}) {
  return (
    <div>
      {/*<div className="prose dark:prose-invert mx-auto text-center mt-5">
        <h1>{frontmatter.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: md({ html: true, xhtmlOut: true }).render(content),
          }}
        />
        </div>*/}
        <h3 className="ml-2.5 mt-2.5 lg:text-4xl text-3xl underline font-bold text-center dark:text-gray-300">BluCherri Staff</h3>
        <div className="ml-5 mt-10 flex align-middle">
            <CustomImage src={`/${frontmatter.pfp}`} width={75} height={75} alt={frontmatter.name} className="rounded-full"/>
            <div className="ml-3 mt-auto py-1 flex flex-col">
                <h1 className="lg:text-2xl text-xl underline dark:text-gray-300">{frontmatter.name}</h1>
                <p className="dark:text-gray-300">{frontmatter.role}</p>
            </div>
        </div>
        <div className="mx-5 mt-2.5">
            <h1 className="underline font-bold text-lg dark:text-gray-300">Bio</h1>
            <p className="dark:text-gray-300">{frontmatter.bio}</p>
        </div>
    </div>
  );
}
