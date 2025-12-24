"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";
import { getLoggedInUser } from "./user.action";

const { APPWRITE_DATABASE_ID: DATABASE_ID } = process.env;

export const createTransaction = async (
  transaction: CreateTransactionProps
) => {
  const loggedIn = (await getLoggedInUser()) as User | null;
  if (!loggedIn) redirect("/sign-in");
  try {
    const { database } = await createAdminClient();

    const newTransaction = await database.createDocument(
      DATABASE_ID!,
      "transactions",
      ID.unique(),
      {
        channel: "online",
        category: "Transfer",
        senderId: loggedIn.$id,
        receiverId: transaction.receiverBankId,
        ...transaction,
      }
    );
    return parseStringify(newTransaction);
  } catch (error) {
    console.log(error);
  }
};

export const getTransactionsByBankId = async ({
  bankId,
}: getTransactionsByBankIdProps) => {
  try {
    const { database } = await createAdminClient();

    const senderTransactions = await database.listDocuments(
      DATABASE_ID!,
      "transactions",
      [Query.equal("senderBankId", bankId)]
    );

    const receiverTransactions = await database.listDocuments(
      DATABASE_ID!,
      "transactions",
      [Query.equal("receiverBankId", bankId)]
    );

    const transactions = {
      total: senderTransactions.total + receiverTransactions.total,
      documents: [
        ...senderTransactions.documents,
        ...receiverTransactions.documents,
      ],
    };
    return parseStringify(transactions);
  } catch (error) {
    console.log(error);
  }
};
