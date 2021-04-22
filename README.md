# Prisma Next

## Prerequisites

- Docker(MySQL)

## Install

1. docket-compose up -d
1. yarn(npm i)

## Warning

~~Include --schema option because this project prisma directory is `src/prisma` (default directory `/prisma`)~~

package.json

```
"prisma": {
  "schema": "src/prisma/schema.prisma"
}
```

## Scripts

> In my case using yarn `yarn add global prisma` and to use yarn instead of npx

```
npx prisma db push --preview-feature
npx prisma studio
prisma generate
```

## Reference

- https://vercel.com/guides/nextjs-prisma-postgres
