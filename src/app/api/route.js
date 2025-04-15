import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export async function POST(req) {
    try {
        const { title, price, quantity} = await req.json();
        const preference = {
            items: [
                { title, unit_price: price, quantity },
            ],
            payer: {
                email: "test_user_123456@testuser.com"
            },
            back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
                pending: "http://localhost:3000/pending",
            },
            auto_return: "approved",
        };
        const response = await mercadopago.preferences.create(preference);
        return NextResponse.json({ id: response.body.id });
    } catch (error) {
        console.error("Erro ao criar pagamento:", error);
        return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
}
