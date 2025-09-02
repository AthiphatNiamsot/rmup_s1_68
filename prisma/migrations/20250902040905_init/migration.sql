-- CreateTable
CREATE TABLE "public"."profile" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobile" VARCHAR(10) NOT NULL,
    "cardId" VARCHAR(13) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_username_key" ON "public"."profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profile_mobile_key" ON "public"."profile"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "profile_cardId_key" ON "public"."profile"("cardId");
