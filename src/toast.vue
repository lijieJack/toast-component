<template>
  <div class="toast">{{msg}}</div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  height: 44px;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  border-radius: 5px;
}
</style>