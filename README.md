# test-nuxt-layers

Sebuah Nuxt Layer untuk membagikan konfigurasi, komponen, dan utilitas (utils) antar berbagai project Nuxt.

## Instalasi dan Penggunaan

Layer ini dapat di-extend (dikonsumsi) pada project Nuxt kamu melalui dua cara: memanfaatkan NPM Registry ataupun langsung lewat Github.

### Opsi 1: Instalasi via NPM

**Langkah 1:** Tambahkan package `test-nuxt-layers` dan `@nuxtjs/tailwindcss` ke project kamu.

```bash
# Menggunakan npm
npm install test-nuxt-layers @nuxtjs/tailwindcss

# Menggunakan pnpm
pnpm add test-nuxt-layers @nuxtjs/tailwindcss

# Menggunakan yarn
yarn add test-nuxt-layers @nuxtjs/tailwindcss
```

Opsional di project utama: `tailwindcss`.

**Langkah 2:** Daftarkan pada properti `extends` di dalam file `nuxt.config.ts` project kamu:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["test-nuxt-layers"],
});
```

### Opsi 2: Integrasi Langsung via Github

Jika kamu lebih menyukai integrasi via Github tanpa melalui NPM Registry, kamu tidak perlu `npm install test-nuxt-layers`; cukup ubah properti `extends` di `nuxt.config.ts`. `nuxt` dan `@nuxtjs/tailwindcss` tetap harus ada di project utama.

Nuxt secara cerdas akan me-resolve dan mendownloadnya otomatis (auto-clone & caching):

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["github:rayfajars/test-nuxt-layers"],
});
```

Atau dengan `install: true` (satu tuple di `extends`):

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [["github:rayfajars/test-nuxt-layers", { install: true }]],
});
```

Di project utama harus ada `nuxt` dan `@nuxtjs/tailwindcss`; `tailwindcss` opsional.

## Contoh penggunaan

Setelah `extends` aktif, komponen dan util dari layer bisa dipakai langsung (auto-import).

### Komponen `Button`

```vue
<template>
  <Button />
</template>
```

### Util `formatDate` dan `formatDateTime`

```vue
<script setup lang="ts">
const tanggal = formatDate(new Date());
const tanggalJam = formatDateTime("2025-04-15T10:00:00");
</script>

<template>
  <p>{{ tanggal }}</p>
  <p>{{ tanggalJam }}</p>
</template>
```

---

## Pengembangan Layer (Developer)

Jika kamu bermaksud mengembangkan (dev) atau mencoba layer ini pada server pengembangan secara lokal, jalankan command berikut:

```bash
# Persiapan package manager
pnpm install

# Menjalankan nuxt server
pnpm dev
```
