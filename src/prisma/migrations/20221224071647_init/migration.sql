/*
  Warnings:

  - A unique constraint covering the columns `[Phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `Batch_id` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `Payment_id` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `Phone` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Batch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `batch_capacity_max` INTEGER NOT NULL,
    `batch_capacity_current` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_Phone_key` ON `User`(`Phone`);

-- CreateIndex
CREATE INDEX `User_Email_Phone_idx` ON `User`(`Email`, `Phone`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Batch_id_fkey` FOREIGN KEY (`Batch_id`) REFERENCES `Batch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Payment_id_fkey` FOREIGN KEY (`Payment_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
