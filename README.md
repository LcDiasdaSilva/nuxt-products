# Nuxt 3 Minimal Starter

Nuxt + SSE + Vuetify + Prisma

Desenvolvendo uma galeria de produtos, acessando um banco mysql com prisma.

View [Demo Nuxt Products ui](https://nuxt-products-rouge.vercel.app/).
View [Demo /api/products](https://nuxt-products-rouge.vercel.app/api/products).


# Prisma

```bash

server/api/products

model Product 
  id        Int      @id @default(autoincrement())
  name      String?
  type      String?
  price     Float?
  code      String?
  createdAt DateTime @default(now())
  @@map("products")

```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```
