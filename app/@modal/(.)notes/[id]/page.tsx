import { notFound } from "next/navigation";
import { getSingleNote } from "@/lib/api";
import ModalBack from "./ModalBack.client";
import NotePreview from "./NotePreview.client";

type Params = { id: string };

export default async function NoteModalInterceptedPage({
  params,
}: {
  params: Promise<Params>;
}) {
  try {
    const { id } = await params;
    const note = await getSingleNote(id);

    return (
      <ModalBack>
        <NotePreview note={note} />
      </ModalBack>
    );
  } catch {
    notFound();
  }
}




