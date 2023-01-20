<script setup>
import {reactive, ref, defineProps, defineEmits} from 'vue'

const props = defineProps(['notes'])
const emit = defineEmits(['addNote', 'deleteNote'])
const noteData = reactive({
  title: '',
  description: ''
})
const addNote = () => {
  if(noteData.title === '' || noteData.description === '') {
    return
  }

  emit('addNote', noteData)
  noteData.title = ''
  noteData.description = ''
}
</script>

<template>
  <div>
    <header>
      <h1>Заметки</h1>
    </header>
    <main>
      <div class="nodes__new">
        <label>Заголовок</label>
        <input class="node__new-header" v-model="noteData.title" type="text" name="" id="">
        <label>Описание</label>
        <textarea class="node__new-header" v-model="noteData.description"></textarea>
        <!--        <button @click="emit('addNote', noteData)">Добавить</button>-->
        <button class="node__new-btn" @click="addNote()">Добавить</button>
      </div>
      <div class="container">
        <div class="note" v-for="(note, id) in props.notes">
          <p class="note__title">{{ note.title }}</p>
          <p class="note__description">{{ note.description }}</p>
          <div class="note__btn">
            <button class="note__btn-open" @click="$router.push(`/${id}`)">Открыть</button>
            <button class="note__btn-delete" @click="emit('deleteNote', id)">Удалить</button>
          </div>
        </div>
      </div>
    </main>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nodes__new {
  display: grid;
}

main {
  display: flex;
}
@media (max-width: 768px) {
  main {
    /*display: grid;*/
  }
}


.node__new-header {
  border: 2px solid #ebebeb;
  height: 25px;
  border-radius: 5px;
  margin-bottom: 10px;

}

.note {
  width: 210px;
  border: 2px solid #ebebeb;
  border-radius: 5px;
  padding: 5px;
  overflow-x: hidden;
  height: 200px;
  margin: 8px 0px 20px 0px;
}

.note__description {
  width: 100%;
  max-width: 300px;
  height: 95px;

  overflow: hidden;
}

.note__btn {
  display: flex;
  justify-content: space-between;
}

.container {
  display: grid;
  grid-template-columns: 250px 250px 250px;
}
@media (max-width: 600px) {
  .container {
    display: grid;
    grid-template-columns: 250px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
@media (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 250px;

  }
}

.nodes__new {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 500px;
  padding: 20px;
}

.node__new-btn {
  width: 75px;
  background-color: #4954ff;
  color: white;
  border: none;
  height: 25px;
  border-radius: 5px;
}
.note__btn-open {
  height: 25px;
  color: #0700ff;
  border: 1px solid #0700ff;
  background-color: white;
  border-radius: 5px;
}
.note__btn-open:hover {
  color: white;
  border: none;
  background-color: #0700ff;
}
.note__btn-open:active {
  border: 1px solid #0700ff;
  background-color: white;
  color: #0700ff;
}
.note__btn-delete {
  height: 25px;
  color: #ff0000;
  border: 1px solid #ff0000;
  background-color: white;
  border-radius: 5px;
}
.note__btn-delete:hover {
  color: white;
  border: none;
  background-color: #ff0000;
}
.note__btn-delete:active {
  border: 1px solid #ff0000;
  background-color: white;
  color: #ff0000;
}
.note__title {
  font-weight: bold;
}
</style>

