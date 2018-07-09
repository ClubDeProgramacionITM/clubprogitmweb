<template>
   <div>
      <div v-for="(img, i) in images">
         <h2 :id="'hola'+'-'+i">
            <a :href="'#'+'hola'+'-'+i" aria-hidden="true" class="header-anchor">#</a>Hola
         </h2>
         <img  :src="'/' + img" alt="foo" class="image"><br>
      </div> 
   </div>   
</template>
<script>
export default {
  data() {
    return {
      images: [
        "geo.jpg",
        "cetzalt.jpg",
        "gerardo.jpg",
        "juandedios.jpg",
        "mario.jpg",
        "pepe.jpg"
      ]
    };
  }
};
</script>
<style>
.image {
  height: 400px;
}
</style>
