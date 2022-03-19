<template>
  <header class="header">
    <a href="#" class="header__logo"
      ><span class="header__logo-dog">Dog</span>App
    </a>
    <nav class="header__menu">
      <router-link to="/" class="header__link">Home</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  flex-grow: 1;

  min-height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
    color: $black;
    &-dog {
      color: #da0037;
    }
  }

  &__menu {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  &__link {
    margin: 0 20px;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    border-radius: 6px;
    background-color: transparent;

    color: $menu-link;
    text-decoration: none;
    text-transform: uppercase;

    transition: background-color 0.4s ease-out;

    &:hover {
      color: $menu-link-hover;
      text-decoration: underline;
    }

    &.router-link-active {
      background-color: $menu-link-active-bgcolor;
      color: $menu-link-active;
    }
  }
}
</style>
