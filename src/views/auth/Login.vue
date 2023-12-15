<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="username"
                  label="Username"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  outlined
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginNetwork } from "@/networks/Auth";
import { ErrorModel } from "@/models/ErrorModel";
import { useToast } from "vue-toast-notification";
const username = ref("");
const password = ref("");

const toast = useToast();
function login() {
  LoginNetwork(username.value, password.value)
    .then((data) => {
      if (data?.token) {
        window.location.href = "/products";
      }
    })
    .catch((e) => {
      if (e as ErrorModel) {
        toast.error(e.message);
      } else {
        toast.error(e);
      }
    });
}
</script>

<style scoped></style>
