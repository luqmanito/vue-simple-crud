<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.code"
            label="Code"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="form.description"
            label="Description"
            required
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.price"
            label="Price"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Create, Update, Detail } from "@/networks/products";
import { useToast } from "vue-toast-notification";
import { useRoute, useRouter } from "vue-router";
import { ProductModel } from "@/models/ProductModel";

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const toast = useToast();
    const router = useRouter();

    const form = ref<ProductModel>(Object.assign({}, null));

    const loadData = (productId: number) => {
      Detail(productId)
        .then((data) => {
          if (data) {
            form.value = Object.assign({}, data.data);
          }
        })
        .finally(() => {});
    };

    const submitForm = () => {
      if (props.id !== "add") {
        Update(form.value, props.id)
          .then(() => {
            toast.success("Product saved successfully");
            router.push("/products");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      } else {
        Create(form.value)
          .then(() => {
            toast.success("Product saved successfully");
            router.push("/products");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    };

    onMounted(() => {
      console.log("tes");
      console.log(props);

      if (props.id) {
        loadData(props.id);
      }
    });

    return {
      form,
      submitForm,
    };
  },
});
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
