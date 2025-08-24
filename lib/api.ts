
import axios from "axios";
import type { Note, NewNote } from "@/types/note";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN ?? "";


const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});


api.interceptors.request.use((config) => {
  if (myKey) {
    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization = `Bearer ${myKey}`;
  }
  return config;
});

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export const getNotes = async (
  search: string,
  page: number,
  tag?: string
): Promise<NotesResponse> => {
  try {
    const params: Record<string, string | number> = { page };
    if (search) params.search = search;
    if (tag) params.tag = tag;

    const { data } = await api.get<NotesResponse>("/notes", { params });
    return data;
  } catch (err: any) {
    const status = err?.response?.status;
    const msg = err?.response?.data?.message || err?.message || "Unknown error";
    throw new Error(`Notes request failed (${status ?? "no-status"}): ${msg}`);
  }
};

export const getSingleNote = async (id: string): Promise<Note> => {
  try {
    const { data } = await api.get<Note>(`/notes/${id}`);
    return data;
  } catch (err: any) {
    const status = err?.response?.status;
    const msg = err?.response?.data?.message || err?.message || "Unknown error";
    throw new Error(`Note request failed (${status ?? "no-status"}): ${msg}`);
  }
};

export const addNote = async (payload: NewNote): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", payload);
  return data;
};

export const createNote = addNote;

export const deleteNote = async (noteId: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${noteId}`);
  return data;
};


export const fetchNotes = getNotes;
export const fetchNoteById = getSingleNote;

