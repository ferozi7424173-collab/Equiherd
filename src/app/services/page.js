import TopSection from "../components/topSection";
import ServicesClient from "./services-client"; // client wrapper

export default function ServicesPage() {
  return (
    <div className="font-sans bg-white">
      <TopSection title="Services" bgImage="/slider/1.jpeg" />
      <section className="mx-auto max-w-6xl px-4 py-10 text-brand">
        <ServicesClient />
      </section>
    </div>
  );
}
