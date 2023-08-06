import { Schema, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";
const CarSchema = new Schema<Car>(
    {
        brand: String,
        model: String,
        year: Number,
        color: String,
        price: Number,
        sold: Boolean,
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        landlordData: {
            bank: {
                name: String,
                accountNumber: String,
                CLABE: String
            }
        },
        references: [
            {
                relation: String,
                reference: {
                    type: Schema.Types.ObjectId,
                    ref: 'Company'
                }
            }
        ],
        startDate: {
            type: Date
        },

    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        versionKey: false,
        // timestamps: true
    }
);
const CarModel = model("Car", CarSchema);
export default CarModel;

// const UserModel = model<Car>("Car", carSchema);