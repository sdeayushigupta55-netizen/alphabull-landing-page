import Container from "@/components/Container";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-white/70">
          This is a starter privacy policy placeholder. Replace it with your legal policy (data collection, cookies, contact form handling, etc.).
        </p>

        <div className="mt-8 space-y-4 text-sm text-white/70">
          <p>
            We may collect your name, phone number, and message when you contact us. We use this information only to respond to your enquiry.
          </p>
          <p>
            We do not sell your personal information. For any data-related requests, contact: admin@alphabulltradingacademy.com.
          </p>
          <p className="text-xs text-white/50">
            Disclaimer: Trading involves risk. This website is for educational purposes and does not provide investment advice.
          </p>
        </div>
      </Container>
    </main>
  );
}
