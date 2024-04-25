import mongoose from "mongoose";
import { Category } from "../models/Categories.mjs";

async function insertTestCategories() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://marvinxia09:FKm0XWSFeaYTI8ec@cluster0.vkbcnyo.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Test categories data
        const testCategories = [
            { 
                name: "Food",
                properties: [
                    { name: "groceries", type: "String" },
                    { name: "restaurant", type: "String" },
                ]
            },
            { 
                name: "Utilities",
                properties: [
                    { name: "electricity", type: "String" },
                    { name: "gas", type: "String" },
                    { name: "internet", type: "String" },
                ]
            },
            { 
                name: "other",
                properties: [
                    { name: "gas", type: "String" },

                ]
            }
        ];

        // Insert each test category into the database
        for (const category of testCategories) {
            await Category.create(category);
        }

        console.log("Test categories inserted successfully.");
        process.exit(0); // Exit script after successful insertion
    } catch (error) {
        console.error("Error inserting test categories:", error);
        process.exit(1); // Exit script with error code
    }
}

// Run the function to insert test data
insertTestCategories();
