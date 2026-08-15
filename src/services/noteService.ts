import axios from "axios"
import type {Note, NoteId, } from '../types/note'

// Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZxdmFAdWtyLm5ldCIsImlhdCI6MTc4NjYyMjc0Mn0.jkg9S2Kty2N0FrvCg1GBSW9zCjuWvjxmxCLSEkC-ik8";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api'; 

interface NotesRespons { 
    notes: Note[],
    totalPages:number,
}


export const fetchNotes = async (search:string, currentPage:number):Promise<NotesRespons> => { 
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
    // console.log(resp.data.notes)
    return resp.data;
} 

export const createNote = async (id: NoteId) => { 
    return `${id}`
}

export const deleteNote = async (id: NoteId) => { 
     const respDel = await axios.delete<Note[]>(`/notes/${id}`);
    return respDel;
}

