<template>
  <h1>{{ myHeader() }}</h1>

  <h3>{{ body('Im parameter value') }}</h3>

  <h3>{{ bodyDataValue() }}</h3>

  <h1>{{footer()}}</h1>
</template>


<script>
export default{
  data(){
    return{
      dataValue:'Im Data Value'
    }
  },
methods:{
  myHeader(){
    return 'This is header'
  },
  body(name){
    return name;
  },
  bodyDataValue(){
    return this.dataValue;
  },
  footer(){
    return 'This is footer'
  }
}
}
</script>