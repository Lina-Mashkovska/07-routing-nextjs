
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { getNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";

type PageProps = {
  params: { slug?: string[] };
  searchParams?: { page?: string; search?: string };
};

export default async function NotesFilterPage({ params, searchParams }: PageProps) {
  const pageStr = searchParams?.page;
  const rawSearch = searchParams?.search;

  const page = Number(pageStr ?? 1);
  const search = rawSearch ?? "";


  const raw = params?.slug?.[0] ?? "All";
  const tag: NoteTag | undefined = raw === "All" ? undefined : (decodeURIComponent(raw) as NoteTag);

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: ["notes", { page, search, tag: tag ?? null }],
    queryFn: () => getNotes({ page, search, tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NotesClient initialPage={page} initialSearch={search} initialTag={tag ?? null} />
    </HydrationBoundary>
  );
}
