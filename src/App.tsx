import {
  Nav, Hero, TrustStrip, Features, Pricing, EmergencyBand,
  About, Reviews, Integrations, ServiceArea, QuoteForm, Footer,
} from './sections';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Pricing />
        <EmergencyBand />
        <About />
        <Reviews />
        <Integrations />
        <ServiceArea />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
