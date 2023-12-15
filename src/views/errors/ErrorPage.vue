<template>
  <div id="error-page">
    <div class="error-page">
      <div class="error-page-404">
        <h1>{{ props.title }}</h1>
      </div>
      <h2>{{ props.subTitle }}</h2>
      <button class="justify-center mt-2" @click="handleBackToDashboard" color="primary">
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});

const handleBackToDashboard = () => {
  window.location.href = "/";
};
</script>

<style scoped>
#error-page {
  position: relative;
  height: 100vh;
  background-color: #009789;
  background-size: cover;
  background-position: center;
  padding: 0;
}

#error-page:before {
  content: "";
  padding-top: 20% 9%;
  display: block;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, var(--primary), #000000);
  opacity: 0.9;
}

#error-page .error-page {
  z-index: 1000;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.error-page {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding: 15px;
}

.error-page .error-page-404 {
  position: relative;
  height: 220px;
}

.error-page .error-page-404 h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 186px;
  font-weight: 400;
  margin: 0px;
  background: linear-gradient(130deg, var(--orange), #ffffff);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
}

.error-page h2 {
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-size: 24px;
  font-weight: 300;
  text-transform: inherit;
  margin-top: 0px;
  margin-bottom: 25px;
  letter-spacing: 1px;
}

.error-page a {
  color: #ff6f68;
  font-weight: 200;
  text-decoration: none;
  border-bottom: 1px dashed #ff6f68;
  border-radius: 2px;
}

button.btn.btn-primary.btn.btn-link {
  margin-top: 30px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: var(--orange);
  display: inline-block;
  padding: 16px 38px;
  border: 2px solid transparent;
  border-radius: 40px;
  color: #fff;
  font-weight: 400;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

button.btn.btn-primary.btn.btn-link:hover {
  border: 2px solid white;
  background: transparent;
}
</style>
