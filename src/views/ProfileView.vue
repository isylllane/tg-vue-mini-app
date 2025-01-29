<template>
  <div>
    Данные из mini app - {{user}}; {{queryId}}
  </div>
  <button @click="onClose">Закрыть</button>
  <div>
    <div v-if="userData">
      <p>ID: {{userData.id}}</p>
      <p>Telegram ID: {{userData.telegram_id}}</p>
      <p>Data: {{userData.data}}</p>
    </div>
    <div v-else-if="usersData">
      <div v-for="user in usersData" :key="user.id">
        <p>ID: {{user.id}}</p>
        <p>Telegram ID: {{user.telegram_id}}</p>
        <p>Data: {{user.data}}</p>
        <hr>
      </div>
    </div>
    <div v-else>
      <p>Загрузка...</p>
      <p>ddsda</p>
    </div>
    <p v-if="errorMessage" style="color: #ff001e;">{{ errorMessage }}</p>

  </div>
</template>

<script>
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;
const queryId = tg.initDataUnsafe?.query_id;

const onClose = () => {
  tg.close();
};


import axios from 'axios';
export default {
  data() {
    return {
      userData: null,
      usersData: null,
      errorMessage: null
    };
  },
  async mounted() {
    try {
      // пример получения данных конкретного пользователя по id
      const telegramId = 1702859584; // Замените на нужный id пользователя
      const response = await axios.get(`http://176.119.147.215:3000/api/users/${telegramId}`);
      this.userData = response.data;

      // Пример получения всех пользователей
      // const response = await axios.get(`http://YOUR_VPS_IP_ADDRESS:3000/api/users`);
      //   this.usersData = response.data;


    } catch (error) {
      if(error.response) {
        this.errorMessage =  `Ошибка: ${error.response.status}. ${error.response.data.error}`;
      } else {
        this.errorMessage =  `Ошибка: ${error.message}`;
      }

    }
  }
};
</script>
