<template>
  <div>
    <div>
      <span v-for="(item,index) in list" :key="index">
        <span :class="[item.isChange?'redclass':'']">{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    components: {
    },
    data() {
      return {
        // 原本显示的古诗
        list: [
          { name: "贺", isChange: false },
          { name: "知", isChange: false },
          { name: "张", isChange: false },
          { name: "贺", isChange: false },
          { name: "文", isChange: false },
          { name: "贺", isChange: false },
          { name: "知", isChange: false },
          { name: "哟", isChange: false },
          { name: "章", isChange: false },
          { name: "哟", isChange: false },
          { name: "章", isChange: false },
          { name: "贺", isChange: false },
        ],
      }
    },
    created() {
      // 返回结果，都是需要高亮的（需要高亮3个贺字，1个知字，1个章字体）
      let result = [
        { "name": "贺", isChange: true, from: "third" },
        { "name": "知", isChange: true, from: "third" },
        { "name": "章", isChange: true, from: "third" },
        { "name": "贺", isChange: true, from: "third" },
        { "name": "贺", isChange: true, from: "third" },

      ];

      // 处理后替换需要显示的古诗（深拷贝 原先的古诗）
      let tempList = JSON.parse(JSON.stringify(this.list))

      for (let i = 0; i < result.length; i++) {
        for(let j=0;j<tempList.length;j++){
            if(result[i].name == tempList[j].name && !tempList[j].isChange){
              tempList[j].isChange = true
              console.log(tempList[j])
              break
            }

        }
      }

      this.list = ''
      this.list = tempList

      // console.log(tempList)
    },
    mounted() {



    },
    methods: {

    }

  }
</script>

<style scoped>
  .redclass {
    background: red;
  }
</style>