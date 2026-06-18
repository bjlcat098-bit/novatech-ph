import PromoBar from "@/components/promo-bar";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBanner from "@/components/trust-banner";
import Categories from "@/components/categories";
import Brands from "@/components/brands";
import FeaturedProducts from "@/components/featured-products";
import IpadSpotlight from "@/components/ipad-spotlight";
import WhyNovaTech from "@/components/why-novatech";
import Reviews from "@/components/reviews";
import Footer from "@/components/footer";
import FloatingChat from "@/components/floating-chat";
import BestSellers from "@/components/best-sellers";

export default function Home() {
return ( <main className="bg-black"> <PromoBar />


  <Navbar />

  <Hero />

  <TrustBanner />

  <Categories />

  <Brands />
  
  <BestSellers />

  <FeaturedProducts />

  <IpadSpotlight />

  <WhyNovaTech />

  <Reviews />

  <Footer />

  <FloatingChat />
</main>


);
}
