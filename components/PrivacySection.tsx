export default function PrivacySection() {
  return (
    <section
      id="privacy-policy"
      className="border-t border-slate-800 bg-slate-950/80"
    >
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-4 text-sm text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Privacy Policy</h2>

        <p>
          RTO Shield AI  provides AI tools to help ecommerce
          and D2C brands reduce RTO and COD-related losses.
        </p>

        <h3 className="mt-4 font-semibold text-slate-100">
          Information we may collect
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Contact details (name, email, phone, company).</li>
          <li>Order / logistics data that you connect to our product.</li>
          <li>Technical data (IP, device, analytics).</li>
        </ul>

        <h3 className="mt-4 font-semibold text-slate-100">
          How we use information
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide and improve our fraud/risk scoring services.</li>
          <li>To offer onboarding, support and product updates.</li>
          <li>To analyse aggregated usage patterns.</li>
        </ul>

      </div>
    </section>
  );
}
