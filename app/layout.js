import { Lora, Montserrat, Quicksand } from "next/font/google";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sun Seeds Foods | Natural Spices, Herbal Teas & Superfoods Sri Lanka",
  description:
    "Sun Seeds Foods is Sri Lanka's trusted source for natural spices, Ceylon cinnamon, herbal teas, superfoods, and healthy snacks. Shop chemical-free, ethically sourced, and sustainable products for wellness you can trust.",
  keywords:
    "Sun Seeds, Sri Lanka, spices, Ceylon cinnamon, herbal tea, superfoods, healthy snacks, natural food, chemical-free, sustainable, wellness, organic, premium ingredients",
  openGraph: {
    title:
      "Sun Seeds Foods | Natural Spices, Herbal Teas & Superfoods Sri Lanka",
    description:
      "Shop Sri Lanka's finest natural spices, Ceylon cinnamon, herbal teas, and superfoods. Sun Seeds Foods delivers quality, chemical-free, and sustainable products for your health and wellness.",
    url: "https://sunseedsfoods.com",
    siteName: "Sun Seeds Foods",
    images: [
      {
        url: "/Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun Seeds Foods - Natural Spices and Superfoods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sun Seeds Foods | Natural Spices, Herbal Teas & Superfoods Sri Lanka",
    description:
      "Sri Lanka's trusted source for natural spices, Ceylon cinnamon, herbal teas, and superfoods. Quality you can taste, wellness you can trust.",
    images: ["/Logo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body
        className={`${lora.variable} ${montserrat.variable} ${quicksand.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
