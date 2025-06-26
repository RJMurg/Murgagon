-- CreateTable
CREATE TABLE "Murgagon" (
    "id" SERIAL NOT NULL,
    "murgId" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner" TEXT NOT NULL,
    "ownerContact" TEXT NOT NULL,
    "showOwner" BOOLEAN NOT NULL DEFAULT true,
    "showContact" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Murgagon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "murgagonId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logins" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Murgagon_murgId_key" ON "Murgagon"("murgId");

-- CreateIndex
CREATE UNIQUE INDEX "Murgagon_owner_key" ON "Murgagon"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_murgagonId_name_key" ON "Owner"("murgagonId", "name");

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_name_fkey" FOREIGN KEY ("name") REFERENCES "Murgagon"("owner") ON DELETE RESTRICT ON UPDATE CASCADE;
