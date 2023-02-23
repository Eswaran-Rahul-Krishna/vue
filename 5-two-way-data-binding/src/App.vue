<template>
  <h5>two-way data binding using => v-model="data"</h5>
  <label>Text Value</label>
  <input type="text" v-model="textValue"><br/><br/>
  <button @click="reset">Reset textValue</button><br/><br/>
  <label>Binded text value : </label>
  <h3>{{ textValue }}</h3>
</template>


<script>
export default{
  data(){
    return{
      textValue:''
    }
  },
  methods:
  {
    reset(){
      this.textValue ='';
    }
  }
}
</script>


