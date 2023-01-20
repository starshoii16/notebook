<script setup>
import {reactive, ref, onMounted} from 'vue'
const notes = ref([])

const addNote = (params) => {
  notes.value.push({...params})

  localStorage.setItem('notes', JSON.stringify(notes.value))
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((el, index) => index !== id)

  localStorage.setItem('notes', JSON.stringify(notes.value))
}

onMounted(() => {
  let notesList = localStorage.getItem("notes")
  if (notesList === null) {
    return
  }
  notes.value = JSON.parse(notesList)
})
</script>

<template>
  <router-view
      @addNote="addNote"
      @deleteNote="deleteNote"
      :notes="notes"
  >
  </router-view>
</template>

<style scoped>
.node__new {
  display: grid;
}
main {
  display: flex;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
