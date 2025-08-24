"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import type { Note } from "@/types/note";

export default function NoteModal({ note }: { note: Note }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} />
    </Modal>
  );
}
