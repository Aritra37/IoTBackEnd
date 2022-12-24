/*
  Warnings:

  - You are about to drop the column `age` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `batch_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone_no` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_batch_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_payment_id_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- DropIndex
DROP INDEX `User_email_phone_no_idx` ON `user`;

-- DropIndex
DROP INDEX `User_phone_no_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `age`,
    DROP COLUMN `batch_id`,
    DROP COLUMN `email`,
    DROP COLUMN `first_name`,
    DROP COLUMN `gender`,
    DROP COLUMN `height`,
    DROP COLUMN `last_name`,
    DROP COLUMN `payment_id`,
    DROP COLUMN `phone_no`,
    DROP COLUMN `weight`,
    ADD COLUMN `Age` INTEGER NOT NULL,
    ADD COLUMN `Batch_id` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `FName` VARCHAR(191) NOT NULL,
    ADD COLUMN `Gender` ENUM('MALE', 'FEMALE') NOT NULL,
    ADD COLUMN `Height` INTEGER NULL,
    ADD COLUMN `LName` VARCHAR(191) NOT NULL,
    ADD COLUMN `Payment_id` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `Phone` BIGINT NOT NULL,
    ADD COLUMN `Weight` DOUBLE NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Phone_key` ON `User`(`Phone`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Email_key` ON `User`(`Email`);

-- CreateIndex
CREATE INDEX `User_Email_Phone_idx` ON `User`(`Email`, `Phone`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Batch_id_fkey` FOREIGN KEY (`Batch_id`) REFERENCES `Batch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Payment_id_fkey` FOREIGN KEY (`Payment_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
