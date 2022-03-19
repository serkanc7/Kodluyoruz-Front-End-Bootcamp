<template>
  <div class="countdown">
    <div class="countdown__time">
      <span v-if="minute < 10">0</span>{{ minute }}:<span v-if="second < 10"
        >0</span
      >{{ second }}
    </div>
    <div class="countdown__controls">
      <button
        class="countdown__button"
        @click="startTimer"
        v-if="hasStartButton"
      >
        Start
      </button>
      <button class="countdown__button" @click="stopTimer" v-if="hasStopButton">
        Stop
      </button>
      <button
        class="countdown__button"
        @click="resetTimer"
        v-if="hasResetButton"
      >
        Reset
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const minute = ref(1);
    const second = ref(0);
    const hasStartButton = ref(true);
    const hasStopButton = ref(true);
    const hasResetButton = ref(true);
    let timer = null;
    let totalTime = 60;

    const startTimer = () => {
      hasStartButton.value = false;
      hasStopButton.value = true;
      hasResetButton.value = true;
      timer = setInterval(() => countdown(), 1000);
    };

    const stopTimer = () => {
      hasStartButton.value = true;
      clearInterval(timer);
    };

    const resetTimer = () => {
      hasStartButton.value = true;
      hasStopButton.value = false;
      hasResetButton.value = false;
      minute.value = 1;
      second.value = 0;
      totalTime = 60;
      clearInterval(timer);
      timer = null;
    };

    const countdown = () => {
      if (totalTime >= 1) {
        minute.value = Math.floor(totalTime / 60);
        second.value = totalTime - minute.value * 60;
        totalTime--;
      } else {
        resetTimer();
      }
    };

    return {
      startTimer,
      stopTimer,
      resetTimer,
      timer,
      minute,
      second,
      hasStartButton,
      hasStopButton,
      hasResetButton,
    };
  },
};
</script>

<style lang="scss">
.countdown {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__time {
    font-size: 25vw;
  }

  &__button {
    padding: 10px 20px;
    margin: 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: red;
    font-weight: bold;
    color: white;
    font-size: 20px;
  }
}
</style> 