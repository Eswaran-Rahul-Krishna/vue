<template>
  <h1>css class data binding</h1>
  <h4>Syntax : </h4>
  <ul>:class="{'class-name':dataProperty , ...}"</ul>
  <ul>:class=" [ 'class-name',{ 'class-name':dataProperty , ... } , ... ]" </ul>

  <h1>click the box</h1>
  <div>
    <span :class="{'selected-color':boxASelected , 'selected-backdround':boxASelected}"  @click="selectedBox('a')">A</span>

    <span :class="{'selected-color':boxBSelected , 'selected-backdround':boxBSelected }"  @click="selectedBox('b')">B</span>
    
    <span :class="{'selected-color':boxCSelected , 'selected-backdround':boxCSelected}"  @click="selectedBox('c')">C</span>
  </div>
  
</template>


<script>

export default{
  data(){
    return{
      boxASelected:false,
      boxBSelected:false,
      boxCSelected:false,
    }
  },
  methods:
  {
    selectedBox(box){
      if(box =='a')
      {
        this.boxASelected = !this.boxASelected;
      }else if(box =='b')
      {
        this.boxBSelected = !this.boxBSelected;
      }else if(box =='c')
      {
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
}

</script>


<style scoped>
span{
    border: dashed;
    border-top-width: medium;
    border-right-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
  border-width: 2px;
  width: 254px;
  display: block;
  height: 50px;
  text-align: center;
  cursor: pointer;
}

div{
  display: flex;display: flex;
    justify-content: space-evenly;
}

.selected-color{
  border-color: red;
}

.selected-backdround{
  background-color: antiquewhite;
}
</style>