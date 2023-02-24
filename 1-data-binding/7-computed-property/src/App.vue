<template>
  <h1>Drawback of method resolved by computed (in computed property we cant change the property value) </h1><br/>

  <h3>click add button and see the console log  </h3>


  <h3> count  =  {{ count }}</h3><br/><br/>
<button @click="add">Add</button> <br/><br/>

<input type="text" @keyup="appendInputText"/>

<h2>{{ formatedInputValue }}</h2>

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
    }   
  },
  computed:{
    formatedInputValue()
    {
      console.log('executed when only input is changed');

      //this.count += 5;  ==> ERROR
       
      return '==>'+this.inputText 
    }
  }
}

</script>