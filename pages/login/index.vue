<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          @click="login"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useState, useFetch } from "#app";
definePageMeta({
  layout: false,
});

const email = ref("");
const password = ref("");
const error = ref<string | null>(null);
const router = useRouter();

const login = async () => {
  error.value = null;

  try {
    const response = await $fetch("/api/login", {
      method: "POST",
      body: { email: email.value, password: password.value },
    });

    const  token  = response;

    const userToken = useState("token", () => token);

    router.push("/");
  } catch (err) {
    error.value = "Invalid credentials, please try again.";
    alert("Invalid credentials, please try again.")
  }
};
</script>
