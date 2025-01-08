import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    userName: 'Alice',
    userUsername: 'alice',
    userEmail: 'alice@prisma.io',
    invoices: {
      create: [
        {
          name: 'Boutique',
        },
      ],
    },
  },
  {
    userName: 'Nilu',
    userUsername: 'nilu',
    userEmail: 'nilu@prisma.io',
    invoices: {
      create: [
        {
          name: 'Prisma on Twitter',
        },
      ],
    },
  },
  {
    userName: 'Mahmoud',
    userUsername: 'moha',
    userEmail: 'mahmoud@prisma.io',
    invoices: {
      create: [
        {
          name: 'Prisma on GitHub',
        },
        {
          name: 'Prisma on YouTube',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
