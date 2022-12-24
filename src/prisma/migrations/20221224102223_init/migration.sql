-- AlterTable
ALTER TABLE `user` ADD COLUMN `Payment_id` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Payment_id_fkey` FOREIGN KEY (`Payment_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
