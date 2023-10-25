<script lang="ts">

export default {
  name: 'Test',
  sockets: {
    connect() {
      console.log('socket connected')
      this.connectText = 'socket connected'
    },
    disconnect() {
      console.log('socket connected')
      this.connectText = 'socket disconnect'
    },
    hello(msg: string) {
      console.log('server msg', msg);
      this.something.push(msg)
    }
  },

  data() {
    return {
      connectText: 'socket connecting',
      something: [] as Array<string>
    }
  },

  mounted() {
    // this.$socket.subscribe("kebab-case", function (data) {
    //   console.log("This event was fired by eg. sio.emit('kebab-case')", data)
    // })
  },

  methods: {
    btnSend() {
      console.log('send')
      this.$socket.emit('hello', 'hello server');
    }
  }
}

</script>

<template>
  <h3>vue-x-socketio</h3>
  <div>{{ connectText }}</div>
  <button type="button" @click="btnSend">发送</button>
  <div class="card">
      <div v-for="str in something">{{ str }}</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
