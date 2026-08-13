import axios from "axios"
import {type Note } from '../types/note'

// Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZxdmFAdWtyLm5ldCIsImlhdCI6MTc4NjYyMjc0Mn0.jkg9S2Kty2N0FrvCg1GBSW9zCjuWvjxmxCLSEkC-ik8";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api/docs'; 

interface NotesRespons { 
    notes: Note[],
    totalPages:number,
}


export const fetchNotes = async (search:string):Promise<NotesRespons> => { 
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }

    const resp = await axios.get(`/${search}`,config);
    return resp.data.notes;
} 
