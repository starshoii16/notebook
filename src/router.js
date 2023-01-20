import { createRouter, createWebHistory } from 'vue-router'

import Notes from '@/components/Notes.vue';
import NoteItem from "@/components/NoteItem.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Notes,
        },
        {
            path: '/:id',
            component: NoteItem,
        }
    ],
    history: createWebHistory(),
})

export default router
