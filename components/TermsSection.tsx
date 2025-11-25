export default function TermsSection() {
  return (
    <section
      id="terms-of-service"
      className="border-t border-slate-800 bg-slate-950/90"
    >
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-4 text-sm text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Terms of Service</h2>

        <p>
          By using RTO Shield AI, you agree to these terms. If you do not agree,
          please do not use the website or product.
        </p>

        <h3 className="mt-4 font-semibold text-slate-100">
          Use of the service
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>You are responsible for data you provide to our system.</li>
          <li>No illegal or abusive use of the platform.</li>
          <li>We may update the service or terms at any time.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-slate-100">No guarantees</h3>
        <p>
          Our AI risk scoring reduces fraud but cannot guarantee prevention of
          all RTO or risky orders. You make final operational decisions.
        </p>

        <h3 className="mt-4 font-semibold text-slate-100">
          Limitation of liability
        </h3>
        <p>
          To the maximum extent allowed by law, we are not liable for indirect,
          incidental or consequential damages.
        </p>

      </div>
    </section>
  );
}
