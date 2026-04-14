# test-nuxt-layers

Sebuah Nuxt Layer untuk membagikan konfigurasi, komponen, dan utilitas (*utils*) antar berbagai project Nuxt.

## Instalasi dan Penggunaan

Layer ini dapat di-*extend* (dikonsumsi) pada project Nuxt kamu melalui dua cara: memanfaatkan **NPM Registry** ataupun langsung lewat **Github**.

### Opsi 1: Instalasi via NPM

**Langkah 1:** Tambahkan *package* test-nuxt-layers ke project kamu.

```bash
# Menggunakan npm
npm install test-nuxt-layers

# Menggunakan pnpm
pnpm add test-nuxt-layers

# Menggunakan yarn
yarn add test-nuxt-layers
```

**Langkah 2:** Daftarkan pada properti `extends` di dalam file `nuxt.config.ts` project kamu:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    "test-nuxt-layers"
  ]
});
```

---

### Opsi 2: Integrasi Langsung via Github

Jika kamu lebih menyukai integrasi via Github tanpa melalui NPM Registry, kamu **tidak perlu meng-install lewat command line**. Kamu hanya perlu mengubah properti `extends` di `nuxt.config.ts`.

Nuxt secara cerdas akan me-resolve dan mendownloadnya otomatis (*auto-clone & caching*):

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    "github:rayfajars/test-nuxt-layers"
  ]
});
```

## Pengembangan Layer (Developer)

Jika kamu bermaksud *mengembangkan (dev)* atau mencoba layer ini pada server pengembangan secara lokal, jalankan *command* berikut:

```bash
# Persiapan package manager
pnpm install

# Menjalankan nuxt server
pnpm dev
```
