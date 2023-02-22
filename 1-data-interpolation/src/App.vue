<template>
  <h1>Number</h1>
  <h5>{{item1  }}</h5>

  <h1>String</h1>
  <h5>{{ item2 }}</h5>

  <h1>Array</h1>
  <h5>{{ item3 }}</h5>

  <h1>Decimal</h1>
  <h5>{{ item4 }}</h5>

  <h1>Object</h1>
  <h5>{{ item5 }}</h5>
</template>


<script>
export default{
  data (){
    return {
      item1:1,
      item2:"String",
      item3:[1,2,3,4,5],
      item4:1.33,
      item5:{'name':'Eswaran','email':'test@test.com'}
    }
  }
}
</script>