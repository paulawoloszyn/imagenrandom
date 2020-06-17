<template>
  <div class="home">
    <MostrarImagen />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MostrarImagen from '@/components/MostrarImagen.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MostrarImagen
  }
}
</script>
