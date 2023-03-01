<template>
  <global-component></global-component>

  <global-component></global-component>

  <global-component></global-component>
<br/>
  <h>--------------------------------</h>

  <LocalComponent></LocalComponent>

  <LocalComponent></LocalComponent>

  <LocalComponent></LocalComponent>
</template>

<script>
import LocalComponent from './components/Component-2-local-component.vue';

export default{
  components:{LocalComponent}
}

</script>

