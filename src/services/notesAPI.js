import axios from 'axios'

const API_URL = "https://dhviqhfucfdivqpvqjnl.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_8ieHYK9siTq0zIX5BxZ_gg_LOIeqO6J"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}