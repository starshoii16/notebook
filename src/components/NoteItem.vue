<script setup>
import {useRoute} from 'vue-router'
import {computed, defineProps} from 'vue'

const route = useRoute()
const props = defineProps(['notes'])
const currentNote = computed(() => props.notes[route.params.id])
</script>

<template>
  <div class="navigation">
    <div class="home" @click="$router.push('/')">Главная</div>
    <div > / {{ currentNote.title }}</div>
  </div>
  <div>
    <div class="currentTitle">{{ currentNote.title }}</div>
    <div>{{ currentNote.description }}</div>
  </div>
</template>

<style>
.home {
  color: blue;
  margin-right: 5px;
}

.navigation {
  display: flex;
}
.currentTitle {
  margin: 15px 0px 15px 0;
  font-size: 30px;
  font-weight: bold;
}
</style>
