<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">

      <v-col cols="12" sm="6" lg="3" v-for="(data,index) in dataList" :key="index">
        <v-container class="primary--text">
          <v-row>
            <v-col align="center">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-avatar
                      :id="data.avatarId"
                      class="transition-swing"
                      size="80px"
                      color="white"
                      v-on:click="copyToClipboard($event)"
                      :class="`elevation-${hover ? 8 : 2}`"
                  >
                    <v-icon :color="data.iconColor" size="60px">{{ data.icon }}</v-icon>
                  </v-avatar>
                </template>
              </v-hover>
            </v-col>

            <v-col align="center">
              <v-row justify="center" no-gutters>
                <v-col cols="12" class="title font-weight-medium">{{ data.colName }}</v-col>
                <v-col cols="12">
                  <span :id="data.spanId" class="title font-weight-medium">
                    {{ data.colText }}
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import contactData from '@/util/contactData'

export default {
  name: "Contact",
  methods: {
    copyToClipboard: function (event) {
      var toCopy = document.getElementById(event.currentTarget.id + "Text")
          .innerText;
      console.log(event.currentTarget.id + ":" + toCopy);
      //execCommand只能复制类似于input，textarea等的内容，创建一个临时标签
      var tempTextarea = document.createElement("textarea");
      document.body.appendChild(tempTextarea);
      tempTextarea.value = toCopy;
      tempTextarea.select();
      document.execCommand("Copy");
      document.body.removeChild(tempTextarea);
      alert("已复制到剪贴板");
    },
  },
  data: function () {
    return {
      dataList: contactData
    };
  },
};
</script>

<style scoped>
</style>