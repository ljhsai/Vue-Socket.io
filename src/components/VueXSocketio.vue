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
    message(msg: any) {
      console.log('server msg', msg);
      this.something.push('server=>' + msg)
    }
  },

  data() {
    return {
      connectText: 'socket connecting',
      something: [
        // ... something here for the data if you need.
      ]
    }
  },

  mounted() {
    // this.$socket.subscribe("kebab-case", function (data) {
    //   console.log("This event was fired by eg. sio.emit('kebab-case')", data)
    // })
  },

  methods: {
    btnSend() {
      this.$socket.send('client');
    }
  }
}

</script>

<template>
  <h3>vue-x-socketio</h3>
  <div>{{ connectText }}</div>
  <div class="card">
      <div v-for="str in something">{{ str }}</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
