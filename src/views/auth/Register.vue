<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="headline">Register</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="register">
                <v-text-field
                  v-model="name"
                  label="Name"
                  type="text"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="business_name"
                  label="Business Name"
                  type="text"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="text"
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
                <v-text-field
                  v-model="password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  outlined
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Register</v-btn>
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
import { RegisterNetwork } from "@/networks/Auth";
import { ErrorModel } from "@/models/ErrorModel";
import { useToast } from "vue-toast-notification";

const email = ref("");
const password = ref("");
const name = ref("");
const password_confirmation = ref("");
const business_name = ref("");

const toast = useToast();

function register() {
  console.log(password_confirmation.value);

  RegisterNetwork(
    email.value,
    password.value,
    password_confirmation.value,
    name.value,
    business_name.value
  )
    .then((data) => {
      if (data) {
        window.location.href = "/";
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
