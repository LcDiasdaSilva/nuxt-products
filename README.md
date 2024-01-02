# Nuxt 3 Minimal Starter

Nuxt + SSE + Vuetify + Prisma

Desenvolvendo uma galeria de produtos, acessando um banco mysql com prisma. 

/api/products

`model Product {
  id        Int      @id @default(autoincrement())
  name      String?
  type      String?
  price     Float?
  code      String?
  createdAt DateTime @default(now())

  @@map("products")
}`


DEMO [Nuxt Products](https://nuxt.com/docs/getting-started/introduction) to learn more.

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



