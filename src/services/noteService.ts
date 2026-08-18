import axios from "axios"
import type {Note, NoteId, } from '../types/note'

// Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZxdmFAdWtyLm5ldCIsImlhdCI6MTc4NjYyMjc0Mn0.jkg9S2Kty2N0FrvCg1GBSW9zCjuWvjxmxCLSEkC-ik8";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api'; 

interface NotesResponse { 
    notes: Note[],
    totalPages:number,
}


export const fetchNotes = async (search:string, currentPage:number):Promise<NotesResponse> => { 
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        params: {
            search: search,
            page:currentPage,
        }
    }

    const resp = await axios.get('/notes', config);
    return resp.data;
} 

export const addNote = async (noteData: Pick<Note, "title" | "content" | "tag">):Promise<Pick<Note, "title" | "content" | "tag">> => { 
     const config = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const {data} = await axios.post< Pick<Note, "title" | "content" | "tag">>("/notes",noteData, config);
    return data;
}

export const deleteNote = async (id: NoteId):Promise<Note> => { 
    const { data } = await axios.delete<Note>(`/notes/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});
    return data;
}

