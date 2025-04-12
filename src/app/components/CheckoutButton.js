'use client'
import { useState } from "react";

export default function CheckoutButton({ title, price, quantity }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, quantity }),
    });

    const data = await response.json();
    if (data.id) {
      window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {loading ? "Processando..." : "Pagar com Mercado Pago"}
    </button>
  );
}
