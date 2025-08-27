import { notFound } from "next/navigation";
import { getSingleNote } from "@/lib/api";
import { NoteModal } from "@/components/Modal/Modal";

type Params = { id: string };

export default async function NoteModalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  try {
    const { id } = await params;                // ⬅️ розпаковуємо через await
    const note = await getSingleNote(id);

    return <NoteModal note={note} />;
  } catch {
    notFound();
  }
}

