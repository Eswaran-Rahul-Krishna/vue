<template>
  <h1>Drawback of method.  </h1><br/>

  <h3>click add button and see the console log  </h3>


  <h3> count  =  {{ count }}</h3><br/><br/>
<button @click="add">Add</button> <br/><br/>

<input type="text" @keyup="appendInputText"/>

<h2>{{ getFormatedInputValue() }}</h2>

</template>


<script>
export default{
  data(){
    return{
      count:0,
      inputText:''
    }
  },
  methods:{
    appendInputText(event){
       this.inputText = event.target.value;
    },
    add(){
      this.count++;
    },
    getFormatedInputValue()
    {
      console.log('executed when add button is clicked');
      return '==>'+this.inputText 
    }
  }
}

</script>