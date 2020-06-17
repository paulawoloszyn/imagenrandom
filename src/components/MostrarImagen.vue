<template>
  <div class="mostrarImg">
    <button @click="cambiarImg">Cambiar imagen</button>
    <h1>{{ name }}</h1>
    <img :src="url" width="500px" height=auto/>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  created() {
      let colRef = db.collection("animals")
      colRef.get().then( snapshot => {
          let size = snapshot.size
          let doc = snapshot.docs[pos]
          let urlImg = doc.data().url
          this.url = urlImg

          let nameImg = doc.data().name
          this.name = nameImg
      })
  },
  methods: {
    cambiarImg: function (event) {
      var pos = (Math.random()* 4 | 0)
      console.log(pos)
    }
  },
  data(){
      return {
          pos: 0,
          url:"",
          name:""
      }
  }
}
</script>

<style>

</style>