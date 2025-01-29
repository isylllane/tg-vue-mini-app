import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTelegramStore = defineStore('useTelegram', () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return { onClose };
})
