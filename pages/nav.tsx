import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const allContent = {
    home: "Home page",
    about: "About page",
    contact: "Contact page",
  };
  const router = useRouter();
  const [activeContent, setActiveContent] = useState(allContent.home);

  async function setContent() {
    const { tab } = await router.query;
    if (tab == "home") {
      setActiveContent(allContent.home);
    } else if (tab == "about") {
      setActiveContent(allContent.about);
    } else if (tab == "contact") {
      setActiveContent(allContent.contact);
    } else {
      setActiveContent(allContent.home);
    }
    return 0;
  }

  setContent();

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link href="/?tab=home">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={() => setActiveContent(allContent.home)}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/?tab=about">
            <a
              className="nav-link"
              onClick={() => setActiveContent(allContent.about)}
            >
              About
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/?tab=contact">
            <a
              className="nav-link"
              onClick={() => setActiveContent(allContent.contact)}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <div className="container mt-5">
        <p>{activeContent}</p>
      </div>
    </div>
  );
}
