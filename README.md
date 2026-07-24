# sjeuV - Vue.js Tutorials

A collection of Vue.js tutorials and examples for learning.

## Table of Contents

- [Getting Started](#getting-started)
- [Tutorials](#tutorials)
- [Examples](#examples)

## Getting Started

### Setup Options

1. **Online (Quick Start)**
   - Use CodeSandbox or StackBlitz
   - No local setup needed

2. **Local Setup**
```bash
npm install -g @vue/cli
vue create my-vue-app
cd my-vue-app
npm run serve
```

3. **Vite (Recommended)**
```bash
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev
```

## Tutorials

### 1. Vue Basics

#### Template Syntax
```vue
<template>
  <h1>{{ message }}</h1>
  <p v-html="htmlContent"></p>
  <button @click="increment">Count: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const htmlContent = ref('<strong>Bold text</strong>')
const count = ref(0)

const increment = () => {
  count.value++
}
</script>
```

#### Conditional Rendering
```vue
<template>
  <div v-if="isLoggedIn">Welcome back!</div>
  <div v-else>Please log in</div>
  
  <div v-show="isVisible">This is shown/hidden</div>
</template>
```

#### List Rendering
```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index + 1 }}. {{ item.name }}
    </li>
  </ul>
</template>
```

### 2. Components

#### Creating a Component
```vue
<!-- ChildComponent.vue -->
<template>
  <div class="child">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="$emit('action', title)">Click me</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})

defineEmits(['action'])
</script>
```

#### Using Components
```vue
<template>
  <ChildComponent 
    title="My Title" 
    description="My Description"
    @action="handleAction"
  />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'

const handleAction = (title) => {
  console.log('Action from:', title)
}
</script>
```

### 3. Composition API

#### Reactive State
```vue
<script setup>
import { ref, reactive, computed } from 'vue'

const count = ref(0)
const user = reactive({
  name: 'John',
  age: 30
})

const doubleCount = computed(() => count.value * 2)

const increment = () => {
  count.value++
  user.age++
}
</script>
```

#### Watchers
```vue
<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')

watch(searchQuery, (newValue, oldValue) => {
  console.log(`Search changed from ${oldValue} to ${newValue}`)
  // Debounced API call here
})
</script>
```

### 4. Lifecycle Hooks

```vue
<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
```

### 5. Pinia State Management

```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## Examples

### Todo App

```vue
<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add todo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <p>{{ remaining }} items left</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const newTodo = ref('')
const todos = ref([])
const nextId = ref(1)

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: nextId.value++,
      text: newTodo.value,
      done: false
    })
    newTodo.value = ''
  }
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

const remaining = computed(() => todos.value.filter(t => !t.done).length)
</script>
```

## Resources

- [Vue.js Official Docs](https://vuejs.org)
- [Vue Router](https://router.vuejs.org)
- [Pinia](https://pinia.vuejs.org)
- [VueUse](https://vueuse.org)

## License

MIT
