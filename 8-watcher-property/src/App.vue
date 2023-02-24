<template>
  <h1>watcher used to watch a data. If the data changes then watch will execute. Watcher should have same name as the data property name(other data can be changed inside watcher) </h1><br/>

  <h3>click add button and see the console log (no changes) </h3>
  


  <h3> count  =  {{ count }}</h3><br/><br/>
<button @click="add">Add</button> <br/><br/>
<h2>watcher is watching inputText</h2><br/>
<input type="text" @keyup="appendInputText"/>

<h2> new text value  -  {{ formatedInputNewValue }}</h2>

<h2> old text value  -  {{ formatedInputOldValue }}</h2>

</template>


<script>
export default{
  data(){
    return{
      count:0,
      inputText:'',
      formatedInputNewValue:'',
      formatedInputOldValue:''
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
  // computed:{
  //   formatedInputValue()
  //   {
  //     console.log('executed when only input is changed');

  //     //this.count += 5;  ==> ERROR
       
  //     return '==>'+this.inputText 
  //   }
  // }

  watch:{
    inputText(newNalue,oldValue){
      console.log('executed when only inputText is changed');
      this.formatedInputNewValue = newNalue;
      this.formatedInputOldValue = oldValue;
    }
  }
}

</script>