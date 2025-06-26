/*
  Warnings:

  - You are about to drop the column `ownerContact` on the `Murgagon` table. All the data in the column will be lost.
  - You are about to drop the column `showContact` on the `Murgagon` table. All the data in the column will be lost.
  - You are about to drop the column `showOwner` on the `Murgagon` table. All the data in the column will be lost.
  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `generation` to the `Murgagon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_name_fkey";

-- AlterTable
ALTER TABLE "Murgagon" DROP COLUMN "ownerContact",
DROP COLUMN "showContact",
DROP COLUMN "showOwner",
ADD COLUMN     "generation" TEXT NOT NULL;

-- DropTable
DROP TABLE "Owner";
