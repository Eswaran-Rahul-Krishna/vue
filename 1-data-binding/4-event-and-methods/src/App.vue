<template>
  <h1>Event & Methods</h1>

  <h3>Syntax: ( v-on:event="methodName(param-optional-if-no-param)" ) or ( @event="methodName" ) </h3>

<h1>counter value = {{ count }}</h1>
<button v-on:click="add">v-on:click="add"</button> <br/><br/>

<button @click="add">@click="add"</button><br/><br/>

<button v-on:click="minus">v-on:click="minus"</button><br/><br/>

<button @click="minus">@click="minus"</button><br/><br/>

<button v-on:click="addNumber(10)">v-on:click="addNumber(10)"</button><br/><br/>

<button @click="addNumber(100)">@click="addNumber(100)"</button><br/><br/>

<b>-----------------------</b><br/>

<label>Input Text</label>
<input type="text" placeholder="call 1 fun on keyup" v-on:keyup="textInput">

<input type="text" placeholder="call 2 fun on kepup" v-on:keyup="textInput($event);add()" >
<h3>Input Text Value</h3>
{{ textInputValue }} <br/>
{{ count }}
</template>

<script>

export default{
  data(){
    return {
      count:0,
      textInputValue:''
    }
  },
  methods:{
    add(){
      this.count++;
    },
    minus()
    {
      this.count--;
    },
    addNumber(num)
    {
      this.count += num;
    },
    textInput(event){
      this.textInputValue = event.target.value;
    }
  }
}
</script>


