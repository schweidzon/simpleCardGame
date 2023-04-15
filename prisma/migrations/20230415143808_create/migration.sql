-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_cardsTotypes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_cardsTotypes_AB_unique" ON "_cardsTotypes"("A", "B");

-- CreateIndex
CREATE INDEX "_cardsTotypes_B_index" ON "_cardsTotypes"("B");

-- AddForeignKey
ALTER TABLE "_cardsTotypes" ADD CONSTRAINT "_cardsTotypes_A_fkey" FOREIGN KEY ("A") REFERENCES "cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cardsTotypes" ADD CONSTRAINT "_cardsTotypes_B_fkey" FOREIGN KEY ("B") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
