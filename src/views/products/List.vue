<template>
  <v-data-table :items="items" :headers="headers">
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }}</td>
        <td>
          <v-row>
            <v-btn
              v-for="(action, index) in item.actions"
              :key="index"
              @click="action.onClick"
              icon
            >
              <v-icon>{{ action.icon }}</v-icon>
            </v-btn>
          </v-row>
        </td>
      </tr>
    </template>
  </v-data-table>
  <v-btn @click="handleAddProduct" color="primary">Add Product</v-btn>
  <div class="mt-4">
    <v-btn @click="performLogout" color="primary">Logout</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ProductModel } from "@/models/ProductModel";
import { OptionTable } from "@/models/OptionTable";
import { useToast } from "vue-toast-notification";
import { List, Delete } from "@/networks/products";
import router from "@/router";
import { KEY_TOKEN } from "@/const/CommonConst";

export default defineComponent({
  setup() {
    const loadingTable = ref(false);
    const items = ref<ProductModel[]>([]);
    const total = ref<number>(0);
    const lastPage = ref<number>(1);
    const defaultPerPage = ref<number>(10);

    const headers = [
      { key: "id", title: "No" },
      { key: "name", title: "name" },
      { key: "code", title: "code" },
      { key: "description", title: "description" },
      { key: "price", title: "price" },
      { key: "actions", title: "Actions" },
    ];

    const handleAddProduct = () => {
      window.location.href = "/products/add";
    };

    const performLogout = () => {
      localStorage.removeItem(KEY_TOKEN); 
      window.location.href = "/"; 
    };

    const handleEdit = (productId: number) => {
      router.push(`/products/${productId}`);
    };
    const toast = useToast();
    const handleDelete = (productId: number) => {
      Delete(productId).then(() => {
        toast.success("Product Deleted");
        loadData({
          per_page: defaultPerPage.value,
          page: 1,
          // withTrashed: false,
        });
      });
    };

    const loadData = (optionsTable: OptionTable) => {
      List(optionsTable)
        .then((data) => {
          if (data.meta) {
            total.value = data.meta.total;
            lastPage.value = data.meta.last_page;
          }
          items.value = data.data.map((item) => ({
            ...item,
            actions: [
              {
                label: "Edit",
                icon: "mdi-pencil",
                onClick: () => handleEdit(item?.id),
              },
              {
                label: "Delete",
                icon: "mdi-delete",
                onClick: () => handleDelete(item?.id),
              },
            ],
          }));
        })
        .finally(() => {
          loadingTable.value = false;
        });
    };

    onMounted(() => {
      loadData({
        per_page: defaultPerPage.value,
        page: 1,
        // withTrashed: false,
      });
    });

    return {
      loadingTable,
      items,
      handleAddProduct,
      performLogout,
      total,
      lastPage,
      defaultPerPage,
      loadData,
      headers,
    };
  },
});
</script>
