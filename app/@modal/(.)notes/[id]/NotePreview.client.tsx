// app/@modal/(.)notes/[id]/NotePreview.client.tsx
"use client";

import { useRouter } from "next/navigation";
import type { Note } from "@/types/note";
import css from "./NotePreview.module.css"; // якщо стилі з репозиторію — файл вже є

type Props = {
  note: Note;
};

export default function NotePreview({ note }: Props) {
  const router = useRouter();

  const onClose = () => {
    // повертаємось на сторінку, з якої відкривали модалку
    router.back();
  };

  return (
    <div className={css.preview}>
      <button className={css.closeBtn} onClick={onClose} aria-label="Close">
        ✕
      </button>

      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <span className={css.tag}>{note.tag}</span>
    </div>
  );
}
