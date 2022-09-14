import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavBarItemExternal({
  name,
  icon,
  link,
}: {
  name: string;
  icon: IconDefinition;
  link: string;
}) {
  return (
    <>
      <li>
        <Link href={link} passHref>
          <a
            target="_blank"
            className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FontAwesomeIcon
              icon={icon}
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span className="ml-3 lg:block hidden lg:text-lg ">{name}</span>
          </a>
        </Link>
      </li>
    </>
  );
}
