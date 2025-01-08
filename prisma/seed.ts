import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    "id" : "5b504d36-0622-42a8-9365-14823110db5d",
    "userName": "Ibrahima Sarr",
    userUsername: 'kisarrweb',
    userEmail: "kisarrweb@gmail.com",
    invoices: {
      create: [
        {
          "id" : "be3b3a",
          "name" : "Alassane Janvier 2025",
          "issuerName" : "Boutique Alassane",
          "issuerAddress" : "Bignona, 75 331 54 27",
          "clientName" : "Kis@rrWeb s\/c Ibrahima Sarr",
          "clientAddress" : "Bignona - 77 554 41 91",
          "invoiceDate" : "2024-12-28",
          "dueDate" : "2025-01-30",
          "vatActive" : false,
          "vatRate" : 20.0,
          "status" : 1,
        },
        {
         "id" : "44f9c3",
      		"name" : "Janvier 2025",
      		"issuerName" : "Woury Diallo",
      		"issuerAddress" : "Bignona, 78 307 14 88\nBoutique \"Détail en herbe\"",
      		"clientName" : "Kis@rrWeb",
      		"clientAddress" : "Quartier Manguiline Plateau, Bignona\n77 554 41 91",
      		"invoiceDate" : "2025-01-02",
      		"dueDate" : "2025-01-30",
      		"vatActive" : true,
      		"vatRate" : 20.0,
      		"status" : 5,
        },
      ],
    },
  }
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
