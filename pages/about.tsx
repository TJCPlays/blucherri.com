import type { NextPage } from "next";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import CustomImage from "../components/CustomImage";

export async function getStaticProps() {
  const files = fs.readdirSync("teamBios");
  const people = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`teamBios/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    const htmlContent = md({ html: true, xhtmlOut: true }).render(content);

    return { slug, frontmatter, htmlContent };
  });
  return {
    props: {
      people,
    },
  };
}

export default function About({
  people,
}: {
  people: {
    slug: string;
    frontmatter: { [key: string]: any };
    htmlContent: string;
  }[];
}) {
  return (
    <div className="text-gray-500 dark:text-gray-400 text-center">
      <div className="py-2">
        <h1 className="text-[#dcdfe7] underline text-3xl lg:text-4xl font-bold pb-5">
          About us
        </h1>
        <p>
          We are a small indie game studio, working on games for the entire
          family.
        </p>
      </div>
      <div className="py-2">
        <h3 className="text-2xl underline lg:text-3xl">Meet the team</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
          {people.map(({ slug, frontmatter, htmlContent }) => (
            <div
              key={slug}
              className="border border-gray-200 dark:border-gray-800 m-2 rounded-2xl shadow-lg overflow-hidden flex flex-col text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-start"
            >
              <CustomImage
                width={240}
                height={240}
                layout="responsive"
                alt={frontmatter.name}
                src={`/${frontmatter.pfp}`}
              />
              <h1 className="p-4 pb-2 font-bold">{frontmatter.name}</h1>
              <p className="p-4 pt-0">{frontmatter.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
