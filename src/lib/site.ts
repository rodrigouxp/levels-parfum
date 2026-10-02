export const siteConfig = {
  name: "Levels Parfum",
  description:
    "Levels Parfum — fragrâncias de assinatura em Eau de Parfum. A sua presença, em outro nível.",
  // Troque pelo número real (DDI + DDD + número, apenas dígitos).
  whatsappNumber: "5500000000000",
  whatsappMessage: "Olá! Gostaria de conhecer a coleção Levels Parfum.",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
