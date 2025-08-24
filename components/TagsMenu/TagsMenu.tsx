
import Link from "next/link";
import css from "./TagsMenu.module.css";
import { tags, type NoteTag } from "@/types/note";

type FilterTag = "All" | NoteTag;
const menuTags: FilterTag[] = ["All", ...tags];

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {menuTags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={tag === "All" ? "/notes/filter/All" : `/notes/filter/${encodeURIComponent(tag)}`}
              className={css.menuLink}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


