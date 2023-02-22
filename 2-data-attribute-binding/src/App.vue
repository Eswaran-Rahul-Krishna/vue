<template>
  <h1>Bind data to attribute</h1>

  <h3>Syntax  =  ( v-bind:attr="dataProperty" ) or  ( :attr="dataProperty" )</h3>

  <p>click here (v-bind:href="link") - <a v-bind:href="link">google</a></p>

  <p>click here (:href="link") - <a :href="link">google</a></p>
</template>


<script>
export default{
  data(){
    return {
      link:'https://www.google.co.uk/'
    }
  }
}

</script>