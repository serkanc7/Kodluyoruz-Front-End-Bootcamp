<template>
  <div class="home">
    <div class="home__header">
      <h1 class="home__title">Select Dog Breed</h1>
      <div class="home__breed">
        <select class="home__select" @change="changeBreed">
          <option selected disabled value="">Select dog breed</option>
          <option v-for="breed in breeds" :key="breed">
            {{ breed }}
          </option>
        </select>
      </div>
    </div>
    <div class="home__dog-photo-container">
      <img class="home__dog-photo" :src="imgURL" :alt="selected" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const breeds = ref([]);
    const selected = ref("");
    const imgURL = ref("");

    const changeBreed = (event) => {
      selected.value = event.target.value;
      loadImg(selected.value);
    };

    const loadImg = async (selected) => {
      await fetch(`https://dog.ceo/api/breed/${selected}/images/random`)
        .then((response) => response.json())
        .then((data) => {
          imgURL.value = data.message;
        });
    };

    const getAllDogs = async () =>
      await fetch(`https://dog.ceo/api/breeds/list/all`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          breeds.value = Object.keys(data.message);
        });

    onMounted(() => getAllDogs());

    return {
      breeds,
      changeBreed,
      selected,
      imgURL,
    };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &__title {
    font-size: 20px;
  }
  &__breed {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &__dog-photo {
    width: 100%;
  }
  &__dog-photo-container {
    margin-top: 20px;
    max-width: 500px;
    flex-grow: 1;
  }
  &__select {
    margin-bottom: 16px;
    padding: 6px;
    border: 0;
    border-bottom: 2px solid $black;
    font-weight: bold;
    letter-spacing: 0.15em;
    border-radius: 0;
    &:focus,
    &:active {
      outline: 0;
      border-bottom-color: $pink;
    }
  }
}
</style>

